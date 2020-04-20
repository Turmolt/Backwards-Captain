goog.provide('backwards_captain.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('backwards_captain.events');
goog.require('backwards_captain.routes');
goog.require('backwards_captain.views');
goog.require('backwards_captain.config');
backwards_captain.core.dev_setup = (function backwards_captain$core$dev_setup(){
if(backwards_captain.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
backwards_captain.core.mount_root = (function backwards_captain$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [backwards_captain.views.main_panel], null),document.getElementById("app"));
});
backwards_captain.core.init = (function backwards_captain$core$init(){
backwards_captain.routes.app_routes();

var G__49576_49577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","initialize-db","backwards-captain.events/initialize-db",-1764305152)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__49576_49577) : re_frame.core.dispatch_sync.call(null,G__49576_49577));

backwards_captain.core.dev_setup();

return backwards_captain.core.mount_root();
});

//# sourceMappingURL=backwards_captain.core.js.map
