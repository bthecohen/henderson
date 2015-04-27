(defproject henderson "0.1.0-SNAPSHOT"
  :description "A Clojurescript/HTML Canvas implementation of the Henderson Picture Language from SICP"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2755"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ["out" "out-adv"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :main henderson.core
                :output-to "out/henderson.js"
                :output-dir "out"
                :optimizations :none
                :cache-analysis true
                :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :main henderson.core
                :output-to "out-adv/henderson.min.js"
                :output-dir "out-adv"
                :optimizations :advanced
                :pretty-print false
                :source-map "out-adv/henderson.map"}}]})
