goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__51880 = arguments.length;
switch (G__51880) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__51898 = cljs.core.seq(Object.keys(localStorage));
var chunk__51899 = null;
var count__51900 = (0);
var i__51901 = (0);
while(true){
if((i__51901 < count__51900)){
var k = chunk__51899.cljs$core$IIndexed$_nth$arity$2(null,i__51901);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__51914 = seq__51898;
var G__51915 = chunk__51899;
var G__51916 = count__51900;
var G__51917 = (i__51901 + (1));
seq__51898 = G__51914;
chunk__51899 = G__51915;
count__51900 = G__51916;
i__51901 = G__51917;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51898);
if(temp__5735__auto__){
var seq__51898__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51898__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51898__$1);
var G__51918 = cljs.core.chunk_rest(seq__51898__$1);
var G__51919 = c__4609__auto__;
var G__51920 = cljs.core.count(c__4609__auto__);
var G__51921 = (0);
seq__51898 = G__51918;
chunk__51899 = G__51919;
count__51900 = G__51920;
i__51901 = G__51921;
continue;
} else {
var k = cljs.core.first(seq__51898__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__51922 = cljs.core.next(seq__51898__$1);
var G__51923 = null;
var G__51924 = (0);
var G__51925 = (0);
seq__51898 = G__51922;
chunk__51899 = G__51923;
count__51900 = G__51924;
i__51901 = G__51925;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
