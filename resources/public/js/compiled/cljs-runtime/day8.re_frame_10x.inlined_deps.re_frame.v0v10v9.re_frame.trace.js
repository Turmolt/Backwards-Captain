goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$start_trace(p__46406){
var map__46407 = p__46406;
var map__46407__$1 = (((((!((map__46407 == null))))?(((((map__46407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46407):map__46407);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46407__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46407__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46407__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46407__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$tracing_cb_debounced(){
var seq__46409_46440 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs));
var chunk__46410_46441 = null;
var count__46411_46443 = (0);
var i__46412_46444 = (0);
while(true){
if((i__46412_46444 < count__46411_46443)){
var vec__46423_46448 = chunk__46410_46441.cljs$core$IIndexed$_nth$arity$2(null,i__46412_46444);
var k_46449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46423_46448,(0),null);
var cb_46450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46423_46448,(1),null);
try{var G__46427_46451 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces);
(cb_46450.cljs$core$IFn$_invoke$arity$1 ? cb_46450.cljs$core$IFn$_invoke$arity$1(G__46427_46451) : cb_46450.call(null,G__46427_46451));
}catch (e46426){var e_46452 = e46426;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46449,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces),e_46452], 0));
}

var G__46456 = seq__46409_46440;
var G__46457 = chunk__46410_46441;
var G__46458 = count__46411_46443;
var G__46459 = (i__46412_46444 + (1));
seq__46409_46440 = G__46456;
chunk__46410_46441 = G__46457;
count__46411_46443 = G__46458;
i__46412_46444 = G__46459;
continue;
} else {
var temp__5735__auto___46462 = cljs.core.seq(seq__46409_46440);
if(temp__5735__auto___46462){
var seq__46409_46464__$1 = temp__5735__auto___46462;
if(cljs.core.chunked_seq_QMARK_(seq__46409_46464__$1)){
var c__4609__auto___46466 = cljs.core.chunk_first(seq__46409_46464__$1);
var G__46469 = cljs.core.chunk_rest(seq__46409_46464__$1);
var G__46470 = c__4609__auto___46466;
var G__46471 = cljs.core.count(c__4609__auto___46466);
var G__46472 = (0);
seq__46409_46440 = G__46469;
chunk__46410_46441 = G__46470;
count__46411_46443 = G__46471;
i__46412_46444 = G__46472;
continue;
} else {
var vec__46428_46473 = cljs.core.first(seq__46409_46464__$1);
var k_46474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46428_46473,(0),null);
var cb_46475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46428_46473,(1),null);
try{var G__46432_46476 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces);
(cb_46475.cljs$core$IFn$_invoke$arity$1 ? cb_46475.cljs$core$IFn$_invoke$arity$1(G__46432_46476) : cb_46475.call(null,G__46432_46476));
}catch (e46431){var e_46477 = e46431;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46474,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces),e_46477], 0));
}

var G__46481 = cljs.core.next(seq__46409_46464__$1);
var G__46482 = null;
var G__46483 = (0);
var G__46484 = (0);
seq__46409_46440 = G__46481;
chunk__46410_46441 = G__46482;
count__46411_46443 = G__46483;
i__46412_46444 = G__46484;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.js.map
