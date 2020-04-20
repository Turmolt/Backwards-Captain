goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component');
goog.require('cljs.core');
var module$node_modules$create_react_class$index=shadow.js.require("module$node_modules$create_react_class$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.shallow_obj_to_map = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys(o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__45678 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k]));
var G__45679 = (i + (1));
m = G__45678;
i = G__45679;
continue;
} else {
return m;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$props_argv(c,p){
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.shallow_obj_to_map(p)], null);
} else {
var a = temp__5737__auto__;
return a;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_argv(c){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv(c,(c["props"]));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.shallow_obj_to_map(p);
} else {
var v = temp__5737__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_props(v);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5737__auto__ = (p["argv"]);
if((temp__5737__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__45615 = (p["children"]);
return module$node_modules$react$index.Children.toArray(G__45615);
})());
} else {
var v = temp__5737__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_children(v);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__45620 = c;
var G__45620__$1 = (((G__45620 == null))?null:G__45620.prototype);
if((G__45620__$1 == null)){
return null;
} else {
return (G__45620__$1["reagentRender"]);
}
})() == null)))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.react_class_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__45623 = c;
var G__45623__$1 = (((G__45623 == null))?null:G__45623.prototype);
if((G__45623__$1 == null)){
return null;
} else {
return (G__45623__$1["render"]);
}
})() == null)))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_component_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$reagent_component_QMARK_(c){
return (!(((c["reagentRender"]) == null)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cached_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cache_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__45627 = n;
switch (G__45627) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(res) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.call(null,res));
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_(res))?((function (c,f,_,res){
return (function() { 
var G__45689__delegate = function (args){
var G__45631 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(G__45631) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.call(null,G__45631));
};
var G__45689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45690__i = 0, G__45690__a = new Array(arguments.length -  0);
while (G__45690__i < G__45690__a.length) {G__45690__a[G__45690__i] = arguments[G__45690__i + 0]; ++G__45690__i;}
  args = new cljs.core.IndexedSeq(G__45690__a,0,null);
} 
return G__45689__delegate.call(this,args);};
G__45689.cljs$lang$maxFixedArity = 0;
G__45689.cljs$lang$applyTo = (function (arglist__45691){
var args = cljs.core.seq(arglist__45691);
return G__45689__delegate(args);
});
G__45689.cljs$core$IFn$_invoke$arity$variadic = G__45689__delegate;
return G__45689;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__45692 = c;
c = G__45692;
continue;
} else {
return res;

}
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.do_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__45632 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__45633 = c;
(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__45633);

try{var ok = [false];
try{var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_render(c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).error(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name.call(null)))].join(''));
} else {
}
}
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__45632);
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$render(){
var c = this;
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_non_reactive_STAR_){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.do_render(c);
} else {
var rat = (c["cljsRatom"]);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.run_in_reaction((function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.do_render(c);
}),c,"cljsRatom",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.queue_render,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.custom_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper(key,f){
var G__45638 = key;
var G__45638__$1 = (((G__45638 instanceof cljs.core.Keyword))?G__45638.fqn:null);
switch (G__45638__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.state_atom(c),f.call(c,c));
});

break;
case "componentWillReceiveProps":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv(c,nextprops));
});

break;
case "shouldComponentUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__4185__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
var or__4185__auto____$1 = noargv;
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
try{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv);
}catch (e45641){var e = e45641;
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}}
} else {
if(noargv){
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_argv(c),day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});

break;
case "componentWillUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv(c,nextprops));
});

break;
case "componentDidUpdate":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv(c,oldprops));
});

break;
case "componentWillMount":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidMount":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentWillUnmount":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__45645_45706 = (c["cljsRatom"]);
if((G__45645_45706 == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.dispose_BANG_(G__45645_45706);
}

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidCatch":
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});

