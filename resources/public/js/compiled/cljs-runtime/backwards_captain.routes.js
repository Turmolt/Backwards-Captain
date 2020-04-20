goog.provide('backwards_captain.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('re_frame.core');
goog.require('backwards_captain.events');
goog.require('backwards_captain.blog');
backwards_captain.routes.hook_browser_navigation_BANG_ = (function backwards_captain$routes$hook_browser_navigation_BANG_(){
var G__49548 = (new goog.History());
var G__49549_49572 = G__49548;
var G__49550_49573 = goog.history.EventType.NAVIGATE;
var G__49551_49574 = (function (event){
return secretary.core.dispatch_BANG_(event.token);
});
goog.events.listen(G__49549_49572,G__49550_49573,G__49551_49574);

G__49548.setEnabled(true);

return G__49548;
});
backwards_captain.routes.app_routes = (function backwards_captain$routes$app_routes(){
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__49016__auto___49575 = (function (params__49017__auto__){
if(cljs.core.map_QMARK_(params__49017__auto__)){
var map__49553 = params__49017__auto__;
var map__49553__$1 = (((((!((map__49553 == null))))?(((((map__49553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49553):map__49553);
var G__49557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-active-panel","backwards-captain.events/set-active-panel",-514063540),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49557) : re_frame.core.dispatch.call(null,G__49557));
} else {
if(cljs.core.vector_QMARK_(params__49017__auto__)){
var vec__49558 = params__49017__auto__;
var G__49561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-active-panel","backwards-captain.events/set-active-panel",-514063540),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49561) : re_frame.core.dispatch.call(null,G__49561));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__49016__auto___49575);


var action__49016__auto___49579 = (function (params__49017__auto__){
if(cljs.core.map_QMARK_(params__49017__auto__)){
var map__49562 = params__49017__auto__;
var map__49562__$1 = (((((!((map__49562 == null))))?(((((map__49562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49562):map__49562);
var G__49564_49580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-active-panel","backwards-captain.events/set-active-panel",-514063540),new cljs.core.Keyword(null,"blog-panel","blog-panel",-1543263650)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49564_49580) : re_frame.core.dispatch.call(null,G__49564_49580));

var G__49565 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-post","backwards-captain.events/set-post",-1752195835),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49565) : re_frame.core.dispatch.call(null,G__49565));
} else {
if(cljs.core.vector_QMARK_(params__49017__auto__)){
var vec__49566 = params__49017__auto__;
var G__49569_49581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-active-panel","backwards-captain.events/set-active-panel",-514063540),new cljs.core.Keyword(null,"blog-panel","blog-panel",-1543263650)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49569_49581) : re_frame.core.dispatch.call(null,G__49569_49581));

var G__49570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-post","backwards-captain.events/set-post",-1752195835),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49570) : re_frame.core.dispatch.call(null,G__49570));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/blog",action__49016__auto___49579);


return backwards_captain.routes.hook_browser_navigation_BANG_();
});

//# sourceMappingURL=backwards_captain.routes.js.map
