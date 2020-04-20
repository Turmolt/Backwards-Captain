goog.provide('backwards_captain.blog.blank');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('backwards_captain.events');
goog.require('secretary.core');
backwards_captain.blog.blank.title = "This is the title of the fancy first blog post";
backwards_captain.blog.blank.body_preview = "The body is very interesting";
backwards_captain.blog.blank.body = "Lorem ipsum testing things :)";
backwards_captain.blog.blank.preview = (function backwards_captain$blog$blank$preview(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.m-2","div.card.m-2",549203925),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),backwards_captain.blog.blank.title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15),new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),backwards_captain.blog.blank.body_preview], null)], null);
});
backwards_captain.blog.blank.panel = (function backwards_captain$blog$blank$panel(){
(document.title = backwards_captain.blog.blank.title);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),backwards_captain.blog.blank.title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),backwards_captain.blog.blank.body], null)], null);
});
backwards_captain.blog.blank.post = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"blank",new cljs.core.Keyword(null,"preview","preview",451279890),backwards_captain.blog.blank.preview,new cljs.core.Keyword(null,"panel","panel",-558637456),backwards_captain.blog.blank.panel], null);
var action__48895__auto___49476 = (function (params__48896__auto__){
if(cljs.core.map_QMARK_(params__48896__auto__)){
var map__49447 = params__48896__auto__;
var map__49447__$1 = (((((!((map__49447 == null))))?(((((map__49447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49447):map__49447);
var G__49450_49481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-active-panel","backwards-captain.events/set-active-panel",-514063540),new cljs.core.Keyword(null,"blog-panel","blog-panel",-1543263650)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49450_49481) : re_frame.core.dispatch.call(null,G__49450_49481));

var G__49451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-post","backwards-captain.events/set-post",-1752195835),backwards_captain.blog.blank.post], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49451) : re_frame.core.dispatch.call(null,G__49451));
} else {
if(cljs.core.vector_QMARK_(params__48896__auto__)){
var vec__49454 = params__48896__auto__;
var G__49457_49482 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-active-panel","backwards-captain.events/set-active-panel",-514063540),new cljs.core.Keyword(null,"blog-panel","blog-panel",-1543263650)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49457_49482) : re_frame.core.dispatch.call(null,G__49457_49482));

var G__49462 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backwards-captain.events","set-post","backwards-captain.events/set-post",-1752195835),backwards_captain.blog.blank.post], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49462) : re_frame.core.dispatch.call(null,G__49462));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(["/blog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__49467 = new cljs.core.Keyword(null,"name","name",1843675177);
return (backwards_captain.blog.blank.post.cljs$core$IFn$_invoke$arity$1 ? backwards_captain.blog.blank.post.cljs$core$IFn$_invoke$arity$1(G__49467) : backwards_captain.blog.blank.post.call(null,G__49467));
})())].join(''),action__48895__auto___49476);


//# sourceMappingURL=backwards_captain.blog.blank.js.map
