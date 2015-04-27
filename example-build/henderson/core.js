// Compiled by ClojureScript 0.0-2755 {}
goog.provide('henderson.core');
goog.require('cljs.core');
henderson.core.sqrt = Math.sqrt;
henderson.core.sq = (function sq(x){
return (x * x);
});
henderson.core.canvas = document.getElementById("canvas");
henderson.core.ctx = henderson.core.canvas.getContext("2d");
henderson.core.unit_frame = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orig","orig",-1678309870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null);
henderson.core.quarter_frame = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orig","orig",-1678309870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0)], null)], null);
henderson.core.xcor = (function xcor(v){
return v.call(null,(0));
});
henderson.core.ycor = (function ycor(v){
return v.call(null,(1));
});
henderson.core._PLUS_vec = (function _PLUS_vec(v1,v2){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,v1,v2));
});
henderson.core._vec = (function _vec(v1,v2){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._,v1,v2));
});
henderson.core.scale_vec = (function scale_vec(m,v){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__1003_SHARP_){
return (m * p1__1003_SHARP_);
}),v));
});
henderson.core.distance = (function distance(x1,y1,x2,y2){
return henderson.core.sqrt.call(null,(henderson.core.sq.call(null,(y1 - y2)) + henderson.core.sq.call(null,(x1 - x2))));
});
henderson.core.frame_height = (function frame_height(frame){
var vec__1005 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [henderson.core.xcor.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(frame)),henderson.core.ycor.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(frame)),henderson.core.xcor.call(null,new cljs.core.Keyword(null,"orig","orig",-1678309870).cljs$core$IFn$_invoke$arity$1(frame)),henderson.core.ycor.call(null,new cljs.core.Keyword(null,"orig","orig",-1678309870).cljs$core$IFn$_invoke$arity$1(frame))], null);
var x1 = cljs.core.nth.call(null,vec__1005,(0),null);
var y1 = cljs.core.nth.call(null,vec__1005,(1),null);
var x2 = cljs.core.nth.call(null,vec__1005,(2),null);
var y2 = cljs.core.nth.call(null,vec__1005,(3),null);
return henderson.core.distance.call(null,x1,y1,x2,y2);
});
henderson.core.frame_width = (function frame_width(frame){
var vec__1007 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [henderson.core.xcor.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(frame)),henderson.core.ycor.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(frame)),henderson.core.xcor.call(null,new cljs.core.Keyword(null,"orig","orig",-1678309870).cljs$core$IFn$_invoke$arity$1(frame)),henderson.core.ycor.call(null,new cljs.core.Keyword(null,"orig","orig",-1678309870).cljs$core$IFn$_invoke$arity$1(frame))], null);
var x1 = cljs.core.nth.call(null,vec__1007,(0),null);
var y1 = cljs.core.nth.call(null,vec__1007,(1),null);
var x2 = cljs.core.nth.call(null,vec__1007,(2),null);
var y2 = cljs.core.nth.call(null,vec__1007,(3),null);
return henderson.core.distance.call(null,x1,y1,x2,y2);
});
henderson.core.canvas_frame = (function canvas_frame(ctx){
var vec__1009 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx.canvas.clientHeight,ctx.canvas.clientWidth], null);
var canvas_height = cljs.core.nth.call(null,vec__1009,(0),null);
var canvas_width = cljs.core.nth.call(null,vec__1009,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orig","orig",-1678309870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),canvas_height], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_width,(0)], null)], null);
});
henderson.core.painter_canvas_img = (function painter_canvas_img(ctx,img){
var vec__1011 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx.canvas.clientHeight,ctx.canvas.clientWidth], null);
var canvas_height = cljs.core.nth.call(null,vec__1011,(0),null);
var canvas_width = cljs.core.nth.call(null,vec__1011,(1),null);
return ((function (vec__1011,canvas_height,canvas_width){
return (function (frame){
return ctx.drawImage(img,(henderson.core.xcor.call(null,new cljs.core.Keyword(null,"orig","orig",-1678309870).cljs$core$IFn$_invoke$arity$1(frame)) * canvas_width),(henderson.core.ycor.call(null,new cljs.core.Keyword(null,"orig","orig",-1678309870).cljs$core$IFn$_invoke$arity$1(frame)) * canvas_height),(henderson.core.frame_width.call(null,frame) * canvas_width),(henderson.core.frame_height.call(null,frame) * canvas_height));
});
;})(vec__1011,canvas_height,canvas_width))
});
henderson.core.frame_coord_map = (function frame_coord_map(frame){
return (function (v){
return henderson.core._PLUS_vec.call(null,new cljs.core.Keyword(null,"orig","orig",-1678309870).cljs$core$IFn$_invoke$arity$1(frame),henderson.core._PLUS_vec.call(null,henderson.core.scale_vec.call(null,henderson.core.xcor.call(null,v),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(frame)),henderson.core.scale_vec.call(null,henderson.core.ycor.call(null,v),new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(frame))));
});
});
henderson.core.painter_canvas_segments = (function painter_canvas_segments(ctx,segments){
var cframe = henderson.core.canvas_frame.call(null,ctx);
return ((function (cframe){
return (function (frame){
var seq__1020 = cljs.core.seq.call(null,segments);
var chunk__1021 = null;
var count__1022 = (0);
var i__1023 = (0);
while(true){
if((i__1023 < count__1022)){
var seg = cljs.core._nth.call(null,chunk__1021,i__1023);
var vec__1024_1028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [henderson.core.frame_coord_map.call(null,frame).call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(seg)),henderson.core.frame_coord_map.call(null,frame).call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(seg))], null);
var start_mapped_1029 = cljs.core.nth.call(null,vec__1024_1028,(0),null);
var end_mapped_1030 = cljs.core.nth.call(null,vec__1024_1028,(1),null);
var vec__1025_1031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [henderson.core.frame_coord_map.call(null,cframe).call(null,start_mapped_1029),henderson.core.frame_coord_map.call(null,cframe).call(null,end_mapped_1030)], null);
var start_ctx_1032 = cljs.core.nth.call(null,vec__1025_1031,(0),null);
var end_ctx_1033 = cljs.core.nth.call(null,vec__1025_1031,(1),null);
ctx.beginPath();

ctx.strokeStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(seg);

ctx.moveTo(henderson.core.xcor.call(null,start_ctx_1032),henderson.core.ycor.call(null,start_ctx_1032));

ctx.lineTo(henderson.core.xcor.call(null,end_ctx_1033),henderson.core.ycor.call(null,end_ctx_1033));

ctx.stroke();

var G__1034 = seq__1020;
var G__1035 = chunk__1021;
var G__1036 = count__1022;
var G__1037 = (i__1023 + (1));
seq__1020 = G__1034;
chunk__1021 = G__1035;
count__1022 = G__1036;
i__1023 = G__1037;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__1020);
if(temp__4126__auto__){
var seq__1020__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1020__$1)){
var c__3645__auto__ = cljs.core.chunk_first.call(null,seq__1020__$1);
var G__1038 = cljs.core.chunk_rest.call(null,seq__1020__$1);
var G__1039 = c__3645__auto__;
var G__1040 = cljs.core.count.call(null,c__3645__auto__);
var G__1041 = (0);
seq__1020 = G__1038;
chunk__1021 = G__1039;
count__1022 = G__1040;
i__1023 = G__1041;
continue;
} else {
var seg = cljs.core.first.call(null,seq__1020__$1);
var vec__1026_1042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [henderson.core.frame_coord_map.call(null,frame).call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(seg)),henderson.core.frame_coord_map.call(null,frame).call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(seg))], null);
var start_mapped_1043 = cljs.core.nth.call(null,vec__1026_1042,(0),null);
var end_mapped_1044 = cljs.core.nth.call(null,vec__1026_1042,(1),null);
var vec__1027_1045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [henderson.core.frame_coord_map.call(null,cframe).call(null,start_mapped_1043),henderson.core.frame_coord_map.call(null,cframe).call(null,end_mapped_1044)], null);
var start_ctx_1046 = cljs.core.nth.call(null,vec__1027_1045,(0),null);
var end_ctx_1047 = cljs.core.nth.call(null,vec__1027_1045,(1),null);
ctx.beginPath();

