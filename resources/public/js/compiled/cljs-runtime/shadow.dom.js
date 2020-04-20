goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__56171 = coll;
var G__56172 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__56171,G__56172) : shadow.dom.lazy_native_coll_seq.call(null,G__56171,G__56172));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__56195 = arguments.length;
switch (G__56195) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__56204 = arguments.length;
switch (G__56204) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__56209 = arguments.length;
switch (G__56209) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__56215 = arguments.length;
switch (G__56215) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__56221 = arguments.length;
switch (G__56221) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__56224 = document;
var G__56225 = shadow.dom.dom_node(el);
return goog.dom.contains(G__56224,G__56225);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__56227 = shadow.dom.dom_node(parent);
var G__56228 = shadow.dom.dom_node(el);
return goog.dom.contains(G__56227,G__56228);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__56231 = shadow.dom.dom_node(el);
var G__56232 = cls;
return goog.dom.classlist.add(G__56231,G__56232);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__56233 = shadow.dom.dom_node(el);
var G__56234 = cls;
return goog.dom.classlist.remove(G__56233,G__56234);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__56237 = arguments.length;
switch (G__56237) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__56239 = shadow.dom.dom_node(el);
var G__56240 = cls;
return goog.dom.classlist.toggle(G__56239,G__56240);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e56242){if((e56242 instanceof Object)){
var e = e56242;
return console.log("didnt support attachEvent",el,e);
} else {
throw e56242;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__56247 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__56248 = null;
var count__56249 = (0);
var i__56250 = (0);
while(true){
if((i__56250 < count__56249)){
var el = chunk__56248.cljs$core$IIndexed$_nth$arity$2(null,i__56250);
var handler_56830__$1 = ((function (seq__56247,chunk__56248,count__56249,i__56250,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__56247,chunk__56248,count__56249,i__56250,el))
;
var G__56263_56832 = el;
var G__56264_56833 = cljs.core.name(ev);
var G__56265_56834 = handler_56830__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__56263_56832,G__56264_56833,G__56265_56834) : shadow.dom.dom_listen.call(null,G__56263_56832,G__56264_56833,G__56265_56834));


var G__56836 = seq__56247;
var G__56837 = chunk__56248;
var G__56838 = count__56249;
var G__56839 = (i__56250 + (1));
seq__56247 = G__56836;
chunk__56248 = G__56837;
count__56249 = G__56838;
i__56250 = G__56839;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56247);
if(temp__5735__auto__){
var seq__56247__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56247__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56247__$1);
var G__56840 = cljs.core.chunk_rest(seq__56247__$1);
var G__56841 = c__4609__auto__;
var G__56842 = cljs.core.count(c__4609__auto__);
var G__56843 = (0);
seq__56247 = G__56840;
chunk__56248 = G__56841;
count__56249 = G__56842;
i__56250 = G__56843;
continue;
} else {
var el = cljs.core.first(seq__56247__$1);
var handler_56844__$1 = ((function (seq__56247,chunk__56248,count__56249,i__56250,el,seq__56247__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__56247,chunk__56248,count__56249,i__56250,el,seq__56247__$1,temp__5735__auto__))
;
var G__56267_56846 = el;
var G__56268_56847 = cljs.core.name(ev);
var G__56269_56848 = handler_56844__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__56267_56846,G__56268_56847,G__56269_56848) : shadow.dom.dom_listen.call(null,G__56267_56846,G__56268_56847,G__56269_56848));


var G__56849 = cljs.core.next(seq__56247__$1);
var G__56850 = null;
var G__56851 = (0);
var G__56852 = (0);
seq__56247 = G__56849;
chunk__56248 = G__56850;
count__56249 = G__56851;
i__56250 = G__56852;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__56275 = arguments.length;
switch (G__56275) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__56281 = shadow.dom.dom_node(el);
var G__56282 = cljs.core.name(ev);
var G__56283 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__56281,G__56282,G__56283) : shadow.dom.dom_listen.call(null,G__56281,G__56282,G__56283));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__56285 = shadow.dom.dom_node(el);
var G__56286 = cljs.core.name(ev);
var G__56287 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__56285,G__56286,G__56287) : shadow.dom.dom_listen_remove.call(null,G__56285,G__56286,G__56287));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__56288 = cljs.core.seq(events);
var chunk__56289 = null;
var count__56290 = (0);
var i__56291 = (0);
while(true){
if((i__56291 < count__56290)){
var vec__56300 = chunk__56289.cljs$core$IIndexed$_nth$arity$2(null,i__56291);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56300,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56856 = seq__56288;
var G__56857 = chunk__56289;
var G__56858 = count__56290;
var G__56859 = (i__56291 + (1));
seq__56288 = G__56856;
chunk__56289 = G__56857;
count__56290 = G__56858;
i__56291 = G__56859;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56288);
if(temp__5735__auto__){
var seq__56288__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56288__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56288__$1);
var G__56860 = cljs.core.chunk_rest(seq__56288__$1);
var G__56861 = c__4609__auto__;
var G__56862 = cljs.core.count(c__4609__auto__);
var G__56863 = (0);
seq__56288 = G__56860;
chunk__56289 = G__56861;
count__56290 = G__56862;
i__56291 = G__56863;
continue;
} else {
var vec__56304 = cljs.core.first(seq__56288__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56304,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56304,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56866 = cljs.core.next(seq__56288__$1);
var G__56867 = null;
var G__56868 = (0);
var G__56869 = (0);
seq__56288 = G__56866;
chunk__56289 = G__56867;
count__56290 = G__56868;
i__56291 = G__56869;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__56308 = cljs.core.seq(styles);
var chunk__56309 = null;
var count__56310 = (0);
var i__56311 = (0);
while(true){
if((i__56311 < count__56310)){
var vec__56325 = chunk__56309.cljs$core$IIndexed$_nth$arity$2(null,i__56311);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56325,(1),null);
var G__56328_56870 = dom;
var G__56329_56871 = cljs.core.name(k);
var G__56330_56872 = (((v == null))?"":v);
goog.style.setStyle(G__56328_56870,G__56329_56871,G__56330_56872);


var G__56874 = seq__56308;
var G__56875 = chunk__56309;
var G__56876 = count__56310;
var G__56877 = (i__56311 + (1));
seq__56308 = G__56874;
chunk__56309 = G__56875;
count__56310 = G__56876;
i__56311 = G__56877;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56308);
if(temp__5735__auto__){
var seq__56308__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56308__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56308__$1);
var G__56878 = cljs.core.chunk_rest(seq__56308__$1);
var G__56879 = c__4609__auto__;
var G__56880 = cljs.core.count(c__4609__auto__);
var G__56881 = (0);
seq__56308 = G__56878;
chunk__56309 = G__56879;
count__56310 = G__56880;
i__56311 = G__56881;
continue;
} else {
var vec__56332 = cljs.core.first(seq__56308__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56332,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56332,(1),null);
var G__56335_56882 = dom;
var G__56336_56883 = cljs.core.name(k);
var G__56337_56884 = (((v == null))?"":v);
goog.style.setStyle(G__56335_56882,G__56336_56883,G__56337_56884);


var G__56886 = cljs.core.next(seq__56308__$1);
var G__56887 = null;
var G__56888 = (0);
var G__56889 = (0);
seq__56308 = G__56886;
chunk__56309 = G__56887;
count__56310 = G__56888;
i__56311 = G__56889;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__56342_56892 = key;
var G__56342_56893__$1 = (((G__56342_56892 instanceof cljs.core.Keyword))?G__56342_56892.fqn:null);
switch (G__56342_56893__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_56898 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_56898,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_56898,"aria-");
}
})())){
el.setAttribute(ks_56898,value);
} else {
(el[ks_56898] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__56352 = shadow.dom.dom_node(el);
var G__56353 = cls;
return goog.dom.classlist.contains(G__56352,G__56353);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__56359){
var map__56360 = p__56359;
var map__56360__$1 = (((((!((map__56360 == null))))?(((((map__56360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56360):map__56360);
var props = map__56360__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__56364 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56364,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56364,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56364,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__56369 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__56369,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__56369;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__56371 = arguments.length;
switch (G__56371) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__56377){
var vec__56379 = p__56377;
var seq__56380 = cljs.core.seq(vec__56379);
var first__56381 = cljs.core.first(seq__56380);
var seq__56380__$1 = cljs.core.next(seq__56380);
var nn = first__56381;
var first__56381__$1 = cljs.core.first(seq__56380__$1);
var seq__56380__$2 = cljs.core.next(seq__56380__$1);
var np = first__56381__$1;
var nc = seq__56380__$2;
var node = vec__56379;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56382 = nn;
var G__56383 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__56382,G__56383) : create_fn.call(null,G__56382,G__56383));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56384 = nn;
var G__56385 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__56384,G__56385) : create_fn.call(null,G__56384,G__56385));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__56386 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56386,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56386,(1),null);
var seq__56389_56922 = cljs.core.seq(node_children);
var chunk__56390_56923 = null;
var count__56391_56924 = (0);
var i__56392_56925 = (0);
while(true){
if((i__56392_56925 < count__56391_56924)){
var child_struct_56926 = chunk__56390_56923.cljs$core$IIndexed$_nth$arity$2(null,i__56392_56925);
var children_56927 = shadow.dom.dom_node(child_struct_56926);
if(cljs.core.seq_QMARK_(children_56927)){
var seq__56420_56928 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56927));
var chunk__56422_56929 = null;
var count__56423_56930 = (0);
var i__56424_56931 = (0);
while(true){
if((i__56424_56931 < count__56423_56930)){
var child_56936 = chunk__56422_56929.cljs$core$IIndexed$_nth$arity$2(null,i__56424_56931);
if(cljs.core.truth_(child_56936)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56936);


var G__56937 = seq__56420_56928;
var G__56938 = chunk__56422_56929;
var G__56939 = count__56423_56930;
var G__56940 = (i__56424_56931 + (1));
seq__56420_56928 = G__56937;
chunk__56422_56929 = G__56938;
count__56423_56930 = G__56939;
i__56424_56931 = G__56940;
continue;
} else {
var G__56941 = seq__56420_56928;
var G__56942 = chunk__56422_56929;
var G__56943 = count__56423_56930;
var G__56944 = (i__56424_56931 + (1));
seq__56420_56928 = G__56941;
chunk__56422_56929 = G__56942;
count__56423_56930 = G__56943;
i__56424_56931 = G__56944;
continue;
}
} else {
var temp__5735__auto___56946 = cljs.core.seq(seq__56420_56928);
if(temp__5735__auto___56946){
var seq__56420_56947__$1 = temp__5735__auto___56946;
if(cljs.core.chunked_seq_QMARK_(seq__56420_56947__$1)){
var c__4609__auto___56948 = cljs.core.chunk_first(seq__56420_56947__$1);
var G__56949 = cljs.core.chunk_rest(seq__56420_56947__$1);
var G__56950 = c__4609__auto___56948;
var G__56951 = cljs.core.count(c__4609__auto___56948);
var G__56952 = (0);
seq__56420_56928 = G__56949;
chunk__56422_56929 = G__56950;
count__56423_56930 = G__56951;
i__56424_56931 = G__56952;
continue;
} else {
var child_56953 = cljs.core.first(seq__56420_56947__$1);
if(cljs.core.truth_(child_56953)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56953);


var G__56954 = cljs.core.next(seq__56420_56947__$1);
var G__56955 = null;
var G__56956 = (0);
var G__56957 = (0);
seq__56420_56928 = G__56954;
chunk__56422_56929 = G__56955;
count__56423_56930 = G__56956;
i__56424_56931 = G__56957;
continue;
} else {
var G__56959 = cljs.core.next(seq__56420_56947__$1);
var G__56960 = null;
var G__56961 = (0);
var G__56962 = (0);
seq__56420_56928 = G__56959;
chunk__56422_56929 = G__56960;
count__56423_56930 = G__56961;
i__56424_56931 = G__56962;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56927);
}


var G__56964 = seq__56389_56922;
var G__56965 = chunk__56390_56923;
var G__56966 = count__56391_56924;
var G__56967 = (i__56392_56925 + (1));
seq__56389_56922 = G__56964;
chunk__56390_56923 = G__56965;
count__56391_56924 = G__56966;
i__56392_56925 = G__56967;
continue;
} else {
var temp__5735__auto___56968 = cljs.core.seq(seq__56389_56922);
if(temp__5735__auto___56968){
var seq__56389_56969__$1 = temp__5735__auto___56968;
if(cljs.core.chunked_seq_QMARK_(seq__56389_56969__$1)){
var c__4609__auto___56970 = cljs.core.chunk_first(seq__56389_56969__$1);
var G__56972 = cljs.core.chunk_rest(seq__56389_56969__$1);
var G__56973 = c__4609__auto___56970;
var G__56974 = cljs.core.count(c__4609__auto___56970);
var G__56975 = (0);
seq__56389_56922 = G__56972;
chunk__56390_56923 = G__56973;
count__56391_56924 = G__56974;
i__56392_56925 = G__56975;
continue;
} else {
var child_struct_56977 = cljs.core.first(seq__56389_56969__$1);
var children_56981 = shadow.dom.dom_node(child_struct_56977);
if(cljs.core.seq_QMARK_(children_56981)){
var seq__56430_56983 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56981));
var chunk__56432_56984 = null;
var count__56433_56985 = (0);
var i__56434_56986 = (0);
while(true){
if((i__56434_56986 < count__56433_56985)){
var child_56988 = chunk__56432_56984.cljs$core$IIndexed$_nth$arity$2(null,i__56434_56986);
if(cljs.core.truth_(child_56988)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56988);


var G__56989 = seq__56430_56983;
var G__56990 = chunk__56432_56984;
var G__56991 = count__56433_56985;
var G__56992 = (i__56434_56986 + (1));
seq__56430_56983 = G__56989;
chunk__56432_56984 = G__56990;
count__56433_56985 = G__56991;
i__56434_56986 = G__56992;
continue;
} else {
var G__56993 = seq__56430_56983;
var G__56994 = chunk__56432_56984;
var G__56995 = count__56433_56985;
var G__56996 = (i__56434_56986 + (1));
seq__56430_56983 = G__56993;
chunk__56432_56984 = G__56994;
count__56433_56985 = G__56995;
i__56434_56986 = G__56996;
continue;
}
} else {
var temp__5735__auto___56997__$1 = cljs.core.seq(seq__56430_56983);
if(temp__5735__auto___56997__$1){
var seq__56430_56998__$1 = temp__5735__auto___56997__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56430_56998__$1)){
var c__4609__auto___56999 = cljs.core.chunk_first(seq__56430_56998__$1);
var G__57000 = cljs.core.chunk_rest(seq__56430_56998__$1);
var G__57001 = c__4609__auto___56999;
var G__57002 = cljs.core.count(c__4609__auto___56999);
var G__57003 = (0);
seq__56430_56983 = G__57000;
chunk__56432_56984 = G__57001;
count__56433_56985 = G__57002;
i__56434_56986 = G__57003;
continue;
} else {
var child_57005 = cljs.core.first(seq__56430_56998__$1);
if(cljs.core.truth_(child_57005)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_57005);


var G__57006 = cljs.core.next(seq__56430_56998__$1);
var G__57007 = null;
var G__57008 = (0);
var G__57009 = (0);
seq__56430_56983 = G__57006;
chunk__56432_56984 = G__57007;
count__56433_56985 = G__57008;
i__56434_56986 = G__57009;
continue;
} else {
var G__57011 = cljs.core.next(seq__56430_56998__$1);
var G__57012 = null;
var G__57013 = (0);
var G__57014 = (0);
seq__56430_56983 = G__57011;
chunk__56432_56984 = G__57012;
count__56433_56985 = G__57013;
i__56434_56986 = G__57014;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56981);
}


var G__57015 = cljs.core.next(seq__56389_56969__$1);
var G__57016 = null;
var G__57017 = (0);
var G__57018 = (0);
seq__56389_56922 = G__57015;
chunk__56390_56923 = G__57016;
count__56391_56924 = G__57017;
i__56392_56925 = G__57018;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__56436 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__56436);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__56438 = cljs.core.seq(node);
var chunk__56439 = null;
var count__56440 = (0);
var i__56441 = (0);
while(true){
if((i__56441 < count__56440)){
var n = chunk__56439.cljs$core$IIndexed$_nth$arity$2(null,i__56441);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__57026 = seq__56438;
var G__57027 = chunk__56439;
var G__57028 = count__56440;
var G__57029 = (i__56441 + (1));
seq__56438 = G__57026;
chunk__56439 = G__57027;
count__56440 = G__57028;
i__56441 = G__57029;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56438);
if(temp__5735__auto__){
var seq__56438__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56438__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56438__$1);
var G__57034 = cljs.core.chunk_rest(seq__56438__$1);
var G__57035 = c__4609__auto__;
var G__57036 = cljs.core.count(c__4609__auto__);
var G__57037 = (0);
seq__56438 = G__57034;
chunk__56439 = G__57035;
count__56440 = G__57036;
i__56441 = G__57037;
continue;
} else {
var n = cljs.core.first(seq__56438__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__57040 = cljs.core.next(seq__56438__$1);
var G__57041 = null;
var G__57042 = (0);
var G__57043 = (0);
seq__56438 = G__57040;
chunk__56439 = G__57041;
count__56440 = G__57042;
i__56441 = G__57043;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__56449 = shadow.dom.dom_node(new$);
var G__56450 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__56449,G__56450);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__56452 = arguments.length;
switch (G__56452) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__56458 = arguments.length;
switch (G__56458) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__56463 = arguments.length;
switch (G__56463) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57063 = arguments.length;
var i__4790__auto___57064 = (0);
while(true){
if((i__4790__auto___57064 < len__4789__auto___57063)){
args__4795__auto__.push((arguments[i__4790__auto___57064]));

var G__57065 = (i__4790__auto___57064 + (1));
i__4790__auto___57064 = G__57065;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__56476_57066 = cljs.core.seq(nodes);
var chunk__56477_57067 = null;
var count__56478_57068 = (0);
var i__56479_57069 = (0);
while(true){
if((i__56479_57069 < count__56478_57068)){
var node_57070 = chunk__56477_57067.cljs$core$IIndexed$_nth$arity$2(null,i__56479_57069);
fragment.appendChild(shadow.dom._to_dom(node_57070));


var G__57072 = seq__56476_57066;
var G__57073 = chunk__56477_57067;
var G__57074 = count__56478_57068;
var G__57075 = (i__56479_57069 + (1));
seq__56476_57066 = G__57072;
chunk__56477_57067 = G__57073;
count__56478_57068 = G__57074;
i__56479_57069 = G__57075;
continue;
} else {
var temp__5735__auto___57076 = cljs.core.seq(seq__56476_57066);
if(temp__5735__auto___57076){
var seq__56476_57077__$1 = temp__5735__auto___57076;
if(cljs.core.chunked_seq_QMARK_(seq__56476_57077__$1)){
var c__4609__auto___57078 = cljs.core.chunk_first(seq__56476_57077__$1);
var G__57079 = cljs.core.chunk_rest(seq__56476_57077__$1);
var G__57080 = c__4609__auto___57078;
var G__57081 = cljs.core.count(c__4609__auto___57078);
var G__57082 = (0);
seq__56476_57066 = G__57079;
chunk__56477_57067 = G__57080;
count__56478_57068 = G__57081;
i__56479_57069 = G__57082;
continue;
} else {
var node_57084 = cljs.core.first(seq__56476_57077__$1);
fragment.appendChild(shadow.dom._to_dom(node_57084));


var G__57085 = cljs.core.next(seq__56476_57077__$1);
var G__57086 = null;
var G__57087 = (0);
var G__57088 = (0);
seq__56476_57066 = G__57085;
chunk__56477_57067 = G__57086;
count__56478_57068 = G__57087;
i__56479_57069 = G__57088;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq56471){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56471));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__56487_57098 = cljs.core.seq(scripts);
var chunk__56488_57099 = null;
var count__56489_57100 = (0);
var i__56490_57101 = (0);
while(true){
if((i__56490_57101 < count__56489_57100)){
var vec__56500_57102 = chunk__56488_57099.cljs$core$IIndexed$_nth$arity$2(null,i__56490_57101);
var script_tag_57103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56500_57102,(0),null);
var script_body_57104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56500_57102,(1),null);
eval(script_body_57104);


var G__57106 = seq__56487_57098;
var G__57107 = chunk__56488_57099;
var G__57108 = count__56489_57100;
var G__57109 = (i__56490_57101 + (1));
seq__56487_57098 = G__57106;
chunk__56488_57099 = G__57107;
count__56489_57100 = G__57108;
i__56490_57101 = G__57109;
continue;
} else {
var temp__5735__auto___57111 = cljs.core.seq(seq__56487_57098);
if(temp__5735__auto___57111){
var seq__56487_57113__$1 = temp__5735__auto___57111;
if(cljs.core.chunked_seq_QMARK_(seq__56487_57113__$1)){
var c__4609__auto___57114 = cljs.core.chunk_first(seq__56487_57113__$1);
var G__57115 = cljs.core.chunk_rest(seq__56487_57113__$1);
var G__57116 = c__4609__auto___57114;
var G__57117 = cljs.core.count(c__4609__auto___57114);
var G__57118 = (0);
seq__56487_57098 = G__57115;
chunk__56488_57099 = G__57116;
count__56489_57100 = G__57117;
i__56490_57101 = G__57118;
continue;
} else {
var vec__56504_57119 = cljs.core.first(seq__56487_57113__$1);
var script_tag_57120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56504_57119,(0),null);
var script_body_57121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56504_57119,(1),null);
eval(script_body_57121);


var G__57125 = cljs.core.next(seq__56487_57113__$1);
var G__57126 = null;
var G__57127 = (0);
var G__57128 = (0);
seq__56487_57098 = G__57125;
chunk__56488_57099 = G__57126;
count__56489_57100 = G__57127;
i__56490_57101 = G__57128;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__56507){
var vec__56510 = p__56507;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56510,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56510,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__56517 = shadow.dom.dom_node(el);
var G__56518 = cls;
return goog.dom.getAncestorByClass(G__56517,G__56518);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__56523 = arguments.length;
switch (G__56523) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__56527 = shadow.dom.dom_node(el);
var G__56528 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__56527,G__56528);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__56529 = shadow.dom.dom_node(el);
var G__56530 = cljs.core.name(tag);
var G__56531 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__56529,G__56530,G__56531);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__56535 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__56535);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__56536 = shadow.dom.dom_node(dom);
var G__56537 = value;
return goog.dom.forms.setValue(G__56536,G__56537);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__56544 = cljs.core.seq(style_keys);
var chunk__56545 = null;
var count__56546 = (0);
var i__56547 = (0);
while(true){
if((i__56547 < count__56546)){
var it = chunk__56545.cljs$core$IIndexed$_nth$arity$2(null,i__56547);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__57144 = seq__56544;
var G__57145 = chunk__56545;
var G__57146 = count__56546;
var G__57147 = (i__56547 + (1));
seq__56544 = G__57144;
chunk__56545 = G__57145;
count__56546 = G__57146;
i__56547 = G__57147;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56544);
if(temp__5735__auto__){
var seq__56544__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56544__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56544__$1);
var G__57148 = cljs.core.chunk_rest(seq__56544__$1);
var G__57149 = c__4609__auto__;
var G__57150 = cljs.core.count(c__4609__auto__);
var G__57151 = (0);
seq__56544 = G__57148;
chunk__56545 = G__57149;
count__56546 = G__57150;
i__56547 = G__57151;
continue;
} else {
var it = cljs.core.first(seq__56544__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__57153 = cljs.core.next(seq__56544__$1);
var G__57154 = null;
var G__57155 = (0);
var G__57156 = (0);
seq__56544 = G__57153;
chunk__56545 = G__57154;
count__56546 = G__57155;
i__56547 = G__57156;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k56550,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__56554 = k56550;
var G__56554__$1 = (((G__56554 instanceof cljs.core.Keyword))?G__56554.fqn:null);
switch (G__56554__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56550,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__56555){
var vec__56556 = p__56555;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56556,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56556,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56549){
var self__ = this;
var G__56549__$1 = this;
return (new cljs.core.RecordIter((0),G__56549__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__56562 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__56562(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56551,other56552){
var self__ = this;
var this56551__$1 = this;
return (((!((other56552 == null)))) && ((this56551__$1.constructor === other56552.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56551__$1.x,other56552.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56551__$1.y,other56552.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56551__$1.__extmap,other56552.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__56549){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__56566 = cljs.core.keyword_identical_QMARK_;
var expr__56567 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__56569 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__56570 = expr__56567;
return (pred__56566.cljs$core$IFn$_invoke$arity$2 ? pred__56566.cljs$core$IFn$_invoke$arity$2(G__56569,G__56570) : pred__56566.call(null,G__56569,G__56570));
})())){
return (new shadow.dom.Coordinate(G__56549,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56571 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__56572 = expr__56567;
return (pred__56566.cljs$core$IFn$_invoke$arity$2 ? pred__56566.cljs$core$IFn$_invoke$arity$2(G__56571,G__56572) : pred__56566.call(null,G__56571,G__56572));
})())){
return (new shadow.dom.Coordinate(self__.x,G__56549,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__56549),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__56549){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__56549,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__56553){
var extmap__4478__auto__ = (function (){var G__56573 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56553,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__56553)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56573);
} else {
return G__56573;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__56553),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__56553),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__56574 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__56574);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__56575 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__56575);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__56576 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__56576);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k56578,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__56582 = k56578;
var G__56582__$1 = (((G__56582 instanceof cljs.core.Keyword))?G__56582.fqn:null);
switch (G__56582__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56578,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__56585){
var vec__56586 = p__56585;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56586,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56586,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56577){
var self__ = this;
var G__56577__$1 = this;
return (new cljs.core.RecordIter((0),G__56577__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__56597 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__56597(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56579,other56580){
var self__ = this;
var this56579__$1 = this;
return (((!((other56580 == null)))) && ((this56579__$1.constructor === other56580.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56579__$1.w,other56580.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56579__$1.h,other56580.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56579__$1.__extmap,other56580.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__56577){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__56601 = cljs.core.keyword_identical_QMARK_;
var expr__56602 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__56605 = new cljs.core.Keyword(null,"w","w",354169001);
var G__56606 = expr__56602;
return (pred__56601.cljs$core$IFn$_invoke$arity$2 ? pred__56601.cljs$core$IFn$_invoke$arity$2(G__56605,G__56606) : pred__56601.call(null,G__56605,G__56606));
})())){
return (new shadow.dom.Size(G__56577,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56607 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__56608 = expr__56602;
return (pred__56601.cljs$core$IFn$_invoke$arity$2 ? pred__56601.cljs$core$IFn$_invoke$arity$2(G__56607,G__56608) : pred__56601.call(null,G__56607,G__56608));
})())){
return (new shadow.dom.Size(self__.w,G__56577,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__56577),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__56577){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__56577,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__56581){
var extmap__4478__auto__ = (function (){var G__56615 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56581,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__56581)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56615);
} else {
return G__56615;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__56581),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__56581),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__56619 = shadow.dom.dom_node(el);
return goog.style.getSize(G__56619);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__57221 = (i + (1));
var G__57222 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__57221;
ret = G__57222;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56639){
var vec__56641 = p__56639;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56641,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56641,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__56648 = arguments.length;
switch (G__56648) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__56654_57224 = new_node;
var G__56655_57225 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__56654_57224,G__56655_57225);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__56658_57226 = new_node;
var G__56659_57227 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__56658_57226,G__56659_57227);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__57229 = ps;
var G__57230 = (i + (1));
el__$1 = G__57229;
i = G__57230;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__56660 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__56660);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__56662 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__56662);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__56663 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__56663);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__56664 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56664,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56664,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56664,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__56668_57232 = cljs.core.seq(props);
var chunk__56669_57233 = null;
var count__56670_57234 = (0);
var i__56671_57235 = (0);
while(true){
if((i__56671_57235 < count__56670_57234)){
var vec__56678_57236 = chunk__56669_57233.cljs$core$IIndexed$_nth$arity$2(null,i__56671_57235);
var k_57237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56678_57236,(0),null);
var v_57238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56678_57236,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_57237);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_57237),v_57238);


var G__57239 = seq__56668_57232;
var G__57240 = chunk__56669_57233;
var G__57241 = count__56670_57234;
var G__57242 = (i__56671_57235 + (1));
seq__56668_57232 = G__57239;
chunk__56669_57233 = G__57240;
count__56670_57234 = G__57241;
i__56671_57235 = G__57242;
continue;
} else {
var temp__5735__auto___57243 = cljs.core.seq(seq__56668_57232);
if(temp__5735__auto___57243){
var seq__56668_57244__$1 = temp__5735__auto___57243;
if(cljs.core.chunked_seq_QMARK_(seq__56668_57244__$1)){
var c__4609__auto___57245 = cljs.core.chunk_first(seq__56668_57244__$1);
var G__57246 = cljs.core.chunk_rest(seq__56668_57244__$1);
var G__57247 = c__4609__auto___57245;
var G__57248 = cljs.core.count(c__4609__auto___57245);
var G__57249 = (0);
seq__56668_57232 = G__57246;
chunk__56669_57233 = G__57247;
count__56670_57234 = G__57248;
i__56671_57235 = G__57249;
continue;
} else {
var vec__56681_57250 = cljs.core.first(seq__56668_57244__$1);
var k_57251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56681_57250,(0),null);
var v_57252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56681_57250,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_57251);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_57251),v_57252);


