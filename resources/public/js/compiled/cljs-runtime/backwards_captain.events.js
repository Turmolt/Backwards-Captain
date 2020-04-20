goog.provide('backwards_captain.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('backwards_captain.db');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("backwards-captain.events","initialize-db","backwards-captain.events/initialize-db",-1764305152),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__49348__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__49349__auto__ = backwards_captain.db.default_db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49349__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__49349__auto__;
}catch (e49427){var e = e49427;
throw e;
}}):(function (_,___$1){
return backwards_captain.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("backwards-captain.events","set-active-panel","backwards-captain.events/set-active-panel",-514063540),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__49428){
var vec__49429 = p__49428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49429,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49429,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)));

var opts__49348__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__49349__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__49348__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49349__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49349__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49349__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var opts__49348__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49349__auto__ = active_panel;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49349__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49349__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49349__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__49349__auto__;
}catch (e49432){var e = e49432;
throw e;
}}):(function (db,p__49433){
var vec__49434 = p__49433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49434,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49434,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("backwards-captain.events","set-post","backwards-captain.events/set-post",-1752195835),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__49437){
var vec__49438 = p__49437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49438,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49438,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Symbol(null,"post","post",1910229214,null)));

var opts__49348__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__49349__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__49348__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49349__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49349__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49349__auto__;
})(),new cljs.core.Keyword(null,"post","post",269697687),(function (){var opts__49348__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49349__auto__ = post;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49349__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"post","post",1910229214,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49349__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49349__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Symbol(null,"post","post",1910229214,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__49349__auto__;
}catch (e49441){var e = e49441;
throw e;
}}):(function (db,p__49442){
var vec__49443 = p__49442;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49443,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49443,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"post","post",269697687),post);
})));

//# sourceMappingURL=backwards_captain.events.js.map
