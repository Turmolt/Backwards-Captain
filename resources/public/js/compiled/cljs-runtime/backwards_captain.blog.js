goog.provide('backwards_captain.blog');
goog.require('cljs.core');
goog.require('backwards_captain.blog.blank');
goog.require('backwards_captain.blog.one');
goog.require('secretary.core');
goog.require('re_frame.core');
backwards_captain.blog.posts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backwards_captain.blog.one.post,backwards_captain.blog.blank.post], null);
backwards_captain.blog.post_preview = (function backwards_captain$blog$post_preview(post){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/blog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(post))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51938 = new cljs.core.Keyword(null,"preview","preview",451279890);
return (post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1(G__51938) : post.call(null,G__51938));
})()], null)], null);
});
backwards_captain.blog.post_preview_panel = (function backwards_captain$blog$post_preview_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function backwards_captain$blog$post_preview_panel_$_iter__51939(s__51940){
return (new cljs.core.LazySeq(null,(function (){
var s__51940__$1 = s__51940;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51940__$1);
if(temp__5735__auto__){
var s__51940__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51940__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51940__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51942 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51941 = (0);
while(true){
if((i__51941 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51941);
cljs.core.chunk_append(b__51942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backwards_captain.blog.post_preview,x], null));

var G__51943 = (i__51941 + (1));
i__51941 = G__51943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51942),backwards_captain$blog$post_preview_panel_$_iter__51939(cljs.core.chunk_rest(s__51940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51942),null);
}
} else {
var x = cljs.core.first(s__51940__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backwards_captain.blog.post_preview,x], null),backwards_captain$blog$post_preview_panel_$_iter__51939(cljs.core.rest(s__51940__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(backwards_captain.blog.posts);
})()], null);
});
backwards_captain.blog.panel = (function backwards_captain$blog$panel(){
(document.title = "My thoughts on things");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [backwards_captain.blog.post_preview_panel], null);
});

//# sourceMappingURL=backwards_captain.blog.js.map