break;
default:
return null;

}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_wrapper(key,f,name){
var wrap = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4174__auto__ = wrap;
if(cljs.core.truth_(and__4174__auto__)){
return f;
} else {
return and__4174__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__4185__auto__ = wrap;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return f;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.dash_to_camel = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.memoize_1(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.dash_to_camel);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.camelify_map_keys = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.add_obligatory = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.obligatory,fun_map], 0));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_funs = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$wrap_funs(fmap){
var renders_45716 = cljs.core.select_keys(fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_45717 = cljs.core.first(cljs.core.vals(renders_45716));
if((cljs.core.count(renders_45716) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count(renders_45716))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_(render_fun_45717)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([render_fun_45717], 0))].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__4185__auto__ = render_fun;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name(render_fun__$1);
}
})());
var name__$1 = (function (){var G__45646 = name;
switch (G__45646) {
case "":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"));

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_wrapper(k,v,name__$1));
}),cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.static_fns)], 0));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.map_to_js = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__45649 = o;
(G__45649[cljs.core.name(k)] = v);

return G__45649;
}),({}),m);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cljsify = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$cljsify(body){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.map_to_js(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_funs(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.add_obligatory(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.camelify_map_keys(body))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var G__45651 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cljsify(body);
return module$node_modules$create_react_class$index(G__45651);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$fiber_component_path(fiber){
var name = (function (){var G__45652 = fiber;
var G__45652__$1 = (((G__45652 == null))?null:(G__45652["type"]));
if((G__45652__$1 == null)){
return null;
} else {
return (G__45652__$1["displayName"]);
}
})();
var parent = (function (){var G__45653 = fiber;
if((G__45653 == null)){
return null;
} else {
return (G__45653["return"]);
}
})();
var path = (function (){var G__45654 = parent;
var G__45654__$1 = (((G__45654 == null))?null:(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1(G__45654) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path.call(null,G__45654)));
if((G__45654__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45654__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$component_path(c){
var temp__5733__auto__ = (function (){var or__4185__auto__ = (function (){var G__45656 = c;
if((G__45656 == null)){
return null;
} else {
return (G__45656["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__45657 = c;
if((G__45657 == null)){
return null;
} else {
return G__45657._reactInternalFiber;
}
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var fiber = temp__5733__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path(fiber);
} else {
var instance = (function (){var or__4185__auto__ = (function (){var G__45663 = c;
if((G__45663 == null)){
return null;
} else {
return (G__45663["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__45665 = c;
if((G__45665 == null)){
return null;
} else {
return G__45665._reactInternalInstance;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return c;
}
}
})();
var elem = (function (){var or__4185__auto__ = (function (){var G__45667 = instance;
if((G__45667 == null)){
return null;
} else {
return (G__45667["_currentElement"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__45668 = instance;
if((G__45668 == null)){
return null;
} else {
return G__45668._currentElement;
}
}
})();
var name = (function (){var G__45669 = elem;
var G__45669__$1 = (((G__45669 == null))?null:(G__45669["type"]));
if((G__45669__$1 == null)){
return null;
} else {
return (G__45669__$1["displayName"]);
}
})();
var owner = (function (){var or__4185__auto__ = (function (){var G__45671 = elem;
if((G__45671 == null)){
return null;
} else {
return (G__45671["_owner"]);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__45672 = elem;
if((G__45672 == null)){
return null;
} else {
return G__45672._owner;
}
}
})();
var path = (function (){var G__45673 = owner;
var G__45673__$1 = (((G__45673 == null))?null:(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1(G__45673) : day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path.call(null,G__45673)));
if((G__45673__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45673__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$comp_name(){
var c = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__4185__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path(c);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__45674 = c;
var G__45674__$1 = (((G__45674 == null))?null:G__45674.constructor);
if((G__45674__$1 == null)){
return null;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name(G__45674__$1);
}
}
})();
if((!(cljs.core.empty_QMARK_(n)))){
return [" (in ",n,")"].join('');
} else {
return "";
}

});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fn_to_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.react_class_QMARK_(f)) && ((!(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_(f)))))))))){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name(f);
if(cljs.core.empty_QMARK_(n)){
return f;
} else {
return n;
}
})()),day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name()].join(''));
} else {
}
} else {
}

if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_(f)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cache_react_class(f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.create_class(withrender);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cache_react_class(f,res);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$as_class(tag){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cached_react_class(tag);
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fn_to_class(tag);
} else {
var cached_class = temp__5737__auto__;
return cached_class;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$reactify_component(comp){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_class(comp);
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.js.map