var G__57253 = cljs.core.next(seq__56668_57244__$1);
var G__57254 = null;
var G__57255 = (0);
var G__57256 = (0);
seq__56668_57232 = G__57253;
chunk__56669_57233 = G__57254;
count__56670_57234 = G__57255;
i__56671_57235 = G__57256;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__56690 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56690,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56690,(1),null);
var seq__56693_57257 = cljs.core.seq(node_children);
var chunk__56695_57258 = null;
var count__56696_57259 = (0);
var i__56697_57260 = (0);
while(true){
if((i__56697_57260 < count__56696_57259)){
var child_struct_57261 = chunk__56695_57258.cljs$core$IIndexed$_nth$arity$2(null,i__56697_57260);
if((!((child_struct_57261 == null)))){
if(typeof child_struct_57261 === 'string'){
var text_57262 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_57262),child_struct_57261].join(''));
} else {
var children_57263 = shadow.dom.svg_node(child_struct_57261);
if(cljs.core.seq_QMARK_(children_57263)){
var seq__56728_57268 = cljs.core.seq(children_57263);
var chunk__56730_57269 = null;
var count__56731_57270 = (0);
var i__56732_57271 = (0);
while(true){
if((i__56732_57271 < count__56731_57270)){
var child_57273 = chunk__56730_57269.cljs$core$IIndexed$_nth$arity$2(null,i__56732_57271);
if(cljs.core.truth_(child_57273)){
node.appendChild(child_57273);


var G__57275 = seq__56728_57268;
var G__57276 = chunk__56730_57269;
var G__57277 = count__56731_57270;
var G__57278 = (i__56732_57271 + (1));
seq__56728_57268 = G__57275;
chunk__56730_57269 = G__57276;
count__56731_57270 = G__57277;
i__56732_57271 = G__57278;
continue;
} else {
var G__57279 = seq__56728_57268;
var G__57280 = chunk__56730_57269;
var G__57281 = count__56731_57270;
var G__57282 = (i__56732_57271 + (1));
seq__56728_57268 = G__57279;
chunk__56730_57269 = G__57280;
count__56731_57270 = G__57281;
i__56732_57271 = G__57282;
continue;
}
} else {
var temp__5735__auto___57283 = cljs.core.seq(seq__56728_57268);
if(temp__5735__auto___57283){
var seq__56728_57284__$1 = temp__5735__auto___57283;
if(cljs.core.chunked_seq_QMARK_(seq__56728_57284__$1)){
var c__4609__auto___57285 = cljs.core.chunk_first(seq__56728_57284__$1);
var G__57286 = cljs.core.chunk_rest(seq__56728_57284__$1);
var G__57287 = c__4609__auto___57285;
var G__57288 = cljs.core.count(c__4609__auto___57285);
var G__57289 = (0);
seq__56728_57268 = G__57286;
chunk__56730_57269 = G__57287;
count__56731_57270 = G__57288;
i__56732_57271 = G__57289;
continue;
} else {
var child_57291 = cljs.core.first(seq__56728_57284__$1);
if(cljs.core.truth_(child_57291)){
node.appendChild(child_57291);


var G__57293 = cljs.core.next(seq__56728_57284__$1);
var G__57294 = null;
var G__57295 = (0);
var G__57296 = (0);
seq__56728_57268 = G__57293;
chunk__56730_57269 = G__57294;
count__56731_57270 = G__57295;
i__56732_57271 = G__57296;
continue;
} else {
var G__57297 = cljs.core.next(seq__56728_57284__$1);
var G__57298 = null;
var G__57299 = (0);
var G__57300 = (0);
seq__56728_57268 = G__57297;
chunk__56730_57269 = G__57298;
count__56731_57270 = G__57299;
i__56732_57271 = G__57300;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_57263);
}
}


var G__57301 = seq__56693_57257;
var G__57302 = chunk__56695_57258;
var G__57303 = count__56696_57259;
var G__57304 = (i__56697_57260 + (1));
seq__56693_57257 = G__57301;
chunk__56695_57258 = G__57302;
count__56696_57259 = G__57303;
i__56697_57260 = G__57304;
continue;
} else {
var G__57305 = seq__56693_57257;
var G__57306 = chunk__56695_57258;
var G__57307 = count__56696_57259;
var G__57308 = (i__56697_57260 + (1));
seq__56693_57257 = G__57305;
chunk__56695_57258 = G__57306;
count__56696_57259 = G__57307;
i__56697_57260 = G__57308;
continue;
}
} else {
var temp__5735__auto___57311 = cljs.core.seq(seq__56693_57257);
if(temp__5735__auto___57311){
var seq__56693_57312__$1 = temp__5735__auto___57311;
if(cljs.core.chunked_seq_QMARK_(seq__56693_57312__$1)){
var c__4609__auto___57313 = cljs.core.chunk_first(seq__56693_57312__$1);
var G__57314 = cljs.core.chunk_rest(seq__56693_57312__$1);
var G__57315 = c__4609__auto___57313;
var G__57316 = cljs.core.count(c__4609__auto___57313);
var G__57317 = (0);
seq__56693_57257 = G__57314;
chunk__56695_57258 = G__57315;
count__56696_57259 = G__57316;
i__56697_57260 = G__57317;
continue;
} else {
var child_struct_57318 = cljs.core.first(seq__56693_57312__$1);
if((!((child_struct_57318 == null)))){
if(typeof child_struct_57318 === 'string'){
var text_57319 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_57319),child_struct_57318].join(''));
} else {
var children_57320 = shadow.dom.svg_node(child_struct_57318);
if(cljs.core.seq_QMARK_(children_57320)){
var seq__56739_57321 = cljs.core.seq(children_57320);
var chunk__56741_57322 = null;
var count__56742_57323 = (0);
var i__56743_57324 = (0);
while(true){
if((i__56743_57324 < count__56742_57323)){
var child_57327 = chunk__56741_57322.cljs$core$IIndexed$_nth$arity$2(null,i__56743_57324);
if(cljs.core.truth_(child_57327)){
node.appendChild(child_57327);


var G__57328 = seq__56739_57321;
var G__57329 = chunk__56741_57322;
var G__57330 = count__56742_57323;
var G__57331 = (i__56743_57324 + (1));
seq__56739_57321 = G__57328;
chunk__56741_57322 = G__57329;
count__56742_57323 = G__57330;
i__56743_57324 = G__57331;
continue;
} else {
var G__57332 = seq__56739_57321;
var G__57333 = chunk__56741_57322;
var G__57334 = count__56742_57323;
var G__57335 = (i__56743_57324 + (1));
seq__56739_57321 = G__57332;
chunk__56741_57322 = G__57333;
count__56742_57323 = G__57334;
i__56743_57324 = G__57335;
continue;
}
} else {
var temp__5735__auto___57336__$1 = cljs.core.seq(seq__56739_57321);
if(temp__5735__auto___57336__$1){
var seq__56739_57337__$1 = temp__5735__auto___57336__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56739_57337__$1)){
var c__4609__auto___57338 = cljs.core.chunk_first(seq__56739_57337__$1);
var G__57339 = cljs.core.chunk_rest(seq__56739_57337__$1);
var G__57340 = c__4609__auto___57338;
var G__57341 = cljs.core.count(c__4609__auto___57338);
var G__57342 = (0);
seq__56739_57321 = G__57339;
chunk__56741_57322 = G__57340;
count__56742_57323 = G__57341;
i__56743_57324 = G__57342;
continue;
} else {
var child_57347 = cljs.core.first(seq__56739_57337__$1);
if(cljs.core.truth_(child_57347)){
node.appendChild(child_57347);


var G__57348 = cljs.core.next(seq__56739_57337__$1);
var G__57349 = null;
var G__57350 = (0);
var G__57351 = (0);
seq__56739_57321 = G__57348;
chunk__56741_57322 = G__57349;
count__56742_57323 = G__57350;
i__56743_57324 = G__57351;
continue;
} else {
var G__57352 = cljs.core.next(seq__56739_57337__$1);
var G__57353 = null;
var G__57354 = (0);
var G__57355 = (0);
seq__56739_57321 = G__57352;
chunk__56741_57322 = G__57353;
count__56742_57323 = G__57354;
i__56743_57324 = G__57355;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_57320);
}
}


var G__57356 = cljs.core.next(seq__56693_57312__$1);
var G__57357 = null;
var G__57358 = (0);
var G__57359 = (0);
seq__56693_57257 = G__57356;
chunk__56695_57258 = G__57357;
count__56696_57259 = G__57358;
i__56697_57260 = G__57359;
continue;
} else {
var G__57360 = cljs.core.next(seq__56693_57312__$1);
var G__57361 = null;
var G__57362 = (0);
var G__57363 = (0);
seq__56693_57257 = G__57360;
chunk__56695_57258 = G__57361;
count__56696_57259 = G__57362;
i__56697_57260 = G__57363;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__56750_57364 = shadow.dom._to_svg;
var G__56751_57365 = "string";
var G__56752_57366 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__56750_57364,G__56751_57365,G__56752_57366);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__56754_57367 = shadow.dom._to_svg;
var G__56755_57368 = "null";
var G__56756_57369 = (function (_){
return null;
});
goog.object.set(G__56754_57367,G__56755_57368,G__56756_57369);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57370 = arguments.length;
var i__4790__auto___57371 = (0);
while(true){
if((i__4790__auto___57371 < len__4789__auto___57370)){
args__4795__auto__.push((arguments[i__4790__auto___57371]));

var G__57372 = (i__4790__auto___57371 + (1));
i__4790__auto___57371 = G__57372;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq56758){
var G__56759 = cljs.core.first(seq56758);
var seq56758__$1 = cljs.core.next(seq56758);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56759,seq56758__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__56769 = arguments.length;
switch (G__56769) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__56775_57376 = shadow.dom.dom_node(el);
var G__56776_57377 = cljs.core.name(event);
var G__56777_57378 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__56775_57376,G__56776_57377,G__56777_57378) : shadow.dom.dom_listen.call(null,G__56775_57376,G__56776_57377,G__56777_57378));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__54553__auto___57379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_56782){
var state_val_56783 = (state_56782[(1)]);
if((state_val_56783 === (1))){
var state_56782__$1 = state_56782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56782__$1,(2),once_or_cleanup);
} else {
if((state_val_56783 === (2))){
var inst_56779 = (state_56782[(2)]);
var inst_56780 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_56782__$1 = (function (){var statearr_56786 = state_56782;
(statearr_56786[(7)] = inst_56779);

return statearr_56786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56782__$1,inst_56780);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__54456__auto__ = null;
var shadow$dom$state_machine__54456__auto____0 = (function (){
var statearr_56788 = [null,null,null,null,null,null,null,null];
(statearr_56788[(0)] = shadow$dom$state_machine__54456__auto__);

(statearr_56788[(1)] = (1));

return statearr_56788;
});
var shadow$dom$state_machine__54456__auto____1 = (function (state_56782){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_56782);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e56789){if((e56789 instanceof Object)){
var ex__54459__auto__ = e56789;
var statearr_56790_57383 = state_56782;
(statearr_56790_57383[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56789;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57384 = state_56782;
state_56782 = G__57384;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
shadow$dom$state_machine__54456__auto__ = function(state_56782){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__54456__auto____0.call(this);
case 1:
return shadow$dom$state_machine__54456__auto____1.call(this,state_56782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__54456__auto____0;
shadow$dom$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__54456__auto____1;
return shadow$dom$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_56792 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_56792[(6)] = c__54553__auto___57379);

return statearr_56792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
