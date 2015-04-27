(ns henderson.core)

(def sqrt (.-sqrt js/Math)) ;wrapper for js Math.sqrt
(defn sq [x] (* x x)) ;helper square function

;grab the canvas element
(def canvas (.getElementById js/document "canvas"))
(def ctx (.getContext canvas "2d"))


;frame that will fill the canvas
(def unit-frame {:orig [0 0]
                 :bottom [0 1]
                 :right [1 0]})

;frame that fills a quarter of the canvas
(def quarter-frame {:orig [0 0]
                    :bottom  [0 0.5]
                    :right [0.5 0]})

; vector operations
(defn xcor [v]
  (v 0))
(defn ycor [v]
  (v 1))
(defn +vec [v1 v2] (vec (map + v1 v2)))
(defn -vec [v1 v2] (vec (map - v1 v2)))
(defn scale-vec [m v] (vec (map #(* m %) v)))

;Pythagorean distance between two points
(defn distance [x1 y1 x2 y2]
  (sqrt (+ (sq (- y1 y2)) (sq (- x1 x2)))))



;height of an arbitrary frame
(defn frame-height [frame]
  (let
    [[x1 y1 x2 y2]
    [(xcor (:bottom frame))
     (ycor (:bottom frame))
     (xcor (:orig frame))
     (ycor (:orig frame))]]
    (distance x1 y1 x2 y2)))

;width of an arbitrary frame
(defn frame-width [frame]
  (let
    [[x1 y1 x2 y2]
    [(xcor (:right frame))
     (ycor (:right frame))
     (xcor (:orig frame))
     (ycor (:orig frame))]]
    (distance x1 y1 x2 y2)))

;a frame that is scaled to the size of the canvas element
(defn canvas-frame [ctx]
  (let
    [[canvas-height canvas-width]
    [(.-clientHeight (.-canvas ctx)) (.-clientWidth (.-canvas ctx))]]
    {:orig [0 0]
      :bottom [0 canvas-height]
      :right [canvas-width 0]}))

; Create a painter that will scale an image to a canvas context. Kind of broken - hard
; to implement rotation in canvas. Have to calculate angle of rotation from transformation
; frame, then rotate and reset canvas appropriately.
(defn painter-canvas-img
  [ctx img]
  (let
    [[canvas-height canvas-width]
    [(.-clientHeight (.-canvas ctx)) (.-clientWidth (.-canvas ctx))]]
    (fn [frame] ; return closure to draw in a frameangle
      (.drawImage ctx img
                  (* (xcor (:orig frame)) canvas-width) ; x-coord of origin
                  (* (ycor (:orig frame)) canvas-height) ; y-coord of origin
                  (* (frame-width frame) canvas-width) ; width of frame
                  (* (frame-height frame) canvas-height))))) ; height of frame

; create a mapping function from the unit square to a specific frame.
(defn frame-coord-map [frame]
  (fn [v]
    (+vec
     (:orig frame)
     (+vec (scale-vec (xcor v)
                      (:right frame))
           (scale-vec (ycor v)
                       (:bottom frame))))))

; painter to draw line segments. Scales to the provided 2d canvas context.
(defn painter-canvas-segments [ctx segments]
  (let
    [cframe (canvas-frame ctx)]
    (fn [frame]
      (doseq [seg segments]
        (let [[start-mapped end-mapped]                 ; map the coordinates to the provided frame
              [((frame-coord-map frame) (:start seg))
               ((frame-coord-map frame) (:end seg))]]
          (let [[start-ctx end-ctx]                     ; scale the coordinates to the canvas
                [((frame-coord-map cframe) start-mapped)
                 ((frame-coord-map cframe) end-mapped)]]
            (do
              (.beginPath ctx)
              (set! (.-strokeStyle ctx) (:color seg))
              (.moveTo ctx (xcor start-ctx) (ycor start-ctx))
              (.lineTo ctx (xcor end-ctx) (ycor end-ctx))
              (.stroke ctx))))))))

; transform a painter to map its frame to a new frame.
(defn transform-painter
  [painter! transform-frame]
  (fn [frame]
    (let [m (frame-coord-map frame)]
      (let [new-origin (m (:orig transform-frame))]
        (let [new-frame
              {:orig new-origin
               :bottom (-vec (m (:bottom transform-frame)) new-origin)
               :right (-vec (m (:right transform-frame)) new-origin)}]
        (painter! new-frame))))))


(defn flip-vert [painter!]
  (transform-painter painter!
                     {:orig [0 1]  ; new origin
                      :bottom [0 0]  ; new end of edge1
                      :right [1 1]})) ; new end of edge2

(defn flip-horiz [painter!]
  (transform-painter painter!
                     {:orig [1 0]  ; new origin
                      :bottom [1 1]  ; new end of edge1
                      :right [0 0]})) ; new end of edge2

; split the frame horizontally between two painters with a being the cutoff coefficient
(defn beside [painter1! painter2! a]
  (let [[painter-left! painter-right!]
        [(transform-painter painter1! {:orig [0 0] :bottom [0 1] :right [a 0]})
         (transform-painter painter2! {:orig [a 0] :bottom [a 1] :right [1 0]})]]
    (fn [frame]
      (do
        (painter-left! frame)
        (painter-right! frame)))))

; split the frame vertically between two painters with a being the cutoff coefficient
(defn above [painter1! painter2! a]
  (let [[painter-left! painter-right!]
        [(transform-painter painter1! {:orig [0 0] :bottom [0 a] :right [1 0]})
         (transform-painter painter2! {:orig [0 a] :bottom [0 1] :right [1 a]})]]
    (fn [frame]
      (do
        (painter-left! frame)
        (painter-right! frame)))))

; recursively split a painter to the right n times
(defn right-split [painter! n]
  (if (= n 0)
      painter!
      (let [smaller (right-split painter! (- n 1))]
        (beside painter! (above smaller smaller 0.5) 0.5))))

; recursively split a painter down n times
(defn down-split [painter! n]
  (if (= n 0)
      painter!
      (let [smaller (down-split painter! (- n 1))]
        (above painter! (beside smaller smaller 0.5) 0.5))))

; recursive combination of right-split and down-split
(defn corner-split [painter! n]
  (if (= n 0)
      painter!
      (let [[down right]
            [(down-split painter! (- n 1)) (right-split painter! (- n 1))]]
        (let [[bottom-left top-right corner]
              [(beside down down 0.66666)(above right right 0.66666)(corner-split painter! (- n 1))]]
          (beside (above painter! bottom-left 0.66666)
                  (above top-right corner 0.66666) 0.66666)))))

; recursively split a painter out to the corners
(defn square-limit [painter! n]
  (let [quarter (corner-split painter! n)]
    (let [half (beside (flip-horiz quarter) quarter 0.5)]
      (above (flip-vert half) half 0.5))))

; recursively split a painter into the center
(defn inner-square-limit [painter! n]
  (let [quarter (corner-split painter! n)]
    (let [half (beside quarter (flip-horiz quarter) 0.5)]
      (above half (flip-vert half) 0.5))))


;;; SAMPLE PICTURES
(def test-segments [{:start [0 0] :end [1 1] :color "red"}
                    {:start [0.5 0] :end [0.5 1] :color "blue"}
                    {:start [0.25 0] :end [0.25 1] :color "green"}
                    {:start [0.33333 0] :end [0 0.66666] :color "yellow"}
                    {:start [0.5 0] :end [0 0.75] :color "blue"}
                    {:start [0 0.75] :end [1 0.75] :color "blue"}
                    {:start [1 0.75] :end [0.5 0] :color "blue"}])

(def x-segments [{:start [0 0] :end [1 1] :color "black"}
                 {:start [0 1] :end [1 0] :color "black"}])


;; SAMPLE PAINTERS/COMBINATIONS
(def painter-star! (painter-canvas-segments ctx star-of-david))
(def painter-test! (painter-canvas-segments ctx test-segments))
(def painter-x! (painter-canvas-segments ctx x-segments))

(def painter-combined! (above painter-test! (flip-horiz painter-test!) 0.5))

;; Draw a particular painter
((square-limit (square-limit painter-x! 3) 3) unit-frame)
