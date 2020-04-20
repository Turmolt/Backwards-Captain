goog.provide('backwards_captain.blog.one');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('backwards_captain.events');
goog.require('secretary.core');
var module$node_modules$highlight_DOT_js$lib$highlight=shadow.js.require("module$node_modules$highlight_DOT_js$lib$highlight", {});
backwards_captain.blog.one.title = "Wrapping my head around Clojure";
backwards_captain.blog.one.body_preview = "The journey so far";
backwards_captain.blog.one.body = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Clojure be like ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"Clojure",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (n){
if(cljs.core.truth_(n)){
return setTimeout((function (){
return module$node_modules$highlight_DOT_js$lib$highlight.highlightBlock(n);
}),(0));
} else {
return null;
}
})], null),"(+ 1 1) ;=> 2"], null)], null)], null);
backwards_captain.blog.one.preview = (function backwards_captain$blog$one$preview(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.m-2","div.card.m-2",549203925),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),backwards_captain.blog.one.title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15),new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),backwards_captain.blog.one.body_preview], null)], null);
});
backwards_captain.blog.one.panel = (function backwards_captain$blog$one$panel(){
(document.title = backwards_captain.blog.one.title);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),backwards_captain.blog.one.title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),backwards_captain.blog.one.body], null)], null);
});
backwards_captain.blog.one.post = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"one",new cljs.core.Keyword(null,"preview","preview",451279890),backwards_captain.blog.one.preview,new cljs.core.Keyword(null,"panel","panel",-558637456),backwards_captain.blog.one.panel], null);
var action__49016__auto___51935 = (function (params__49017__auto__){
if(cljs.core.map_QMARK_(params__49017__auto__)){
var map__51922 = params__49017__auto__;
var map__51922__$1 = (((((!((map__51922 == null))))?(((((map__51922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51922):map__51922);
var G__51924_51936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-active-panel","backwards-captain.events/set-active-panel",-514063540),new cljs.core.Keyword(null,"blog-panel","blog-panel",-1543263650)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51924_51936) : re_frame.core.dispatch.call(null,G__51924_51936));

var G__51925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-post","backwards-captain.events/set-post",-1752195835),backwards_captain.blog.one.post], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51925) : re_frame.core.dispatch.call(null,G__51925));
} else {
if(cljs.core.vector_QMARK_(params__49017__auto__)){
var vec__51926 = params__49017__auto__;
var G__51929_51937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-active-panel","backwards-captain.events/set-active-panel",-514063540),new cljs.core.Keyword(null,"blog-panel","blog-panel",-1543263650)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51929_51937) : re_frame.core.dispatch.call(null,G__51929_51937));

var G__51930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-post","backwards-captain.events/set-post",-1752195835),backwards_captain.blog.one.post], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51930) : re_frame.core.dispatch.call(null,G__51930));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(["/blog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__51932 = new cljs.core.Keyword(null,"name","name",1843675177);
return (backwards_captain.blog.one.post.cljs$core$IFn$_invoke$arity$1 ? backwards_captain.blog.one.post.cljs$core$IFn$_invoke$arity$1(G__51932) : backwards_captain.blog.one.post.call(null,G__51932));
})())].join(''),action__49016__auto___51935);


//# sourceMappingURL=backwards_captain.blog.one.js.map