ctx.strokeStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(seg);

ctx.moveTo(henderson.core.xcor.call(null,start_ctx_1046),henderson.core.ycor.call(null,start_ctx_1046));

ctx.lineTo(henderson.core.xcor.call(null,end_ctx_1047),henderson.core.ycor.call(null,end_ctx_1047));

ctx.stroke();

var G__1048 = cljs.core.next.call(null,seq__1020__$1);
var G__1049 = null;
var G__1050 = (0);
var G__1051 = (0);
seq__1020 = G__1048;
chunk__1021 = G__1049;
count__1022 = G__1050;
i__1023 = G__1051;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(cframe))
});
henderson.core.transform_painter = (function transform_painter(painter_BANG_,transform_frame){
return (function (frame){
var m = henderson.core.frame_coord_map.call(null,frame);
var new_origin = m.call(null,new cljs.core.Keyword(null,"orig","orig",-1678309870).cljs$core$IFn$_invoke$arity$1(transform_frame));
var new_frame = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orig","orig",-1678309870),new_origin,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),henderson.core._vec.call(null,m.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(transform_frame)),new_origin),new cljs.core.Keyword(null,"right","right",-452581833),henderson.core._vec.call(null,m.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(transform_frame)),new_origin)], null);
return painter_BANG_.call(null,new_frame);
});
});
henderson.core.flip_vert = (function flip_vert(painter_BANG_){
return henderson.core.transform_painter.call(null,painter_BANG_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orig","orig",-1678309870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
});
henderson.core.flip_horiz = (function flip_horiz(painter_BANG_){
return henderson.core.transform_painter.call(null,painter_BANG_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orig","orig",-1678309870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
});
henderson.core.beside = (function beside(painter1_BANG_,painter2_BANG_,a){
var vec__1053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [henderson.core.transform_painter.call(null,painter1_BANG_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orig","orig",-1678309870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,(0)], null)], null)),henderson.core.transform_painter.call(null,painter2_BANG_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orig","orig",-1678309870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,(0)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,(1)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null))], null);
var painter_left_BANG_ = cljs.core.nth.call(null,vec__1053,(0),null);
var painter_right_BANG_ = cljs.core.nth.call(null,vec__1053,(1),null);
return ((function (vec__1053,painter_left_BANG_,painter_right_BANG_){
return (function (frame){
painter_left_BANG_.call(null,frame);

return painter_right_BANG_.call(null,frame);
});
;})(vec__1053,painter_left_BANG_,painter_right_BANG_))
});
henderson.core.above = (function above(painter1_BANG_,painter2_BANG_,a){
var vec__1055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [henderson.core.transform_painter.call(null,painter1_BANG_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orig","orig",-1678309870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),a], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)),henderson.core.transform_painter.call(null,painter2_BANG_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orig","orig",-1678309870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),a], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),a], null)], null))], null);
var painter_left_BANG_ = cljs.core.nth.call(null,vec__1055,(0),null);
var painter_right_BANG_ = cljs.core.nth.call(null,vec__1055,(1),null);
return ((function (vec__1055,painter_left_BANG_,painter_right_BANG_){
return (function (frame){
painter_left_BANG_.call(null,frame);

return painter_right_BANG_.call(null,frame);
});
;})(vec__1055,painter_left_BANG_,painter_right_BANG_))
});
henderson.core.right_split = (function right_split(painter_BANG_,n){
if(cljs.core._EQ_.call(null,n,(0))){
return painter_BANG_;
} else {
var smaller = right_split.call(null,painter_BANG_,(n - (1)));
return henderson.core.beside.call(null,painter_BANG_,henderson.core.above.call(null,smaller,smaller,0.66666),0.66666);
}
});
henderson.core.down_split = (function down_split(painter_BANG_,n){
if(cljs.core._EQ_.call(null,n,(0))){
return painter_BANG_;
} else {
var smaller = down_split.call(null,painter_BANG_,(n - (1)));
return henderson.core.above.call(null,painter_BANG_,henderson.core.beside.call(null,smaller,smaller,0.66666),0.66666);
}
});
henderson.core.corner_split = (function corner_split(painter_BANG_,n){
if(cljs.core._EQ_.call(null,n,(0))){
return painter_BANG_;
} else {
var vec__1058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [henderson.core.down_split.call(null,painter_BANG_,(n - (1))),henderson.core.right_split.call(null,painter_BANG_,(n - (1)))], null);
var down = cljs.core.nth.call(null,vec__1058,(0),null);
var right = cljs.core.nth.call(null,vec__1058,(1),null);
var vec__1059 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [henderson.core.beside.call(null,down,down,0.66666),henderson.core.above.call(null,right,right,0.66666),corner_split.call(null,painter_BANG_,(n - (1)))], null);
var bottom_left = cljs.core.nth.call(null,vec__1059,(0),null);
var top_right = cljs.core.nth.call(null,vec__1059,(1),null);
var corner = cljs.core.nth.call(null,vec__1059,(2),null);
return henderson.core.beside.call(null,henderson.core.above.call(null,painter_BANG_,bottom_left,0.66666),henderson.core.above.call(null,top_right,corner,0.66666),0.66666);
}
});
henderson.core.square_limit = (function square_limit(painter_BANG_,n){
var quarter = henderson.core.corner_split.call(null,painter_BANG_,n);
var half = henderson.core.beside.call(null,henderson.core.flip_horiz.call(null,quarter),quarter,0.5);
return henderson.core.above.call(null,henderson.core.flip_vert.call(null,half),half,0.5);
});
henderson.core.inner_square_limit = (function inner_square_limit(painter_BANG_,n){
var quarter = henderson.core.corner_split.call(null,painter_BANG_,n);
var half = henderson.core.beside.call(null,quarter,henderson.core.flip_horiz.call(null,quarter),0.5);
return henderson.core.above.call(null,half,henderson.core.flip_vert.call(null,half),0.5);
});
henderson.core.test_segments = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(1)], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,(1)], null),new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.33333,(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.66666], null),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.75], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.75], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.75], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.75], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0)], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null);
henderson.core.star_of_david = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.75], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.75], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.75], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.75], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0)], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(1)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.25], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.25], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.25], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.25], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(1)], null),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null);
henderson.core.x_segments = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(1)], null),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.5], null),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
henderson.core.painter_star_BANG_ = henderson.core.painter_canvas_segments.call(null,henderson.core.ctx,henderson.core.star_of_david);
henderson.core.painter_test_BANG_ = henderson.core.painter_canvas_segments.call(null,henderson.core.ctx,henderson.core.test_segments);
henderson.core.painter_x_BANG_ = henderson.core.painter_canvas_segments.call(null,henderson.core.ctx,henderson.core.x_segments);
henderson.core.painter_combined_BANG_ = henderson.core.above.call(null,henderson.core.painter_test_BANG_,henderson.core.flip_horiz.call(null,henderson.core.painter_test_BANG_),0.5);
henderson.core.square_limit.call(null,henderson.core.painter_combined_BANG_,(3)).call(null,henderson.core.unit_frame);

//# sourceMappingURL=core.js.map