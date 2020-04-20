goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46645 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46646 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46646);

try{try{var seq__46647 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46648 = null;
var count__46649 = (0);
var i__46650 = (0);
while(true){
if((i__46650 < count__46649)){
var vec__46658 = chunk__46648.cljs$core$IIndexed$_nth$arity$2(null,i__46650);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46658,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46658,(1),null);
var temp__5733__auto___46724 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46724)){
var effect_fn_46725 = temp__5733__auto___46724;
(effect_fn_46725.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46725.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46725.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46726 = seq__46647;
var G__46727 = chunk__46648;
var G__46728 = count__46649;
var G__46729 = (i__46650 + (1));
seq__46647 = G__46726;
chunk__46648 = G__46727;
count__46649 = G__46728;
i__46650 = G__46729;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46647);
if(temp__5735__auto__){
var seq__46647__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46647__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46647__$1);
var G__46730 = cljs.core.chunk_rest(seq__46647__$1);
var G__46731 = c__4609__auto__;
var G__46732 = cljs.core.count(c__4609__auto__);
var G__46733 = (0);
seq__46647 = G__46730;
chunk__46648 = G__46731;
count__46649 = G__46732;
i__46650 = G__46733;
continue;
} else {
var vec__46663 = cljs.core.first(seq__46647__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46663,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46663,(1),null);
var temp__5733__auto___46737 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46737)){
var effect_fn_46738 = temp__5733__auto___46737;
(effect_fn_46738.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46738.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46738.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46739 = cljs.core.next(seq__46647__$1);
var G__46740 = null;
var G__46741 = (0);
var G__46742 = (0);
seq__46647 = G__46739;
chunk__46648 = G__46740;
count__46649 = G__46741;
i__46650 = G__46742;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var end__46386__auto___46743 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now();
var duration__46387__auto___46744 = (end__46386__auto___46743 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46387__auto___46744,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_(end__46386__auto___46743);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46645);
}} else {
var seq__46667 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46668 = null;
var count__46669 = (0);
var i__46670 = (0);
while(true){
if((i__46670 < count__46669)){
var vec__46678 = chunk__46668.cljs$core$IIndexed$_nth$arity$2(null,i__46670);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46678,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46678,(1),null);
var temp__5733__auto___46745 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46745)){
var effect_fn_46746 = temp__5733__auto___46745;
(effect_fn_46746.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46746.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46746.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46747 = seq__46667;
var G__46748 = chunk__46668;
var G__46749 = count__46669;
var G__46750 = (i__46670 + (1));
seq__46667 = G__46747;
chunk__46668 = G__46748;
count__46669 = G__46749;
i__46670 = G__46750;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46667);
if(temp__5735__auto__){
var seq__46667__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46667__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46667__$1);
var G__46751 = cljs.core.chunk_rest(seq__46667__$1);
var G__46752 = c__4609__auto__;
var G__46753 = cljs.core.count(c__4609__auto__);
var G__46754 = (0);
seq__46667 = G__46751;
chunk__46668 = G__46752;
count__46669 = G__46753;
i__46670 = G__46754;
continue;
} else {
var vec__46685 = cljs.core.first(seq__46667__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46685,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46685,(1),null);
var temp__5733__auto___46755 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46755)){
var effect_fn_46756 = temp__5733__auto___46755;
(effect_fn_46756.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46756.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46756.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46757 = cljs.core.next(seq__46667__$1);
var G__46758 = null;
var G__46759 = (0);
var G__46760 = (0);
seq__46667 = G__46757;
chunk__46668 = G__46758;
count__46669 = G__46759;
i__46670 = G__46760;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__46688 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46689 = null;
var count__46690 = (0);
var i__46691 = (0);
while(true){
if((i__46691 < count__46690)){
var map__46697 = chunk__46689.cljs$core$IIndexed$_nth$arity$2(null,i__46691);
var map__46697__$1 = (((((!((map__46697 == null))))?(((((map__46697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46697):map__46697);
var effect = map__46697__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46697__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46697__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_(((function (seq__46688,chunk__46689,count__46690,i__46691,map__46697,map__46697__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(dispatch);
});})(seq__46688,chunk__46689,count__46690,i__46691,map__46697,map__46697__$1,effect,ms,dispatch))
,ms);
}


var G__46761 = seq__46688;
var G__46762 = chunk__46689;
var G__46763 = count__46690;
var G__46764 = (i__46691 + (1));
seq__46688 = G__46761;
chunk__46689 = G__46762;
count__46690 = G__46763;
i__46691 = G__46764;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46688);
if(temp__5735__auto__){
var seq__46688__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46688__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46688__$1);
var G__46765 = cljs.core.chunk_rest(seq__46688__$1);
var G__46766 = c__4609__auto__;
var G__46767 = cljs.core.count(c__4609__auto__);
var G__46768 = (0);
seq__46688 = G__46765;
chunk__46689 = G__46766;
count__46690 = G__46767;
i__46691 = G__46768;
continue;
} else {
var map__46701 = cljs.core.first(seq__46688__$1);
var map__46701__$1 = (((((!((map__46701 == null))))?(((((map__46701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46701):map__46701);
var effect = map__46701__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46701__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46701__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_(((function (seq__46688,chunk__46689,count__46690,i__46691,map__46701,map__46701__$1,effect,ms,dispatch,seq__46688__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(dispatch);
});})(seq__46688,chunk__46689,count__46690,i__46691,map__46701,map__46701__$1,effect,ms,dispatch,seq__46688__$1,temp__5735__auto__))
,ms);
}


var G__46769 = cljs.core.next(seq__46688__$1);
var G__46770 = null;
var G__46771 = (0);
var G__46772 = (0);
seq__46688 = G__46769;
chunk__46689 = G__46770;
count__46690 = G__46771;
i__46691 = G__46772;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__46703 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46704 = null;
var count__46705 = (0);
var i__46706 = (0);
while(true){
if((i__46706 < count__46705)){
var event = chunk__46704.cljs$core$IIndexed$_nth$arity$2(null,i__46706);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(event);


var G__46775 = seq__46703;
var G__46776 = chunk__46704;
var G__46777 = count__46705;
var G__46778 = (i__46706 + (1));
seq__46703 = G__46775;
chunk__46704 = G__46776;
count__46705 = G__46777;
i__46706 = G__46778;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46703);
if(temp__5735__auto__){
var seq__46703__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46703__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46703__$1);
var G__46779 = cljs.core.chunk_rest(seq__46703__$1);
var G__46780 = c__4609__auto__;
var G__46781 = cljs.core.count(c__4609__auto__);
var G__46782 = (0);
seq__46703 = G__46779;
chunk__46704 = G__46780;
count__46705 = G__46781;
i__46706 = G__46782;
continue;
} else {
var event = cljs.core.first(seq__46703__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(event);


var G__46785 = cljs.core.next(seq__46703__$1);
var G__46786 = null;
var G__46787 = (0);
var G__46788 = (0);
seq__46703 = G__46785;
chunk__46704 = G__46786;
count__46705 = G__46787;
i__46706 = G__46788;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__46708 = cljs.core.seq(value);
var chunk__46709 = null;
var count__46710 = (0);
var i__46711 = (0);
while(true){
if((i__46711 < count__46710)){
var event = chunk__46709.cljs$core$IIndexed$_nth$arity$2(null,i__46711);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46789 = seq__46708;
var G__46790 = chunk__46709;
var G__46791 = count__46710;
var G__46792 = (i__46711 + (1));
seq__46708 = G__46789;
chunk__46709 = G__46790;
count__46710 = G__46791;
i__46711 = G__46792;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46708);
if(temp__5735__auto__){
var seq__46708__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46708__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46708__$1);
var G__46795 = cljs.core.chunk_rest(seq__46708__$1);
var G__46796 = c__4609__auto__;
var G__46797 = cljs.core.count(c__4609__auto__);
var G__46798 = (0);
seq__46708 = G__46795;
chunk__46709 = G__46796;
count__46710 = G__46797;
i__46711 = G__46798;
continue;
} else {
var event = cljs.core.first(seq__46708__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46799 = cljs.core.next(seq__46708__$1);
var G__46800 = null;
var G__46801 = (0);
var G__46802 = (0);
seq__46708 = G__46799;
chunk__46709 = G__46800;
count__46710 = G__46801;
i__46711 = G__46802;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.js.map
