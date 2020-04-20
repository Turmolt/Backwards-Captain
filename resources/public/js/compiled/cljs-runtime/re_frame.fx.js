goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__51351 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__51352 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__51352);

try{try{var seq__51356 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51357 = null;
var count__51358 = (0);
var i__51359 = (0);
while(true){
if((i__51359 < count__51358)){
var vec__51368 = chunk__51357.cljs$core$IIndexed$_nth$arity$2(null,i__51359);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51368,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51368,(1),null);
var temp__5733__auto___51427 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51427)){
var effect_fn_51432 = temp__5733__auto___51427;
(effect_fn_51432.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51432.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51432.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51437 = seq__51356;
var G__51438 = chunk__51357;
var G__51439 = count__51358;
var G__51440 = (i__51359 + (1));
seq__51356 = G__51437;
chunk__51357 = G__51438;
count__51358 = G__51439;
i__51359 = G__51440;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51356);
if(temp__5735__auto__){
var seq__51356__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51356__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51356__$1);
var G__51445 = cljs.core.chunk_rest(seq__51356__$1);
var G__51446 = c__4609__auto__;
var G__51447 = cljs.core.count(c__4609__auto__);
var G__51448 = (0);
seq__51356 = G__51445;
chunk__51357 = G__51446;
count__51358 = G__51447;
i__51359 = G__51448;
continue;
} else {
var vec__51371 = cljs.core.first(seq__51356__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51371,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51371,(1),null);
var temp__5733__auto___51449 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51449)){
var effect_fn_51450 = temp__5733__auto___51449;
(effect_fn_51450.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51450.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51450.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51451 = cljs.core.next(seq__51356__$1);
var G__51452 = null;
var G__51453 = (0);
var G__51454 = (0);
seq__51356 = G__51451;
chunk__51357 = G__51452;
count__51358 = G__51453;
i__51359 = G__51454;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51097__auto___51458 = re_frame.interop.now();
var duration__51098__auto___51459 = (end__51097__auto___51458 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51098__auto___51459,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51097__auto___51458);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__51351);
}} else {
var seq__51374 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51375 = null;
var count__51376 = (0);
var i__51377 = (0);
while(true){
if((i__51377 < count__51376)){
var vec__51387 = chunk__51375.cljs$core$IIndexed$_nth$arity$2(null,i__51377);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51387,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51387,(1),null);
var temp__5733__auto___51463 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51463)){
var effect_fn_51464 = temp__5733__auto___51463;
(effect_fn_51464.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51464.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51464.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51465 = seq__51374;
var G__51466 = chunk__51375;
var G__51467 = count__51376;
var G__51468 = (i__51377 + (1));
seq__51374 = G__51465;
chunk__51375 = G__51466;
count__51376 = G__51467;
i__51377 = G__51468;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51374);
if(temp__5735__auto__){
var seq__51374__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51374__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51374__$1);
var G__51473 = cljs.core.chunk_rest(seq__51374__$1);
var G__51474 = c__4609__auto__;
var G__51475 = cljs.core.count(c__4609__auto__);
var G__51476 = (0);
seq__51374 = G__51473;
chunk__51375 = G__51474;
count__51376 = G__51475;
i__51377 = G__51476;
continue;
} else {
var vec__51391 = cljs.core.first(seq__51374__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51391,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51391,(1),null);
var temp__5733__auto___51477 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51477)){
var effect_fn_51478 = temp__5733__auto___51477;
(effect_fn_51478.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51478.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51478.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51482 = cljs.core.next(seq__51374__$1);
var G__51483 = null;
var G__51484 = (0);
var G__51485 = (0);
seq__51374 = G__51482;
chunk__51375 = G__51483;
count__51376 = G__51484;
i__51377 = G__51485;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__51394 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51395 = null;
var count__51396 = (0);
var i__51397 = (0);
while(true){
if((i__51397 < count__51396)){
var map__51407 = chunk__51395.cljs$core$IIndexed$_nth$arity$2(null,i__51397);
var map__51407__$1 = (((((!((map__51407 == null))))?(((((map__51407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51407):map__51407);
var effect = map__51407__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51407__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51407__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51394,chunk__51395,count__51396,i__51397,map__51407,map__51407__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51394,chunk__51395,count__51396,i__51397,map__51407,map__51407__$1,effect,ms,dispatch))
,ms);
}


var G__51490 = seq__51394;
var G__51491 = chunk__51395;
var G__51492 = count__51396;
var G__51493 = (i__51397 + (1));
seq__51394 = G__51490;
chunk__51395 = G__51491;
count__51396 = G__51492;
i__51397 = G__51493;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51394);
if(temp__5735__auto__){
var seq__51394__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51394__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51394__$1);
var G__51494 = cljs.core.chunk_rest(seq__51394__$1);
var G__51495 = c__4609__auto__;
var G__51496 = cljs.core.count(c__4609__auto__);
var G__51497 = (0);
seq__51394 = G__51494;
chunk__51395 = G__51495;
count__51396 = G__51496;
i__51397 = G__51497;
continue;
} else {
var map__51409 = cljs.core.first(seq__51394__$1);
var map__51409__$1 = (((((!((map__51409 == null))))?(((((map__51409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51409):map__51409);
var effect = map__51409__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51409__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51409__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51394,chunk__51395,count__51396,i__51397,map__51409,map__51409__$1,effect,ms,dispatch,seq__51394__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51394,chunk__51395,count__51396,i__51397,map__51409,map__51409__$1,effect,ms,dispatch,seq__51394__$1,temp__5735__auto__))
,ms);
}


var G__51499 = cljs.core.next(seq__51394__$1);
var G__51500 = null;
var G__51501 = (0);
var G__51502 = (0);
seq__51394 = G__51499;
chunk__51395 = G__51500;
count__51396 = G__51501;
i__51397 = G__51502;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__51412 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51413 = null;
var count__51414 = (0);
var i__51415 = (0);
while(true){
if((i__51415 < count__51414)){
var event = chunk__51413.cljs$core$IIndexed$_nth$arity$2(null,i__51415);
re_frame.router.dispatch(event);


var G__51503 = seq__51412;
var G__51504 = chunk__51413;
var G__51505 = count__51414;
var G__51506 = (i__51415 + (1));
seq__51412 = G__51503;
chunk__51413 = G__51504;
count__51414 = G__51505;
i__51415 = G__51506;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51412);
if(temp__5735__auto__){
var seq__51412__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51412__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51412__$1);
var G__51507 = cljs.core.chunk_rest(seq__51412__$1);
var G__51508 = c__4609__auto__;
var G__51509 = cljs.core.count(c__4609__auto__);
var G__51510 = (0);
seq__51412 = G__51507;
chunk__51413 = G__51508;
count__51414 = G__51509;
i__51415 = G__51510;
continue;
} else {
var event = cljs.core.first(seq__51412__$1);
re_frame.router.dispatch(event);


var G__51511 = cljs.core.next(seq__51412__$1);
var G__51512 = null;
var G__51513 = (0);
var G__51514 = (0);
seq__51412 = G__51511;
chunk__51413 = G__51512;
count__51414 = G__51513;
i__51415 = G__51514;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__51418 = cljs.core.seq(value);
var chunk__51419 = null;
var count__51420 = (0);
var i__51421 = (0);
while(true){
if((i__51421 < count__51420)){
var event = chunk__51419.cljs$core$IIndexed$_nth$arity$2(null,i__51421);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__51515 = seq__51418;
var G__51516 = chunk__51419;
var G__51517 = count__51420;
var G__51518 = (i__51421 + (1));
seq__51418 = G__51515;
chunk__51419 = G__51516;
count__51420 = G__51517;
i__51421 = G__51518;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51418);
if(temp__5735__auto__){
var seq__51418__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51418__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51418__$1);
var G__51519 = cljs.core.chunk_rest(seq__51418__$1);
var G__51520 = c__4609__auto__;
var G__51521 = cljs.core.count(c__4609__auto__);
var G__51522 = (0);
seq__51418 = G__51519;
chunk__51419 = G__51520;
count__51420 = G__51521;
i__51421 = G__51522;
continue;
} else {
var event = cljs.core.first(seq__51418__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__51523 = cljs.core.next(seq__51418__$1);
var G__51524 = null;
var G__51525 = (0);
var G__51526 = (0);
seq__51418 = G__51523;
chunk__51419 = G__51524;
count__51420 = G__51525;
i__51421 = G__51526;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
