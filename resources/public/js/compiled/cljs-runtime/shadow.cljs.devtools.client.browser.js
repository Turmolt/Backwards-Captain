goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58490 = arguments.length;
var i__4790__auto___58491 = (0);
while(true){
if((i__4790__auto___58491 < len__4789__auto___58490)){
args__4795__auto__.push((arguments[i__4790__auto___58491]));

var G__58492 = (i__4790__auto___58491 + (1));
i__4790__auto___58491 = G__58492;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq58155){
var G__58156 = cljs.core.first(seq58155);
var seq58155__$1 = cljs.core.next(seq58155);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58156,seq58155__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__58191){
var map__58193 = p__58191;
var map__58193__$1 = (((((!((map__58193 == null))))?(((((map__58193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58193):map__58193);
var src = map__58193__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__58201 = cljs.core.seq(sources);
var chunk__58202 = null;
var count__58203 = (0);
var i__58204 = (0);
while(true){
if((i__58204 < count__58203)){
var map__58235 = chunk__58202.cljs$core$IIndexed$_nth$arity$2(null,i__58204);
var map__58235__$1 = (((((!((map__58235 == null))))?(((((map__58235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58235):map__58235);
var src = map__58235__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e58252){var e_58504 = e58252;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58504);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58504.message)].join('')));
}

var G__58505 = seq__58201;
var G__58506 = chunk__58202;
var G__58507 = count__58203;
var G__58508 = (i__58204 + (1));
seq__58201 = G__58505;
chunk__58202 = G__58506;
count__58203 = G__58507;
i__58204 = G__58508;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58201);
if(temp__5735__auto__){
var seq__58201__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58201__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58201__$1);
var G__58509 = cljs.core.chunk_rest(seq__58201__$1);
var G__58510 = c__4609__auto__;
var G__58511 = cljs.core.count(c__4609__auto__);
var G__58512 = (0);
seq__58201 = G__58509;
chunk__58202 = G__58510;
count__58203 = G__58511;
i__58204 = G__58512;
continue;
} else {
var map__58261 = cljs.core.first(seq__58201__$1);
var map__58261__$1 = (((((!((map__58261 == null))))?(((((map__58261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58261):map__58261);
var src = map__58261__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e58268){var e_58514 = e58268;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58514);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58514.message)].join('')));
}

var G__58515 = cljs.core.next(seq__58201__$1);
var G__58516 = null;
var G__58517 = (0);
var G__58518 = (0);
seq__58201 = G__58515;
chunk__58202 = G__58516;
count__58203 = G__58517;
i__58204 = G__58518;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__58273 = cljs.core.seq(js_requires);
var chunk__58274 = null;
var count__58275 = (0);
var i__58276 = (0);
while(true){
if((i__58276 < count__58275)){
var js_ns = chunk__58274.cljs$core$IIndexed$_nth$arity$2(null,i__58276);
var require_str_58524 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58524);


var G__58525 = seq__58273;
var G__58526 = chunk__58274;
var G__58527 = count__58275;
var G__58528 = (i__58276 + (1));
seq__58273 = G__58525;
chunk__58274 = G__58526;
count__58275 = G__58527;
i__58276 = G__58528;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58273);
if(temp__5735__auto__){
var seq__58273__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58273__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58273__$1);
var G__58530 = cljs.core.chunk_rest(seq__58273__$1);
var G__58531 = c__4609__auto__;
var G__58532 = cljs.core.count(c__4609__auto__);
var G__58533 = (0);
seq__58273 = G__58530;
chunk__58274 = G__58531;
count__58275 = G__58532;
i__58276 = G__58533;
continue;
} else {
var js_ns = cljs.core.first(seq__58273__$1);
var require_str_58536 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58536);


var G__58538 = cljs.core.next(seq__58273__$1);
var G__58539 = null;
var G__58540 = (0);
var G__58541 = (0);
seq__58273 = G__58538;
chunk__58274 = G__58539;
count__58275 = G__58540;
i__58276 = G__58541;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__58295 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__58295) : callback.call(null,G__58295));
} else {
var G__58296 = shadow.cljs.devtools.client.env.files_url();
var G__58297 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__58298 = "POST";
var G__58299 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__58300 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__58296,G__58297,G__58298,G__58299,G__58300);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__58303){
var map__58304 = p__58303;
var map__58304__$1 = (((((!((map__58304 == null))))?(((((map__58304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58304):map__58304);
var msg = map__58304__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__58307 = info;
var map__58307__$1 = (((((!((map__58307 == null))))?(((((map__58307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58307):map__58307);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58309(s__58310){
return (new cljs.core.LazySeq(null,(function (){
var s__58310__$1 = s__58310;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58310__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__58315 = cljs.core.first(xs__6292__auto__);
var map__58315__$1 = (((((!((map__58315 == null))))?(((((map__58315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58315):map__58315);
var src = map__58315__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__58310__$1,map__58315,map__58315__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58307,map__58307__$1,sources,compiled,map__58304,map__58304__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58309_$_iter__58311(s__58312){
return (new cljs.core.LazySeq(null,((function (s__58310__$1,map__58315,map__58315__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58307,map__58307__$1,sources,compiled,map__58304,map__58304__$1,msg,info,reload_info){
return (function (){
var s__58312__$1 = s__58312;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58312__$1);
if(temp__5735__auto____$1){
var s__58312__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58312__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58312__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58314 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58313 = (0);
while(true){
if((i__58313 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58313);
cljs.core.chunk_append(b__58314,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58553 = (i__58313 + (1));
i__58313 = G__58553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58314),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58309_$_iter__58311(cljs.core.chunk_rest(s__58312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58314),null);
}
} else {
var warning = cljs.core.first(s__58312__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58309_$_iter__58311(cljs.core.rest(s__58312__$2)));
}
} else {
return null;
}
break;
}
});})(s__58310__$1,map__58315,map__58315__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58307,map__58307__$1,sources,compiled,map__58304,map__58304__$1,msg,info,reload_info))
,null,null));
});})(s__58310__$1,map__58315,map__58315__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58307,map__58307__$1,sources,compiled,map__58304,map__58304__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58309(cljs.core.rest(s__58310__$1)));
} else {
var G__58559 = cljs.core.rest(s__58310__$1);
s__58310__$1 = G__58559;
continue;
}
} else {
var G__58560 = cljs.core.rest(s__58310__$1);
s__58310__$1 = G__58560;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__58317_58561 = cljs.core.seq(warnings);
var chunk__58318_58562 = null;
var count__58319_58563 = (0);
var i__58320_58564 = (0);
while(true){
if((i__58320_58564 < count__58319_58563)){
var map__58356_58565 = chunk__58318_58562.cljs$core$IIndexed$_nth$arity$2(null,i__58320_58564);
var map__58356_58566__$1 = (((((!((map__58356_58565 == null))))?(((((map__58356_58565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58356_58565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58356_58565):map__58356_58565);
var w_58567 = map__58356_58566__$1;
var msg_58568__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58356_58566__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58356_58566__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58356_58566__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58356_58566__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58571)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58569),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58570),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58568__$1)].join(''));


var G__58575 = seq__58317_58561;
var G__58576 = chunk__58318_58562;
var G__58577 = count__58319_58563;
var G__58578 = (i__58320_58564 + (1));
seq__58317_58561 = G__58575;
chunk__58318_58562 = G__58576;
count__58319_58563 = G__58577;
i__58320_58564 = G__58578;
continue;
} else {
var temp__5735__auto___58581 = cljs.core.seq(seq__58317_58561);
if(temp__5735__auto___58581){
var seq__58317_58582__$1 = temp__5735__auto___58581;
if(cljs.core.chunked_seq_QMARK_(seq__58317_58582__$1)){
var c__4609__auto___58583 = cljs.core.chunk_first(seq__58317_58582__$1);
var G__58584 = cljs.core.chunk_rest(seq__58317_58582__$1);
var G__58585 = c__4609__auto___58583;
var G__58586 = cljs.core.count(c__4609__auto___58583);
var G__58587 = (0);
seq__58317_58561 = G__58584;
chunk__58318_58562 = G__58585;
count__58319_58563 = G__58586;
i__58320_58564 = G__58587;
continue;
} else {
var map__58370_58588 = cljs.core.first(seq__58317_58582__$1);
var map__58370_58589__$1 = (((((!((map__58370_58588 == null))))?(((((map__58370_58588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58370_58588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58370_58588):map__58370_58588);
var w_58590 = map__58370_58589__$1;
var msg_58591__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370_58589__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370_58589__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370_58589__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370_58589__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58594)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58592),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58593),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58591__$1)].join(''));


var G__58596 = cljs.core.next(seq__58317_58582__$1);
var G__58597 = null;
var G__58598 = (0);
var G__58599 = (0);
seq__58317_58561 = G__58596;
chunk__58318_58562 = G__58597;
count__58319_58563 = G__58598;
i__58320_58564 = G__58599;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58378){
var map__58379 = p__58378;
var map__58379__$1 = (((((!((map__58379 == null))))?(((((map__58379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58379):map__58379);
var src = map__58379__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58381){
var map__58382 = p__58381;
var map__58382__$1 = (((((!((map__58382 == null))))?(((((map__58382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58382):map__58382);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58384){
var map__58385 = p__58384;
var map__58385__$1 = (((((!((map__58385 == null))))?(((((map__58385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58385):map__58385);
var rc = map__58385__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__58302_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__58302_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__58388){
var map__58389 = p__58388;
var map__58389__$1 = (((((!((map__58389 == null))))?(((((map__58389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58389):map__58389);
var msg = map__58389__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58389__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__58391 = cljs.core.seq(updates);
var chunk__58393 = null;
var count__58394 = (0);
var i__58395 = (0);
while(true){
if((i__58395 < count__58394)){
var path = chunk__58393.cljs$core$IIndexed$_nth$arity$2(null,i__58395);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58426_58621 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58429_58622 = null;
var count__58430_58623 = (0);
var i__58431_58624 = (0);
while(true){
if((i__58431_58624 < count__58430_58623)){
var node_58629 = chunk__58429_58622.cljs$core$IIndexed$_nth$arity$2(null,i__58431_58624);
var path_match_58630 = shadow.cljs.devtools.client.browser.match_paths(node_58629.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58630)){
var new_link_58632 = (function (){var G__58440 = node_58629.cloneNode(true);
G__58440.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58630),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58440;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58630], 0));

goog.dom.insertSiblingAfter(new_link_58632,node_58629);

goog.dom.removeNode(node_58629);


var G__58637 = seq__58426_58621;
var G__58638 = chunk__58429_58622;
var G__58639 = count__58430_58623;
var G__58640 = (i__58431_58624 + (1));
seq__58426_58621 = G__58637;
chunk__58429_58622 = G__58638;
count__58430_58623 = G__58639;
i__58431_58624 = G__58640;
continue;
} else {
var G__58641 = seq__58426_58621;
var G__58642 = chunk__58429_58622;
var G__58643 = count__58430_58623;
var G__58644 = (i__58431_58624 + (1));
seq__58426_58621 = G__58641;
chunk__58429_58622 = G__58642;
count__58430_58623 = G__58643;
i__58431_58624 = G__58644;
continue;
}
} else {
var temp__5735__auto___58645 = cljs.core.seq(seq__58426_58621);
if(temp__5735__auto___58645){
var seq__58426_58646__$1 = temp__5735__auto___58645;
if(cljs.core.chunked_seq_QMARK_(seq__58426_58646__$1)){
var c__4609__auto___58647 = cljs.core.chunk_first(seq__58426_58646__$1);
var G__58648 = cljs.core.chunk_rest(seq__58426_58646__$1);
var G__58649 = c__4609__auto___58647;
var G__58650 = cljs.core.count(c__4609__auto___58647);
var G__58651 = (0);
seq__58426_58621 = G__58648;
chunk__58429_58622 = G__58649;
count__58430_58623 = G__58650;
i__58431_58624 = G__58651;
continue;
} else {
var node_58652 = cljs.core.first(seq__58426_58646__$1);
var path_match_58653 = shadow.cljs.devtools.client.browser.match_paths(node_58652.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58653)){
var new_link_58654 = (function (){var G__58441 = node_58652.cloneNode(true);
G__58441.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58653),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58441;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58653], 0));

goog.dom.insertSiblingAfter(new_link_58654,node_58652);

goog.dom.removeNode(node_58652);


var G__58655 = cljs.core.next(seq__58426_58646__$1);
var G__58656 = null;
var G__58657 = (0);
var G__58658 = (0);
seq__58426_58621 = G__58655;
chunk__58429_58622 = G__58656;
count__58430_58623 = G__58657;
i__58431_58624 = G__58658;
continue;
} else {
var G__58659 = cljs.core.next(seq__58426_58646__$1);
var G__58660 = null;
var G__58661 = (0);
var G__58662 = (0);
seq__58426_58621 = G__58659;
chunk__58429_58622 = G__58660;
count__58430_58623 = G__58661;
i__58431_58624 = G__58662;
continue;
}
}
} else {
}
}
break;
}


var G__58663 = seq__58391;
var G__58664 = chunk__58393;
var G__58665 = count__58394;
var G__58666 = (i__58395 + (1));
seq__58391 = G__58663;
chunk__58393 = G__58664;
count__58394 = G__58665;
i__58395 = G__58666;
continue;
} else {
var G__58667 = seq__58391;
var G__58668 = chunk__58393;
var G__58669 = count__58394;
var G__58670 = (i__58395 + (1));
seq__58391 = G__58667;
chunk__58393 = G__58668;
count__58394 = G__58669;
i__58395 = G__58670;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58391);
if(temp__5735__auto__){
var seq__58391__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58391__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58391__$1);
var G__58671 = cljs.core.chunk_rest(seq__58391__$1);
var G__58672 = c__4609__auto__;
var G__58673 = cljs.core.count(c__4609__auto__);
var G__58674 = (0);
seq__58391 = G__58671;
chunk__58393 = G__58672;
count__58394 = G__58673;
i__58395 = G__58674;
continue;
} else {
var path = cljs.core.first(seq__58391__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58442_58675 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58445_58676 = null;
var count__58446_58677 = (0);
var i__58447_58678 = (0);
while(true){
if((i__58447_58678 < count__58446_58677)){
var node_58679 = chunk__58445_58676.cljs$core$IIndexed$_nth$arity$2(null,i__58447_58678);
var path_match_58680 = shadow.cljs.devtools.client.browser.match_paths(node_58679.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58680)){
var new_link_58681 = (function (){var G__58452 = node_58679.cloneNode(true);
G__58452.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58680),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58452;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58680], 0));

goog.dom.insertSiblingAfter(new_link_58681,node_58679);

goog.dom.removeNode(node_58679);


var G__58682 = seq__58442_58675;
var G__58683 = chunk__58445_58676;
var G__58684 = count__58446_58677;
var G__58685 = (i__58447_58678 + (1));
seq__58442_58675 = G__58682;
chunk__58445_58676 = G__58683;
count__58446_58677 = G__58684;
i__58447_58678 = G__58685;
continue;
} else {
var G__58688 = seq__58442_58675;
var G__58689 = chunk__58445_58676;
var G__58690 = count__58446_58677;
var G__58691 = (i__58447_58678 + (1));
seq__58442_58675 = G__58688;
chunk__58445_58676 = G__58689;
count__58446_58677 = G__58690;
i__58447_58678 = G__58691;
continue;
}
} else {
var temp__5735__auto___58692__$1 = cljs.core.seq(seq__58442_58675);
if(temp__5735__auto___58692__$1){
var seq__58442_58693__$1 = temp__5735__auto___58692__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58442_58693__$1)){
var c__4609__auto___58694 = cljs.core.chunk_first(seq__58442_58693__$1);
var G__58695 = cljs.core.chunk_rest(seq__58442_58693__$1);
var G__58696 = c__4609__auto___58694;
var G__58697 = cljs.core.count(c__4609__auto___58694);
var G__58698 = (0);
seq__58442_58675 = G__58695;
chunk__58445_58676 = G__58696;
count__58446_58677 = G__58697;
i__58447_58678 = G__58698;
continue;
} else {
var node_58700 = cljs.core.first(seq__58442_58693__$1);
var path_match_58701 = shadow.cljs.devtools.client.browser.match_paths(node_58700.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58701)){
var new_link_58703 = (function (){var G__58453 = node_58700.cloneNode(true);
G__58453.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58701),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58453;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58701], 0));

goog.dom.insertSiblingAfter(new_link_58703,node_58700);

goog.dom.removeNode(node_58700);


var G__58704 = cljs.core.next(seq__58442_58693__$1);
var G__58705 = null;
var G__58706 = (0);
var G__58707 = (0);
seq__58442_58675 = G__58704;
chunk__58445_58676 = G__58705;
count__58446_58677 = G__58706;
i__58447_58678 = G__58707;
continue;
} else {
var G__58708 = cljs.core.next(seq__58442_58693__$1);
var G__58709 = null;
var G__58710 = (0);
var G__58711 = (0);
seq__58442_58675 = G__58708;
chunk__58445_58676 = G__58709;
count__58446_58677 = G__58710;
i__58447_58678 = G__58711;
continue;
}
}
} else {
}
}
break;
}


var G__58712 = cljs.core.next(seq__58391__$1);
var G__58713 = null;
var G__58714 = (0);
var G__58715 = (0);
seq__58391 = G__58712;
chunk__58393 = G__58713;
count__58394 = G__58714;
i__58395 = G__58715;
continue;
} else {
var G__58716 = cljs.core.next(seq__58391__$1);
var G__58717 = null;
var G__58718 = (0);
var G__58719 = (0);
seq__58391 = G__58716;
chunk__58393 = G__58717;
count__58394 = G__58718;
i__58395 = G__58719;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__58454){
var map__58455 = p__58454;
var map__58455__$1 = (((((!((map__58455 == null))))?(((((map__58455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58455):map__58455);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__58459,done){
var map__58460 = p__58459;
var map__58460__$1 = (((((!((map__58460 == null))))?(((((map__58460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58460):map__58460);
var msg = map__58460__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58464){
var map__58465 = p__58464;
var map__58465__$1 = (((((!((map__58465 == null))))?(((((map__58465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58465):map__58465);
var src = map__58465__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58465__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e58468){var e = e58468;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__58469,done){
var map__58470 = p__58469;
var map__58470__$1 = (((((!((map__58470 == null))))?(((((map__58470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58470):map__58470);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__58472){
var map__58473 = p__58472;
var map__58473__$1 = (((((!((map__58473 == null))))?(((((map__58473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58473):map__58473);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__58475,done){
var map__58476 = p__58475;
var map__58476__$1 = (((((!((map__58476 == null))))?(((((map__58476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58476):map__58476);
var msg = map__58476__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58476__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__58478_58726 = type;
var G__58478_58727__$1 = (((G__58478_58726 instanceof cljs.core.Keyword))?G__58478_58726.fqn:null);
switch (G__58478_58727__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__58479 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__58480 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__58481 = "POST";
var G__58482 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__58483 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__58479,G__58480,G__58481,G__58482,G__58483);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__58485 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__58484 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__58484.cljs$core$IFn$_invoke$arity$1 ? fexpr__58484.cljs$core$IFn$_invoke$arity$1(G__58485) : fexpr__58484.call(null,G__58485));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e58486){var e = e58486;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___58748 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___58748)){
var s_58749 = temp__5735__auto___58748;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_58749.onclose = (function (e){
return null;
}));

s_58749.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
