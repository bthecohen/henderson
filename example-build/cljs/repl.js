// Compiled by ClojureScript 0.0-2755 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17776_17780 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17777_17781 = null;
var count__17778_17782 = (0);
var i__17779_17783 = (0);
while(true){
if((i__17779_17783 < count__17778_17782)){
var f_17784 = cljs.core._nth.call(null,chunk__17777_17781,i__17779_17783);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_17784);

var G__17785 = seq__17776_17780;
var G__17786 = chunk__17777_17781;
var G__17787 = count__17778_17782;
var G__17788 = (i__17779_17783 + (1));
seq__17776_17780 = G__17785;
chunk__17777_17781 = G__17786;
count__17778_17782 = G__17787;
i__17779_17783 = G__17788;
continue;
} else {
var temp__4126__auto___17789 = cljs.core.seq.call(null,seq__17776_17780);
if(temp__4126__auto___17789){
var seq__17776_17790__$1 = temp__4126__auto___17789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17776_17790__$1)){
var c__4709__auto___17791 = cljs.core.chunk_first.call(null,seq__17776_17790__$1);
var G__17792 = cljs.core.chunk_rest.call(null,seq__17776_17790__$1);
var G__17793 = c__4709__auto___17791;
var G__17794 = cljs.core.count.call(null,c__4709__auto___17791);
var G__17795 = (0);
seq__17776_17780 = G__17792;
chunk__17777_17781 = G__17793;
count__17778_17782 = G__17794;
i__17779_17783 = G__17795;
continue;
} else {
var f_17796 = cljs.core.first.call(null,seq__17776_17790__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_17796);

var G__17797 = cljs.core.next.call(null,seq__17776_17790__$1);
var G__17798 = null;
var G__17799 = (0);
var G__17800 = (0);
seq__17776_17780 = G__17797;
chunk__17777_17781 = G__17798;
count__17778_17782 = G__17799;
i__17779_17783 = G__17800;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map