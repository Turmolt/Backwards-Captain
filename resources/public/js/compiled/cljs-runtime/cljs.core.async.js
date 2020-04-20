goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54614 = arguments.length;
switch (G__54614) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54615 = (function (f,blockable,meta54616){
this.f = f;
this.blockable = blockable;
this.meta54616 = meta54616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54617,meta54616__$1){
var self__ = this;
var _54617__$1 = this;
return (new cljs.core.async.t_cljs$core$async54615(self__.f,self__.blockable,meta54616__$1));
}));

(cljs.core.async.t_cljs$core$async54615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54617){
var self__ = this;
var _54617__$1 = this;
return self__.meta54616;
}));

(cljs.core.async.t_cljs$core$async54615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54616","meta54616",2109748411,null)], null);
}));

(cljs.core.async.t_cljs$core$async54615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54615");

(cljs.core.async.t_cljs$core$async54615.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async54615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54615.
 */
cljs.core.async.__GT_t_cljs$core$async54615 = (function cljs$core$async$__GT_t_cljs$core$async54615(f__$1,blockable__$1,meta54616){
return (new cljs.core.async.t_cljs$core$async54615(f__$1,blockable__$1,meta54616));
});

}

return (new cljs.core.async.t_cljs$core$async54615(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__54622 = arguments.length;
switch (G__54622) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__54624 = arguments.length;
switch (G__54624) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__54626 = arguments.length;
switch (G__54626) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_56074 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56074) : fn1.call(null,val_56074));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56074) : fn1.call(null,val_56074));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__54628 = arguments.length;
switch (G__54628) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___56093 = n;
var x_56094 = (0);
while(true){
if((x_56094 < n__4666__auto___56093)){
(a[x_56094] = x_56094);

var G__56095 = (x_56094 + (1));
x_56094 = G__56095;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54629 = (function (flag,meta54630){
this.flag = flag;
this.meta54630 = meta54630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54631,meta54630__$1){
var self__ = this;
var _54631__$1 = this;
return (new cljs.core.async.t_cljs$core$async54629(self__.flag,meta54630__$1));
}));

(cljs.core.async.t_cljs$core$async54629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54631){
var self__ = this;
var _54631__$1 = this;
return self__.meta54630;
}));

(cljs.core.async.t_cljs$core$async54629.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54629.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54629.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54629.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54630","meta54630",-1510058132,null)], null);
}));

(cljs.core.async.t_cljs$core$async54629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54629");

(cljs.core.async.t_cljs$core$async54629.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async54629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54629.
 */
cljs.core.async.__GT_t_cljs$core$async54629 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54629(flag__$1,meta54630){
return (new cljs.core.async.t_cljs$core$async54629(flag__$1,meta54630));
});

}

return (new cljs.core.async.t_cljs$core$async54629(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54632 = (function (flag,cb,meta54633){
this.flag = flag;
this.cb = cb;
this.meta54633 = meta54633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54634,meta54633__$1){
var self__ = this;
var _54634__$1 = this;
return (new cljs.core.async.t_cljs$core$async54632(self__.flag,self__.cb,meta54633__$1));
}));

(cljs.core.async.t_cljs$core$async54632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54634){
var self__ = this;
var _54634__$1 = this;
return self__.meta54633;
}));

(cljs.core.async.t_cljs$core$async54632.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54632.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54633","meta54633",91480425,null)], null);
}));

(cljs.core.async.t_cljs$core$async54632.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54632");

(cljs.core.async.t_cljs$core$async54632.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async54632");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54632.
 */
cljs.core.async.__GT_t_cljs$core$async54632 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54632(flag__$1,cb__$1,meta54633){
return (new cljs.core.async.t_cljs$core$async54632(flag__$1,cb__$1,meta54633));
});

}

return (new cljs.core.async.t_cljs$core$async54632(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54635_SHARP_){
var G__54637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54635_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54637) : fret.call(null,G__54637));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54636_SHARP_){
var G__54638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54636_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54638) : fret.call(null,G__54638));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__56119 = (i + (1));
i = G__56119;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56125 = arguments.length;
var i__4790__auto___56126 = (0);
while(true){
if((i__4790__auto___56126 < len__4789__auto___56125)){
args__4795__auto__.push((arguments[i__4790__auto___56126]));

var G__56127 = (i__4790__auto___56126 + (1));
i__4790__auto___56126 = G__56127;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54641){
var map__54642 = p__54641;
var map__54642__$1 = (((((!((map__54642 == null))))?(((((map__54642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54642):map__54642);
var opts = map__54642__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54639){
var G__54640 = cljs.core.first(seq54639);
var seq54639__$1 = cljs.core.next(seq54639);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54640,seq54639__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__54645 = arguments.length;
switch (G__54645) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__54553__auto___56149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_54669){
var state_val_54670 = (state_54669[(1)]);
if((state_val_54670 === (7))){
var inst_54665 = (state_54669[(2)]);
var state_54669__$1 = state_54669;
var statearr_54671_56150 = state_54669__$1;
(statearr_54671_56150[(2)] = inst_54665);

(statearr_54671_56150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (1))){
var state_54669__$1 = state_54669;
var statearr_54672_56153 = state_54669__$1;
(statearr_54672_56153[(2)] = null);

(statearr_54672_56153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (4))){
var inst_54648 = (state_54669[(7)]);
var inst_54648__$1 = (state_54669[(2)]);
var inst_54649 = (inst_54648__$1 == null);
var state_54669__$1 = (function (){var statearr_54673 = state_54669;
(statearr_54673[(7)] = inst_54648__$1);

return statearr_54673;
})();
if(cljs.core.truth_(inst_54649)){
var statearr_54674_56154 = state_54669__$1;
(statearr_54674_56154[(1)] = (5));

} else {
var statearr_54675_56155 = state_54669__$1;
(statearr_54675_56155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (13))){
var state_54669__$1 = state_54669;
var statearr_54676_56156 = state_54669__$1;
(statearr_54676_56156[(2)] = null);

(statearr_54676_56156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (6))){
var inst_54648 = (state_54669[(7)]);
var state_54669__$1 = state_54669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54669__$1,(11),to,inst_54648);
} else {
if((state_val_54670 === (3))){
var inst_54667 = (state_54669[(2)]);
var state_54669__$1 = state_54669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54669__$1,inst_54667);
} else {
if((state_val_54670 === (12))){
var state_54669__$1 = state_54669;
var statearr_54677_56157 = state_54669__$1;
(statearr_54677_56157[(2)] = null);

(statearr_54677_56157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (2))){
var state_54669__$1 = state_54669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54669__$1,(4),from);
} else {
if((state_val_54670 === (11))){
var inst_54658 = (state_54669[(2)]);
var state_54669__$1 = state_54669;
if(cljs.core.truth_(inst_54658)){
var statearr_54678_56162 = state_54669__$1;
(statearr_54678_56162[(1)] = (12));

} else {
var statearr_54679_56163 = state_54669__$1;
(statearr_54679_56163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (9))){
var state_54669__$1 = state_54669;
var statearr_54680_56164 = state_54669__$1;
(statearr_54680_56164[(2)] = null);

(statearr_54680_56164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (5))){
var state_54669__$1 = state_54669;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54681_56165 = state_54669__$1;
(statearr_54681_56165[(1)] = (8));

} else {
var statearr_54682_56167 = state_54669__$1;
(statearr_54682_56167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (14))){
var inst_54663 = (state_54669[(2)]);
var state_54669__$1 = state_54669;
var statearr_54683_56168 = state_54669__$1;
(statearr_54683_56168[(2)] = inst_54663);

(statearr_54683_56168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (10))){
var inst_54655 = (state_54669[(2)]);
var state_54669__$1 = state_54669;
var statearr_54684_56170 = state_54669__$1;
(statearr_54684_56170[(2)] = inst_54655);

(statearr_54684_56170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (8))){
var inst_54652 = cljs.core.async.close_BANG_(to);
var state_54669__$1 = state_54669;
var statearr_54685_56174 = state_54669__$1;
(statearr_54685_56174[(2)] = inst_54652);

(statearr_54685_56174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_54686 = [null,null,null,null,null,null,null,null];
(statearr_54686[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_54686[(1)] = (1));

return statearr_54686;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_54669){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_54669);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e54687){if((e54687 instanceof Object)){
var ex__54459__auto__ = e54687;
var statearr_54688_56175 = state_54669;
(statearr_54688_56175[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54687;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56176 = state_54669;
state_54669 = G__56176;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_54669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_54669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_54689 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_54689[(6)] = c__54553__auto___56149);

return statearr_54689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__54690){
var vec__54691 = p__54690;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54691,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54691,(1),null);
var job = vec__54691;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54553__auto___56181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_54698){
var state_val_54699 = (state_54698[(1)]);
if((state_val_54699 === (1))){
var state_54698__$1 = state_54698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54698__$1,(2),res,v);
} else {
if((state_val_54699 === (2))){
var inst_54695 = (state_54698[(2)]);
var inst_54696 = cljs.core.async.close_BANG_(res);
var state_54698__$1 = (function (){var statearr_54700 = state_54698;
(statearr_54700[(7)] = inst_54695);

return statearr_54700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54698__$1,inst_54696);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0 = (function (){
var statearr_54701 = [null,null,null,null,null,null,null,null];
(statearr_54701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__);

(statearr_54701[(1)] = (1));

return statearr_54701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1 = (function (state_54698){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_54698);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e54702){if((e54702 instanceof Object)){
var ex__54459__auto__ = e54702;
var statearr_54703_56186 = state_54698;
(statearr_54703_56186[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56187 = state_54698;
state_54698 = G__56187;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__ = function(state_54698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1.call(this,state_54698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_54704 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_54704[(6)] = c__54553__auto___56181);

return statearr_54704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54705){
var vec__54706 = p__54705;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54706,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54706,(1),null);
var job = vec__54706;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___56188 = n;
var __56189 = (0);
while(true){
if((__56189 < n__4666__auto___56188)){
var G__54709_56190 = type;
var G__54709_56191__$1 = (((G__54709_56190 instanceof cljs.core.Keyword))?G__54709_56190.fqn:null);
switch (G__54709_56191__$1) {
case "compute":
var c__54553__auto___56194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56189,c__54553__auto___56194,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async){
return (function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = ((function (__56189,c__54553__auto___56194,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async){
return (function (state_54722){
var state_val_54723 = (state_54722[(1)]);
if((state_val_54723 === (1))){
var state_54722__$1 = state_54722;
var statearr_54724_56196 = state_54722__$1;
(statearr_54724_56196[(2)] = null);

(statearr_54724_56196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54723 === (2))){
var state_54722__$1 = state_54722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54722__$1,(4),jobs);
} else {
if((state_val_54723 === (3))){
var inst_54720 = (state_54722[(2)]);
var state_54722__$1 = state_54722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54722__$1,inst_54720);
} else {
if((state_val_54723 === (4))){
var inst_54712 = (state_54722[(2)]);
var inst_54713 = process(inst_54712);
var state_54722__$1 = state_54722;
if(cljs.core.truth_(inst_54713)){
var statearr_54725_56197 = state_54722__$1;
(statearr_54725_56197[(1)] = (5));

} else {
var statearr_54726_56198 = state_54722__$1;
(statearr_54726_56198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54723 === (5))){
var state_54722__$1 = state_54722;
var statearr_54727_56199 = state_54722__$1;
(statearr_54727_56199[(2)] = null);

(statearr_54727_56199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54723 === (6))){
var state_54722__$1 = state_54722;
var statearr_54728_56200 = state_54722__$1;
(statearr_54728_56200[(2)] = null);

(statearr_54728_56200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54723 === (7))){
var inst_54718 = (state_54722[(2)]);
var state_54722__$1 = state_54722;
var statearr_54729_56201 = state_54722__$1;
(statearr_54729_56201[(2)] = inst_54718);

(statearr_54729_56201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__56189,c__54553__auto___56194,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async))
;
return ((function (__56189,switch__54455__auto__,c__54553__auto___56194,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0 = (function (){
var statearr_54730 = [null,null,null,null,null,null,null];
(statearr_54730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__);

(statearr_54730[(1)] = (1));

return statearr_54730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1 = (function (state_54722){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_54722);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e54731){if((e54731 instanceof Object)){
var ex__54459__auto__ = e54731;
var statearr_54732_56203 = state_54722;
(statearr_54732_56203[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56205 = state_54722;
state_54722 = G__56205;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__ = function(state_54722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1.call(this,state_54722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__;
})()
;})(__56189,switch__54455__auto__,c__54553__auto___56194,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async))
})();
var state__54555__auto__ = (function (){var statearr_54733 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_54733[(6)] = c__54553__auto___56194);

return statearr_54733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
});})(__56189,c__54553__auto___56194,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async))
);


break;
case "async":
var c__54553__auto___56206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56189,c__54553__auto___56206,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async){
return (function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = ((function (__56189,c__54553__auto___56206,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async){
return (function (state_54746){
var state_val_54747 = (state_54746[(1)]);
if((state_val_54747 === (1))){
var state_54746__$1 = state_54746;
var statearr_54748_56208 = state_54746__$1;
(statearr_54748_56208[(2)] = null);

(statearr_54748_56208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54747 === (2))){
var state_54746__$1 = state_54746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54746__$1,(4),jobs);
} else {
if((state_val_54747 === (3))){
var inst_54744 = (state_54746[(2)]);
var state_54746__$1 = state_54746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54746__$1,inst_54744);
} else {
if((state_val_54747 === (4))){
var inst_54736 = (state_54746[(2)]);
var inst_54737 = async(inst_54736);
var state_54746__$1 = state_54746;
if(cljs.core.truth_(inst_54737)){
var statearr_54749_56210 = state_54746__$1;
(statearr_54749_56210[(1)] = (5));

} else {
var statearr_54750_56211 = state_54746__$1;
(statearr_54750_56211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54747 === (5))){
var state_54746__$1 = state_54746;
var statearr_54751_56212 = state_54746__$1;
(statearr_54751_56212[(2)] = null);

(statearr_54751_56212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54747 === (6))){
var state_54746__$1 = state_54746;
var statearr_54752_56213 = state_54746__$1;
(statearr_54752_56213[(2)] = null);

(statearr_54752_56213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54747 === (7))){
var inst_54742 = (state_54746[(2)]);
var state_54746__$1 = state_54746;
var statearr_54753_56216 = state_54746__$1;
(statearr_54753_56216[(2)] = inst_54742);

(statearr_54753_56216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__56189,c__54553__auto___56206,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async))
;
return ((function (__56189,switch__54455__auto__,c__54553__auto___56206,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0 = (function (){
var statearr_54754 = [null,null,null,null,null,null,null];
(statearr_54754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__);

(statearr_54754[(1)] = (1));

return statearr_54754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1 = (function (state_54746){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_54746);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e54755){if((e54755 instanceof Object)){
var ex__54459__auto__ = e54755;
var statearr_54756_56217 = state_54746;
(statearr_54756_56217[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56218 = state_54746;
state_54746 = G__56218;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__ = function(state_54746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1.call(this,state_54746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__;
})()
;})(__56189,switch__54455__auto__,c__54553__auto___56206,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async))
})();
var state__54555__auto__ = (function (){var statearr_54757 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_54757[(6)] = c__54553__auto___56206);

return statearr_54757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
});})(__56189,c__54553__auto___56206,G__54709_56190,G__54709_56191__$1,n__4666__auto___56188,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54709_56191__$1)].join('')));

}

var G__56220 = (__56189 + (1));
__56189 = G__56220;
continue;
} else {
}
break;
}

var c__54553__auto___56222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_54779){
var state_val_54780 = (state_54779[(1)]);
if((state_val_54780 === (7))){
var inst_54775 = (state_54779[(2)]);
var state_54779__$1 = state_54779;
var statearr_54781_56223 = state_54779__$1;
(statearr_54781_56223[(2)] = inst_54775);

(statearr_54781_56223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54780 === (1))){
var state_54779__$1 = state_54779;
var statearr_54782_56226 = state_54779__$1;
(statearr_54782_56226[(2)] = null);

(statearr_54782_56226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54780 === (4))){
var inst_54760 = (state_54779[(7)]);
var inst_54760__$1 = (state_54779[(2)]);
var inst_54761 = (inst_54760__$1 == null);
var state_54779__$1 = (function (){var statearr_54783 = state_54779;
(statearr_54783[(7)] = inst_54760__$1);

return statearr_54783;
})();
if(cljs.core.truth_(inst_54761)){
var statearr_54784_56229 = state_54779__$1;
(statearr_54784_56229[(1)] = (5));

} else {
var statearr_54785_56230 = state_54779__$1;
(statearr_54785_56230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54780 === (6))){
var inst_54765 = (state_54779[(8)]);
var inst_54760 = (state_54779[(7)]);
var inst_54765__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_54766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54767 = [inst_54760,inst_54765__$1];
var inst_54768 = (new cljs.core.PersistentVector(null,2,(5),inst_54766,inst_54767,null));
var state_54779__$1 = (function (){var statearr_54786 = state_54779;
(statearr_54786[(8)] = inst_54765__$1);

return statearr_54786;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54779__$1,(8),jobs,inst_54768);
} else {
if((state_val_54780 === (3))){
var inst_54777 = (state_54779[(2)]);
var state_54779__$1 = state_54779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54779__$1,inst_54777);
} else {
if((state_val_54780 === (2))){
var state_54779__$1 = state_54779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54779__$1,(4),from);
} else {
if((state_val_54780 === (9))){
var inst_54772 = (state_54779[(2)]);
var state_54779__$1 = (function (){var statearr_54787 = state_54779;
(statearr_54787[(9)] = inst_54772);

return statearr_54787;
})();
var statearr_54788_56236 = state_54779__$1;
(statearr_54788_56236[(2)] = null);

(statearr_54788_56236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54780 === (5))){
var inst_54763 = cljs.core.async.close_BANG_(jobs);
var state_54779__$1 = state_54779;
var statearr_54789_56238 = state_54779__$1;
(statearr_54789_56238[(2)] = inst_54763);

(statearr_54789_56238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54780 === (8))){
var inst_54765 = (state_54779[(8)]);
var inst_54770 = (state_54779[(2)]);
var state_54779__$1 = (function (){var statearr_54790 = state_54779;
(statearr_54790[(10)] = inst_54770);

return statearr_54790;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54779__$1,(9),results,inst_54765);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0 = (function (){
var statearr_54791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__);

(statearr_54791[(1)] = (1));

return statearr_54791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1 = (function (state_54779){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_54779);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e54792){if((e54792 instanceof Object)){
var ex__54459__auto__ = e54792;
var statearr_54793_56241 = state_54779;
(statearr_54793_56241[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56243 = state_54779;
state_54779 = G__56243;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__ = function(state_54779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1.call(this,state_54779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_54794 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_54794[(6)] = c__54553__auto___56222);

return statearr_54794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


var c__54553__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_54832){
var state_val_54833 = (state_54832[(1)]);
if((state_val_54833 === (7))){
var inst_54828 = (state_54832[(2)]);
var state_54832__$1 = state_54832;
var statearr_54834_56244 = state_54832__$1;
(statearr_54834_56244[(2)] = inst_54828);

(statearr_54834_56244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (20))){
var state_54832__$1 = state_54832;
var statearr_54835_56245 = state_54832__$1;
(statearr_54835_56245[(2)] = null);

(statearr_54835_56245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (1))){
var state_54832__$1 = state_54832;
var statearr_54836_56246 = state_54832__$1;
(statearr_54836_56246[(2)] = null);

(statearr_54836_56246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (4))){
var inst_54797 = (state_54832[(7)]);
var inst_54797__$1 = (state_54832[(2)]);
var inst_54798 = (inst_54797__$1 == null);
var state_54832__$1 = (function (){var statearr_54837 = state_54832;
(statearr_54837[(7)] = inst_54797__$1);

return statearr_54837;
})();
if(cljs.core.truth_(inst_54798)){
var statearr_54838_56251 = state_54832__$1;
(statearr_54838_56251[(1)] = (5));

} else {
var statearr_54839_56252 = state_54832__$1;
(statearr_54839_56252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (15))){
var inst_54810 = (state_54832[(8)]);
var state_54832__$1 = state_54832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54832__$1,(18),to,inst_54810);
} else {
if((state_val_54833 === (21))){
var inst_54823 = (state_54832[(2)]);
var state_54832__$1 = state_54832;
var statearr_54840_56256 = state_54832__$1;
(statearr_54840_56256[(2)] = inst_54823);

(statearr_54840_56256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (13))){
var inst_54825 = (state_54832[(2)]);
var state_54832__$1 = (function (){var statearr_54841 = state_54832;
(statearr_54841[(9)] = inst_54825);

return statearr_54841;
})();
var statearr_54842_56257 = state_54832__$1;
(statearr_54842_56257[(2)] = null);

(statearr_54842_56257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (6))){
var inst_54797 = (state_54832[(7)]);
var state_54832__$1 = state_54832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54832__$1,(11),inst_54797);
} else {
if((state_val_54833 === (17))){
var inst_54818 = (state_54832[(2)]);
var state_54832__$1 = state_54832;
if(cljs.core.truth_(inst_54818)){
var statearr_54843_56261 = state_54832__$1;
(statearr_54843_56261[(1)] = (19));

} else {
var statearr_54844_56262 = state_54832__$1;
(statearr_54844_56262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (3))){
var inst_54830 = (state_54832[(2)]);
var state_54832__$1 = state_54832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54832__$1,inst_54830);
} else {
if((state_val_54833 === (12))){
var inst_54807 = (state_54832[(10)]);
var state_54832__$1 = state_54832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54832__$1,(14),inst_54807);
} else {
if((state_val_54833 === (2))){
var state_54832__$1 = state_54832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54832__$1,(4),results);
} else {
if((state_val_54833 === (19))){
var state_54832__$1 = state_54832;
var statearr_54845_56266 = state_54832__$1;
(statearr_54845_56266[(2)] = null);

(statearr_54845_56266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (11))){
var inst_54807 = (state_54832[(2)]);
var state_54832__$1 = (function (){var statearr_54846 = state_54832;
(statearr_54846[(10)] = inst_54807);

return statearr_54846;
})();
var statearr_54847_56270 = state_54832__$1;
(statearr_54847_56270[(2)] = null);

(statearr_54847_56270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (9))){
var state_54832__$1 = state_54832;
var statearr_54848_56271 = state_54832__$1;
(statearr_54848_56271[(2)] = null);

(statearr_54848_56271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (5))){
var state_54832__$1 = state_54832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54849_56272 = state_54832__$1;
(statearr_54849_56272[(1)] = (8));

} else {
var statearr_54850_56274 = state_54832__$1;
(statearr_54850_56274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (14))){
var inst_54810 = (state_54832[(8)]);
var inst_54810__$1 = (state_54832[(2)]);
var inst_54811 = (inst_54810__$1 == null);
var inst_54812 = cljs.core.not(inst_54811);
var state_54832__$1 = (function (){var statearr_54851 = state_54832;
(statearr_54851[(8)] = inst_54810__$1);

return statearr_54851;
})();
if(inst_54812){
var statearr_54852_56276 = state_54832__$1;
(statearr_54852_56276[(1)] = (15));

} else {
var statearr_54853_56277 = state_54832__$1;
(statearr_54853_56277[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (16))){
var state_54832__$1 = state_54832;
var statearr_54854_56278 = state_54832__$1;
(statearr_54854_56278[(2)] = false);

(statearr_54854_56278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (10))){
var inst_54804 = (state_54832[(2)]);
var state_54832__$1 = state_54832;
var statearr_54855_56279 = state_54832__$1;
(statearr_54855_56279[(2)] = inst_54804);

(statearr_54855_56279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (18))){
var inst_54815 = (state_54832[(2)]);
var state_54832__$1 = state_54832;
var statearr_54856_56280 = state_54832__$1;
(statearr_54856_56280[(2)] = inst_54815);

(statearr_54856_56280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54833 === (8))){
var inst_54801 = cljs.core.async.close_BANG_(to);
var state_54832__$1 = state_54832;
var statearr_54857_56284 = state_54832__$1;
(statearr_54857_56284[(2)] = inst_54801);

(statearr_54857_56284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0 = (function (){
var statearr_54858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__);

(statearr_54858[(1)] = (1));

return statearr_54858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1 = (function (state_54832){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_54832);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e54859){if((e54859 instanceof Object)){
var ex__54459__auto__ = e54859;
var statearr_54860_56292 = state_54832;
(statearr_54860_56292[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54859;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56296 = state_54832;
state_54832 = G__56296;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__ = function(state_54832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1.call(this,state_54832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_54861 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_54861[(6)] = c__54553__auto__);

return statearr_54861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));

return c__54553__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__54863 = arguments.length;
switch (G__54863) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__54865 = arguments.length;
switch (G__54865) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__54867 = arguments.length;
switch (G__54867) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__54553__auto___56331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_54893){
var state_val_54894 = (state_54893[(1)]);
if((state_val_54894 === (7))){
var inst_54889 = (state_54893[(2)]);
var state_54893__$1 = state_54893;
var statearr_54895_56338 = state_54893__$1;
(statearr_54895_56338[(2)] = inst_54889);

(statearr_54895_56338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54894 === (1))){
var state_54893__$1 = state_54893;
var statearr_54896_56339 = state_54893__$1;
(statearr_54896_56339[(2)] = null);

(statearr_54896_56339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54894 === (4))){
var inst_54870 = (state_54893[(7)]);
var inst_54870__$1 = (state_54893[(2)]);
var inst_54871 = (inst_54870__$1 == null);
var state_54893__$1 = (function (){var statearr_54897 = state_54893;
(statearr_54897[(7)] = inst_54870__$1);

return statearr_54897;
})();
if(cljs.core.truth_(inst_54871)){
var statearr_54898_56340 = state_54893__$1;
(statearr_54898_56340[(1)] = (5));

} else {
var statearr_54899_56341 = state_54893__$1;
(statearr_54899_56341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54894 === (13))){
var state_54893__$1 = state_54893;
var statearr_54900_56343 = state_54893__$1;
(statearr_54900_56343[(2)] = null);

(statearr_54900_56343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54894 === (6))){
var inst_54870 = (state_54893[(7)]);
var inst_54876 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54870) : p.call(null,inst_54870));
var state_54893__$1 = state_54893;
if(cljs.core.truth_(inst_54876)){
var statearr_54901_56344 = state_54893__$1;
(statearr_54901_56344[(1)] = (9));

} else {
var statearr_54902_56345 = state_54893__$1;
(statearr_54902_56345[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54894 === (3))){
var inst_54891 = (state_54893[(2)]);
var state_54893__$1 = state_54893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54893__$1,inst_54891);
} else {
if((state_val_54894 === (12))){
var state_54893__$1 = state_54893;
var statearr_54903_56346 = state_54893__$1;
(statearr_54903_56346[(2)] = null);

(statearr_54903_56346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54894 === (2))){
var state_54893__$1 = state_54893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54893__$1,(4),ch);
} else {
if((state_val_54894 === (11))){
var inst_54870 = (state_54893[(7)]);
var inst_54880 = (state_54893[(2)]);
var state_54893__$1 = state_54893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54893__$1,(8),inst_54880,inst_54870);
} else {
if((state_val_54894 === (9))){
var state_54893__$1 = state_54893;
var statearr_54904_56347 = state_54893__$1;
(statearr_54904_56347[(2)] = tc);

(statearr_54904_56347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54894 === (5))){
var inst_54873 = cljs.core.async.close_BANG_(tc);
var inst_54874 = cljs.core.async.close_BANG_(fc);
var state_54893__$1 = (function (){var statearr_54905 = state_54893;
(statearr_54905[(8)] = inst_54873);

return statearr_54905;
})();
var statearr_54906_56348 = state_54893__$1;
(statearr_54906_56348[(2)] = inst_54874);

(statearr_54906_56348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54894 === (14))){
var inst_54887 = (state_54893[(2)]);
var state_54893__$1 = state_54893;
var statearr_54907_56349 = state_54893__$1;
(statearr_54907_56349[(2)] = inst_54887);

(statearr_54907_56349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54894 === (10))){
var state_54893__$1 = state_54893;
var statearr_54908_56350 = state_54893__$1;
(statearr_54908_56350[(2)] = fc);

(statearr_54908_56350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54894 === (8))){
var inst_54882 = (state_54893[(2)]);
var state_54893__$1 = state_54893;
if(cljs.core.truth_(inst_54882)){
var statearr_54909_56351 = state_54893__$1;
(statearr_54909_56351[(1)] = (12));

} else {
var statearr_54910_56354 = state_54893__$1;
(statearr_54910_56354[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_54911 = [null,null,null,null,null,null,null,null,null];
(statearr_54911[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_54911[(1)] = (1));

return statearr_54911;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_54893){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_54893);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e54912){if((e54912 instanceof Object)){
var ex__54459__auto__ = e54912;
var statearr_54913_56355 = state_54893;
(statearr_54913_56355[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56356 = state_54893;
state_54893 = G__56356;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_54893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_54893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_54914 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_54914[(6)] = c__54553__auto___56331);

return statearr_54914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__54553__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_54935){
var state_val_54936 = (state_54935[(1)]);
if((state_val_54936 === (7))){
var inst_54931 = (state_54935[(2)]);
var state_54935__$1 = state_54935;
var statearr_54937_56357 = state_54935__$1;
(statearr_54937_56357[(2)] = inst_54931);

(statearr_54937_56357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54936 === (1))){
var inst_54915 = init;
var state_54935__$1 = (function (){var statearr_54938 = state_54935;
(statearr_54938[(7)] = inst_54915);

return statearr_54938;
})();
var statearr_54939_56358 = state_54935__$1;
(statearr_54939_56358[(2)] = null);

(statearr_54939_56358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54936 === (4))){
var inst_54918 = (state_54935[(8)]);
var inst_54918__$1 = (state_54935[(2)]);
var inst_54919 = (inst_54918__$1 == null);
var state_54935__$1 = (function (){var statearr_54940 = state_54935;
(statearr_54940[(8)] = inst_54918__$1);

return statearr_54940;
})();
if(cljs.core.truth_(inst_54919)){
var statearr_54941_56362 = state_54935__$1;
(statearr_54941_56362[(1)] = (5));

} else {
var statearr_54942_56363 = state_54935__$1;
(statearr_54942_56363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54936 === (6))){
var inst_54922 = (state_54935[(9)]);
var inst_54915 = (state_54935[(7)]);
var inst_54918 = (state_54935[(8)]);
var inst_54922__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_54915,inst_54918) : f.call(null,inst_54915,inst_54918));
var inst_54923 = cljs.core.reduced_QMARK_(inst_54922__$1);
var state_54935__$1 = (function (){var statearr_54943 = state_54935;
(statearr_54943[(9)] = inst_54922__$1);

return statearr_54943;
})();
if(inst_54923){
var statearr_54944_56367 = state_54935__$1;
(statearr_54944_56367[(1)] = (8));

} else {
var statearr_54945_56368 = state_54935__$1;
(statearr_54945_56368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54936 === (3))){
var inst_54933 = (state_54935[(2)]);
var state_54935__$1 = state_54935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54935__$1,inst_54933);
} else {
if((state_val_54936 === (2))){
var state_54935__$1 = state_54935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54935__$1,(4),ch);
} else {
if((state_val_54936 === (9))){
var inst_54922 = (state_54935[(9)]);
var inst_54915 = inst_54922;
var state_54935__$1 = (function (){var statearr_54946 = state_54935;
(statearr_54946[(7)] = inst_54915);

return statearr_54946;
})();
var statearr_54947_56372 = state_54935__$1;
(statearr_54947_56372[(2)] = null);

(statearr_54947_56372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54936 === (5))){
var inst_54915 = (state_54935[(7)]);
var state_54935__$1 = state_54935;
var statearr_54948_56373 = state_54935__$1;
(statearr_54948_56373[(2)] = inst_54915);

(statearr_54948_56373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54936 === (10))){
var inst_54929 = (state_54935[(2)]);
var state_54935__$1 = state_54935;
var statearr_54949_56374 = state_54935__$1;
(statearr_54949_56374[(2)] = inst_54929);

(statearr_54949_56374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54936 === (8))){
var inst_54922 = (state_54935[(9)]);
var inst_54925 = cljs.core.deref(inst_54922);
var state_54935__$1 = state_54935;
var statearr_54950_56375 = state_54935__$1;
(statearr_54950_56375[(2)] = inst_54925);

(statearr_54950_56375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__54456__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54456__auto____0 = (function (){
var statearr_54951 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54951[(0)] = cljs$core$async$reduce_$_state_machine__54456__auto__);

(statearr_54951[(1)] = (1));

return statearr_54951;
});
var cljs$core$async$reduce_$_state_machine__54456__auto____1 = (function (state_54935){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_54935);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e54952){if((e54952 instanceof Object)){
var ex__54459__auto__ = e54952;
var statearr_54953_56376 = state_54935;
(statearr_54953_56376[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56378 = state_54935;
state_54935 = G__56378;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54456__auto__ = function(state_54935){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54456__auto____1.call(this,state_54935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54456__auto____0;
cljs$core$async$reduce_$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54456__auto____1;
return cljs$core$async$reduce_$_state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_54954 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_54954[(6)] = c__54553__auto__);

return statearr_54954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));

return c__54553__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54553__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_54960){
var state_val_54961 = (state_54960[(1)]);
if((state_val_54961 === (1))){
var inst_54955 = cljs.core.async.reduce(f__$1,init,ch);
var state_54960__$1 = state_54960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54960__$1,(2),inst_54955);
} else {
if((state_val_54961 === (2))){
var inst_54957 = (state_54960[(2)]);
var inst_54958 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_54957) : f__$1.call(null,inst_54957));
var state_54960__$1 = state_54960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54960__$1,inst_54958);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54456__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54456__auto____0 = (function (){
var statearr_54962 = [null,null,null,null,null,null,null];
(statearr_54962[(0)] = cljs$core$async$transduce_$_state_machine__54456__auto__);

(statearr_54962[(1)] = (1));

return statearr_54962;
});
var cljs$core$async$transduce_$_state_machine__54456__auto____1 = (function (state_54960){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_54960);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e54963){if((e54963 instanceof Object)){
var ex__54459__auto__ = e54963;
var statearr_54964_56393 = state_54960;
(statearr_54964_56393[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54963;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56400 = state_54960;
state_54960 = G__56400;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54456__auto__ = function(state_54960){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54456__auto____1.call(this,state_54960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54456__auto____0;
cljs$core$async$transduce_$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54456__auto____1;
return cljs$core$async$transduce_$_state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_54965 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_54965[(6)] = c__54553__auto__);

return statearr_54965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));

return c__54553__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__54967 = arguments.length;
switch (G__54967) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__54553__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_54992){
var state_val_54993 = (state_54992[(1)]);
if((state_val_54993 === (7))){
var inst_54974 = (state_54992[(2)]);
var state_54992__$1 = state_54992;
var statearr_54994_56402 = state_54992__$1;
(statearr_54994_56402[(2)] = inst_54974);

(statearr_54994_56402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54993 === (1))){
var inst_54968 = cljs.core.seq(coll);
var inst_54969 = inst_54968;
var state_54992__$1 = (function (){var statearr_54995 = state_54992;
(statearr_54995[(7)] = inst_54969);

return statearr_54995;
})();
var statearr_54996_56403 = state_54992__$1;
(statearr_54996_56403[(2)] = null);

(statearr_54996_56403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54993 === (4))){
var inst_54969 = (state_54992[(7)]);
var inst_54972 = cljs.core.first(inst_54969);
var state_54992__$1 = state_54992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54992__$1,(7),ch,inst_54972);
} else {
if((state_val_54993 === (13))){
var inst_54986 = (state_54992[(2)]);
var state_54992__$1 = state_54992;
var statearr_54997_56410 = state_54992__$1;
(statearr_54997_56410[(2)] = inst_54986);

(statearr_54997_56410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54993 === (6))){
var inst_54977 = (state_54992[(2)]);
var state_54992__$1 = state_54992;
if(cljs.core.truth_(inst_54977)){
var statearr_54998_56411 = state_54992__$1;
(statearr_54998_56411[(1)] = (8));

} else {
var statearr_54999_56412 = state_54992__$1;
(statearr_54999_56412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54993 === (3))){
var inst_54990 = (state_54992[(2)]);
var state_54992__$1 = state_54992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54992__$1,inst_54990);
} else {
if((state_val_54993 === (12))){
var state_54992__$1 = state_54992;
var statearr_55000_56413 = state_54992__$1;
(statearr_55000_56413[(2)] = null);

(statearr_55000_56413[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54993 === (2))){
var inst_54969 = (state_54992[(7)]);
var state_54992__$1 = state_54992;
if(cljs.core.truth_(inst_54969)){
var statearr_55001_56414 = state_54992__$1;
(statearr_55001_56414[(1)] = (4));

} else {
var statearr_55002_56415 = state_54992__$1;
(statearr_55002_56415[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54993 === (11))){
var inst_54983 = cljs.core.async.close_BANG_(ch);
var state_54992__$1 = state_54992;
var statearr_55003_56416 = state_54992__$1;
(statearr_55003_56416[(2)] = inst_54983);

(statearr_55003_56416[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54993 === (9))){
var state_54992__$1 = state_54992;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55004_56417 = state_54992__$1;
(statearr_55004_56417[(1)] = (11));

} else {
var statearr_55005_56418 = state_54992__$1;
(statearr_55005_56418[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54993 === (5))){
var inst_54969 = (state_54992[(7)]);
var state_54992__$1 = state_54992;
var statearr_55006_56419 = state_54992__$1;
(statearr_55006_56419[(2)] = inst_54969);

(statearr_55006_56419[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54993 === (10))){
var inst_54988 = (state_54992[(2)]);
var state_54992__$1 = state_54992;
var statearr_55007_56426 = state_54992__$1;
(statearr_55007_56426[(2)] = inst_54988);

(statearr_55007_56426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54993 === (8))){
var inst_54969 = (state_54992[(7)]);
var inst_54979 = cljs.core.next(inst_54969);
var inst_54969__$1 = inst_54979;
var state_54992__$1 = (function (){var statearr_55008 = state_54992;
(statearr_55008[(7)] = inst_54969__$1);

return statearr_55008;
})();
var statearr_55009_56427 = state_54992__$1;
(statearr_55009_56427[(2)] = null);

(statearr_55009_56427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_55010 = [null,null,null,null,null,null,null,null];
(statearr_55010[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_55010[(1)] = (1));

return statearr_55010;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_54992){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_54992);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55011){if((e55011 instanceof Object)){
var ex__54459__auto__ = e55011;
var statearr_55012_56428 = state_54992;
(statearr_55012_56428[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55011;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56429 = state_54992;
state_54992 = G__56429;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_54992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_54992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55013 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55013[(6)] = c__54553__auto__);

return statearr_55013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));

return c__54553__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55014 = (function (ch,cs,meta55015){
this.ch = ch;
this.cs = cs;
this.meta55015 = meta55015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55016,meta55015__$1){
var self__ = this;
var _55016__$1 = this;
return (new cljs.core.async.t_cljs$core$async55014(self__.ch,self__.cs,meta55015__$1));
}));

(cljs.core.async.t_cljs$core$async55014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55016){
var self__ = this;
var _55016__$1 = this;
return self__.meta55015;
}));

(cljs.core.async.t_cljs$core$async55014.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55014.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55014.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async55014.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async55014.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async55014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta55015","meta55015",-1798413034,null)], null);
}));

(cljs.core.async.t_cljs$core$async55014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55014");

(cljs.core.async.t_cljs$core$async55014.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async55014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55014.
 */
cljs.core.async.__GT_t_cljs$core$async55014 = (function cljs$core$async$mult_$___GT_t_cljs$core$async55014(ch__$1,cs__$1,meta55015){
return (new cljs.core.async.t_cljs$core$async55014(ch__$1,cs__$1,meta55015));
});

}

return (new cljs.core.async.t_cljs$core$async55014(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54553__auto___56442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_55151){
var state_val_55152 = (state_55151[(1)]);
if((state_val_55152 === (7))){
var inst_55147 = (state_55151[(2)]);
var state_55151__$1 = state_55151;
var statearr_55153_56443 = state_55151__$1;
(statearr_55153_56443[(2)] = inst_55147);

(statearr_55153_56443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (20))){
var inst_55050 = (state_55151[(7)]);
var inst_55062 = cljs.core.first(inst_55050);
var inst_55063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55062,(0),null);
var inst_55064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55062,(1),null);
var state_55151__$1 = (function (){var statearr_55154 = state_55151;
(statearr_55154[(8)] = inst_55063);

return statearr_55154;
})();
if(cljs.core.truth_(inst_55064)){
var statearr_55155_56444 = state_55151__$1;
(statearr_55155_56444[(1)] = (22));

} else {
var statearr_55156_56445 = state_55151__$1;
(statearr_55156_56445[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (27))){
var inst_55094 = (state_55151[(9)]);
var inst_55099 = (state_55151[(10)]);
var inst_55092 = (state_55151[(11)]);
var inst_55019 = (state_55151[(12)]);
var inst_55099__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_55092,inst_55094);
var inst_55100 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55099__$1,inst_55019,done);
var state_55151__$1 = (function (){var statearr_55157 = state_55151;
(statearr_55157[(10)] = inst_55099__$1);

return statearr_55157;
})();
if(cljs.core.truth_(inst_55100)){
var statearr_55158_56446 = state_55151__$1;
(statearr_55158_56446[(1)] = (30));

} else {
var statearr_55159_56447 = state_55151__$1;
(statearr_55159_56447[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (1))){
var state_55151__$1 = state_55151;
var statearr_55160_56448 = state_55151__$1;
(statearr_55160_56448[(2)] = null);

(statearr_55160_56448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (24))){
var inst_55050 = (state_55151[(7)]);
var inst_55069 = (state_55151[(2)]);
var inst_55070 = cljs.core.next(inst_55050);
var inst_55028 = inst_55070;
var inst_55029 = null;
var inst_55030 = (0);
var inst_55031 = (0);
var state_55151__$1 = (function (){var statearr_55161 = state_55151;
(statearr_55161[(13)] = inst_55028);

(statearr_55161[(14)] = inst_55029);

(statearr_55161[(15)] = inst_55069);

(statearr_55161[(16)] = inst_55030);

(statearr_55161[(17)] = inst_55031);

return statearr_55161;
})();
var statearr_55162_56453 = state_55151__$1;
(statearr_55162_56453[(2)] = null);

(statearr_55162_56453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (39))){
var state_55151__$1 = state_55151;
var statearr_55166_56454 = state_55151__$1;
(statearr_55166_56454[(2)] = null);

(statearr_55166_56454[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (4))){
var inst_55019 = (state_55151[(12)]);
var inst_55019__$1 = (state_55151[(2)]);
var inst_55020 = (inst_55019__$1 == null);
var state_55151__$1 = (function (){var statearr_55167 = state_55151;
(statearr_55167[(12)] = inst_55019__$1);

return statearr_55167;
})();
if(cljs.core.truth_(inst_55020)){
var statearr_55168_56455 = state_55151__$1;
(statearr_55168_56455[(1)] = (5));

} else {
var statearr_55169_56456 = state_55151__$1;
(statearr_55169_56456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (15))){
var inst_55028 = (state_55151[(13)]);
var inst_55029 = (state_55151[(14)]);
var inst_55030 = (state_55151[(16)]);
var inst_55031 = (state_55151[(17)]);
var inst_55046 = (state_55151[(2)]);
var inst_55047 = (inst_55031 + (1));
var tmp55163 = inst_55028;
var tmp55164 = inst_55029;
var tmp55165 = inst_55030;
var inst_55028__$1 = tmp55163;
var inst_55029__$1 = tmp55164;
var inst_55030__$1 = tmp55165;
var inst_55031__$1 = inst_55047;
var state_55151__$1 = (function (){var statearr_55170 = state_55151;
(statearr_55170[(13)] = inst_55028__$1);

(statearr_55170[(14)] = inst_55029__$1);

(statearr_55170[(18)] = inst_55046);

(statearr_55170[(16)] = inst_55030__$1);

(statearr_55170[(17)] = inst_55031__$1);

return statearr_55170;
})();
var statearr_55171_56459 = state_55151__$1;
(statearr_55171_56459[(2)] = null);

(statearr_55171_56459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (21))){
var inst_55073 = (state_55151[(2)]);
var state_55151__$1 = state_55151;
var statearr_55175_56460 = state_55151__$1;
(statearr_55175_56460[(2)] = inst_55073);

(statearr_55175_56460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (31))){
var inst_55099 = (state_55151[(10)]);
var inst_55103 = done(null);
var inst_55104 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55099);
var state_55151__$1 = (function (){var statearr_55176 = state_55151;
(statearr_55176[(19)] = inst_55103);

return statearr_55176;
})();
var statearr_55177_56461 = state_55151__$1;
(statearr_55177_56461[(2)] = inst_55104);

(statearr_55177_56461[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (32))){
var inst_55094 = (state_55151[(9)]);
var inst_55092 = (state_55151[(11)]);
var inst_55093 = (state_55151[(20)]);
var inst_55091 = (state_55151[(21)]);
var inst_55106 = (state_55151[(2)]);
var inst_55107 = (inst_55094 + (1));
var tmp55172 = inst_55092;
var tmp55173 = inst_55093;
var tmp55174 = inst_55091;
var inst_55091__$1 = tmp55174;
var inst_55092__$1 = tmp55172;
var inst_55093__$1 = tmp55173;
var inst_55094__$1 = inst_55107;
var state_55151__$1 = (function (){var statearr_55178 = state_55151;
(statearr_55178[(9)] = inst_55094__$1);

(statearr_55178[(11)] = inst_55092__$1);

(statearr_55178[(20)] = inst_55093__$1);

(statearr_55178[(22)] = inst_55106);

(statearr_55178[(21)] = inst_55091__$1);

return statearr_55178;
})();
var statearr_55179_56464 = state_55151__$1;
(statearr_55179_56464[(2)] = null);

(statearr_55179_56464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (40))){
var inst_55119 = (state_55151[(23)]);
var inst_55123 = done(null);
var inst_55124 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55119);
var state_55151__$1 = (function (){var statearr_55180 = state_55151;
(statearr_55180[(24)] = inst_55123);

return statearr_55180;
})();
var statearr_55181_56465 = state_55151__$1;
(statearr_55181_56465[(2)] = inst_55124);

(statearr_55181_56465[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (33))){
var inst_55110 = (state_55151[(25)]);
var inst_55112 = cljs.core.chunked_seq_QMARK_(inst_55110);
var state_55151__$1 = state_55151;
if(inst_55112){
var statearr_55182_56466 = state_55151__$1;
(statearr_55182_56466[(1)] = (36));

} else {
var statearr_55183_56467 = state_55151__$1;
(statearr_55183_56467[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (13))){
var inst_55040 = (state_55151[(26)]);
var inst_55043 = cljs.core.async.close_BANG_(inst_55040);
var state_55151__$1 = state_55151;
var statearr_55184_56468 = state_55151__$1;
(statearr_55184_56468[(2)] = inst_55043);

(statearr_55184_56468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (22))){
var inst_55063 = (state_55151[(8)]);
var inst_55066 = cljs.core.async.close_BANG_(inst_55063);
var state_55151__$1 = state_55151;
var statearr_55185_56469 = state_55151__$1;
(statearr_55185_56469[(2)] = inst_55066);

(statearr_55185_56469[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (36))){
var inst_55110 = (state_55151[(25)]);
var inst_55114 = cljs.core.chunk_first(inst_55110);
var inst_55115 = cljs.core.chunk_rest(inst_55110);
var inst_55116 = cljs.core.count(inst_55114);
var inst_55091 = inst_55115;
var inst_55092 = inst_55114;
var inst_55093 = inst_55116;
var inst_55094 = (0);
var state_55151__$1 = (function (){var statearr_55186 = state_55151;
(statearr_55186[(9)] = inst_55094);

(statearr_55186[(11)] = inst_55092);

(statearr_55186[(20)] = inst_55093);

(statearr_55186[(21)] = inst_55091);

return statearr_55186;
})();
var statearr_55187_56470 = state_55151__$1;
(statearr_55187_56470[(2)] = null);

(statearr_55187_56470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (41))){
var inst_55110 = (state_55151[(25)]);
var inst_55126 = (state_55151[(2)]);
var inst_55127 = cljs.core.next(inst_55110);
var inst_55091 = inst_55127;
var inst_55092 = null;
var inst_55093 = (0);
var inst_55094 = (0);
var state_55151__$1 = (function (){var statearr_55188 = state_55151;
(statearr_55188[(9)] = inst_55094);

(statearr_55188[(11)] = inst_55092);

(statearr_55188[(20)] = inst_55093);

(statearr_55188[(27)] = inst_55126);

(statearr_55188[(21)] = inst_55091);

return statearr_55188;
})();
var statearr_55189_56472 = state_55151__$1;
(statearr_55189_56472[(2)] = null);

(statearr_55189_56472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (43))){
var state_55151__$1 = state_55151;
var statearr_55190_56473 = state_55151__$1;
(statearr_55190_56473[(2)] = null);

(statearr_55190_56473[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (29))){
var inst_55135 = (state_55151[(2)]);
var state_55151__$1 = state_55151;
var statearr_55191_56474 = state_55151__$1;
(statearr_55191_56474[(2)] = inst_55135);

(statearr_55191_56474[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (44))){
var inst_55144 = (state_55151[(2)]);
var state_55151__$1 = (function (){var statearr_55192 = state_55151;
(statearr_55192[(28)] = inst_55144);

return statearr_55192;
})();
var statearr_55193_56475 = state_55151__$1;
(statearr_55193_56475[(2)] = null);

(statearr_55193_56475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (6))){
var inst_55083 = (state_55151[(29)]);
var inst_55082 = cljs.core.deref(cs);
var inst_55083__$1 = cljs.core.keys(inst_55082);
var inst_55084 = cljs.core.count(inst_55083__$1);
var inst_55085 = cljs.core.reset_BANG_(dctr,inst_55084);
var inst_55090 = cljs.core.seq(inst_55083__$1);
var inst_55091 = inst_55090;
var inst_55092 = null;
var inst_55093 = (0);
var inst_55094 = (0);
var state_55151__$1 = (function (){var statearr_55194 = state_55151;
(statearr_55194[(9)] = inst_55094);

(statearr_55194[(11)] = inst_55092);

(statearr_55194[(29)] = inst_55083__$1);

(statearr_55194[(20)] = inst_55093);

(statearr_55194[(30)] = inst_55085);

(statearr_55194[(21)] = inst_55091);

return statearr_55194;
})();
var statearr_55195_56480 = state_55151__$1;
(statearr_55195_56480[(2)] = null);

(statearr_55195_56480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (28))){
var inst_55110 = (state_55151[(25)]);
var inst_55091 = (state_55151[(21)]);
var inst_55110__$1 = cljs.core.seq(inst_55091);
var state_55151__$1 = (function (){var statearr_55196 = state_55151;
(statearr_55196[(25)] = inst_55110__$1);

return statearr_55196;
})();
if(inst_55110__$1){
var statearr_55197_56481 = state_55151__$1;
(statearr_55197_56481[(1)] = (33));

} else {
var statearr_55198_56482 = state_55151__$1;
(statearr_55198_56482[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (25))){
var inst_55094 = (state_55151[(9)]);
var inst_55093 = (state_55151[(20)]);
var inst_55096 = (inst_55094 < inst_55093);
var inst_55097 = inst_55096;
var state_55151__$1 = state_55151;
if(cljs.core.truth_(inst_55097)){
var statearr_55199_56483 = state_55151__$1;
(statearr_55199_56483[(1)] = (27));

} else {
var statearr_55200_56484 = state_55151__$1;
(statearr_55200_56484[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (34))){
var state_55151__$1 = state_55151;
var statearr_55201_56485 = state_55151__$1;
(statearr_55201_56485[(2)] = null);

(statearr_55201_56485[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (17))){
var state_55151__$1 = state_55151;
var statearr_55202_56486 = state_55151__$1;
(statearr_55202_56486[(2)] = null);

(statearr_55202_56486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (3))){
var inst_55149 = (state_55151[(2)]);
var state_55151__$1 = state_55151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55151__$1,inst_55149);
} else {
if((state_val_55152 === (12))){
var inst_55078 = (state_55151[(2)]);
var state_55151__$1 = state_55151;
var statearr_55203_56494 = state_55151__$1;
(statearr_55203_56494[(2)] = inst_55078);

(statearr_55203_56494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (2))){
var state_55151__$1 = state_55151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55151__$1,(4),ch);
} else {
if((state_val_55152 === (23))){
var state_55151__$1 = state_55151;
var statearr_55204_56495 = state_55151__$1;
(statearr_55204_56495[(2)] = null);

(statearr_55204_56495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (35))){
var inst_55133 = (state_55151[(2)]);
var state_55151__$1 = state_55151;
var statearr_55205_56499 = state_55151__$1;
(statearr_55205_56499[(2)] = inst_55133);

(statearr_55205_56499[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (19))){
var inst_55050 = (state_55151[(7)]);
var inst_55054 = cljs.core.chunk_first(inst_55050);
var inst_55055 = cljs.core.chunk_rest(inst_55050);
var inst_55056 = cljs.core.count(inst_55054);
var inst_55028 = inst_55055;
var inst_55029 = inst_55054;
var inst_55030 = inst_55056;
var inst_55031 = (0);
var state_55151__$1 = (function (){var statearr_55206 = state_55151;
(statearr_55206[(13)] = inst_55028);

(statearr_55206[(14)] = inst_55029);

(statearr_55206[(16)] = inst_55030);

(statearr_55206[(17)] = inst_55031);

return statearr_55206;
})();
var statearr_55207_56503 = state_55151__$1;
(statearr_55207_56503[(2)] = null);

(statearr_55207_56503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (11))){
var inst_55028 = (state_55151[(13)]);
var inst_55050 = (state_55151[(7)]);
var inst_55050__$1 = cljs.core.seq(inst_55028);
var state_55151__$1 = (function (){var statearr_55208 = state_55151;
(statearr_55208[(7)] = inst_55050__$1);

return statearr_55208;
})();
if(inst_55050__$1){
var statearr_55209_56508 = state_55151__$1;
(statearr_55209_56508[(1)] = (16));

} else {
var statearr_55210_56509 = state_55151__$1;
(statearr_55210_56509[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (9))){
var inst_55080 = (state_55151[(2)]);
var state_55151__$1 = state_55151;
var statearr_55211_56513 = state_55151__$1;
(statearr_55211_56513[(2)] = inst_55080);

(statearr_55211_56513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (5))){
var inst_55026 = cljs.core.deref(cs);
var inst_55027 = cljs.core.seq(inst_55026);
var inst_55028 = inst_55027;
var inst_55029 = null;
var inst_55030 = (0);
var inst_55031 = (0);
var state_55151__$1 = (function (){var statearr_55212 = state_55151;
(statearr_55212[(13)] = inst_55028);

(statearr_55212[(14)] = inst_55029);

(statearr_55212[(16)] = inst_55030);

(statearr_55212[(17)] = inst_55031);

return statearr_55212;
})();
var statearr_55213_56514 = state_55151__$1;
(statearr_55213_56514[(2)] = null);

(statearr_55213_56514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (14))){
var state_55151__$1 = state_55151;
var statearr_55214_56515 = state_55151__$1;
(statearr_55214_56515[(2)] = null);

(statearr_55214_56515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (45))){
var inst_55141 = (state_55151[(2)]);
var state_55151__$1 = state_55151;
var statearr_55215_56516 = state_55151__$1;
(statearr_55215_56516[(2)] = inst_55141);

(statearr_55215_56516[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (26))){
var inst_55083 = (state_55151[(29)]);
var inst_55137 = (state_55151[(2)]);
var inst_55138 = cljs.core.seq(inst_55083);
var state_55151__$1 = (function (){var statearr_55216 = state_55151;
(statearr_55216[(31)] = inst_55137);

return statearr_55216;
})();
if(inst_55138){
var statearr_55217_56519 = state_55151__$1;
(statearr_55217_56519[(1)] = (42));

} else {
var statearr_55218_56520 = state_55151__$1;
(statearr_55218_56520[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (16))){
var inst_55050 = (state_55151[(7)]);
var inst_55052 = cljs.core.chunked_seq_QMARK_(inst_55050);
var state_55151__$1 = state_55151;
if(inst_55052){
var statearr_55219_56522 = state_55151__$1;
(statearr_55219_56522[(1)] = (19));

} else {
var statearr_55220_56524 = state_55151__$1;
(statearr_55220_56524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (38))){
var inst_55130 = (state_55151[(2)]);
var state_55151__$1 = state_55151;
var statearr_55221_56525 = state_55151__$1;
(statearr_55221_56525[(2)] = inst_55130);

(statearr_55221_56525[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (30))){
var state_55151__$1 = state_55151;
var statearr_55222_56526 = state_55151__$1;
(statearr_55222_56526[(2)] = null);

(statearr_55222_56526[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (10))){
var inst_55029 = (state_55151[(14)]);
var inst_55031 = (state_55151[(17)]);
var inst_55039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_55029,inst_55031);
var inst_55040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55039,(0),null);
var inst_55041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55039,(1),null);
var state_55151__$1 = (function (){var statearr_55223 = state_55151;
(statearr_55223[(26)] = inst_55040);

return statearr_55223;
})();
if(cljs.core.truth_(inst_55041)){
var statearr_55224_56532 = state_55151__$1;
(statearr_55224_56532[(1)] = (13));

} else {
var statearr_55225_56533 = state_55151__$1;
(statearr_55225_56533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (18))){
var inst_55076 = (state_55151[(2)]);
var state_55151__$1 = state_55151;
var statearr_55226_56534 = state_55151__$1;
(statearr_55226_56534[(2)] = inst_55076);

(statearr_55226_56534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (42))){
var state_55151__$1 = state_55151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55151__$1,(45),dchan);
} else {
if((state_val_55152 === (37))){
var inst_55110 = (state_55151[(25)]);
var inst_55019 = (state_55151[(12)]);
var inst_55119 = (state_55151[(23)]);
var inst_55119__$1 = cljs.core.first(inst_55110);
var inst_55120 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55119__$1,inst_55019,done);
var state_55151__$1 = (function (){var statearr_55227 = state_55151;
(statearr_55227[(23)] = inst_55119__$1);

return statearr_55227;
})();
if(cljs.core.truth_(inst_55120)){
var statearr_55228_56538 = state_55151__$1;
(statearr_55228_56538[(1)] = (39));

} else {
var statearr_55229_56539 = state_55151__$1;
(statearr_55229_56539[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55152 === (8))){
var inst_55030 = (state_55151[(16)]);
var inst_55031 = (state_55151[(17)]);
var inst_55033 = (inst_55031 < inst_55030);
var inst_55034 = inst_55033;
var state_55151__$1 = state_55151;
if(cljs.core.truth_(inst_55034)){
var statearr_55230_56540 = state_55151__$1;
(statearr_55230_56540[(1)] = (10));

} else {
var statearr_55231_56541 = state_55151__$1;
(statearr_55231_56541[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__54456__auto__ = null;
var cljs$core$async$mult_$_state_machine__54456__auto____0 = (function (){
var statearr_55232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55232[(0)] = cljs$core$async$mult_$_state_machine__54456__auto__);

(statearr_55232[(1)] = (1));

return statearr_55232;
});
var cljs$core$async$mult_$_state_machine__54456__auto____1 = (function (state_55151){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_55151);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55233){if((e55233 instanceof Object)){
var ex__54459__auto__ = e55233;
var statearr_55234_56542 = state_55151;
(statearr_55234_56542[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56543 = state_55151;
state_55151 = G__56543;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54456__auto__ = function(state_55151){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54456__auto____1.call(this,state_55151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54456__auto____0;
cljs$core$async$mult_$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54456__auto____1;
return cljs$core$async$mult_$_state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55235 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55235[(6)] = c__54553__auto___56442);

return statearr_55235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__55237 = arguments.length;
switch (G__55237) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56559 = arguments.length;
var i__4790__auto___56560 = (0);
while(true){
if((i__4790__auto___56560 < len__4789__auto___56559)){
args__4795__auto__.push((arguments[i__4790__auto___56560]));

var G__56561 = (i__4790__auto___56560 + (1));
i__4790__auto___56560 = G__56561;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55242){
var map__55243 = p__55242;
var map__55243__$1 = (((((!((map__55243 == null))))?(((((map__55243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55243):map__55243);
var opts = map__55243__$1;
var statearr_55245_56563 = state;
(statearr_55245_56563[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_55246_56564 = state;
(statearr_55246_56564[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_55247_56565 = state;
(statearr_55247_56565[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55238){
var G__55239 = cljs.core.first(seq55238);
var seq55238__$1 = cljs.core.next(seq55238);
var G__55240 = cljs.core.first(seq55238__$1);
var seq55238__$2 = cljs.core.next(seq55238__$1);
var G__55241 = cljs.core.first(seq55238__$2);
var seq55238__$3 = cljs.core.next(seq55238__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55239,G__55240,G__55241,seq55238__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55248 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55249){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55249 = meta55249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55250,meta55249__$1){
var self__ = this;
var _55250__$1 = this;
return (new cljs.core.async.t_cljs$core$async55248(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55249__$1));
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55250){
var self__ = this;
var _55250__$1 = this;
return self__.meta55249;
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55249","meta55249",-482684475,null)], null);
}));

(cljs.core.async.t_cljs$core$async55248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55248");

(cljs.core.async.t_cljs$core$async55248.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async55248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55248.
 */
cljs.core.async.__GT_t_cljs$core$async55248 = (function cljs$core$async$mix_$___GT_t_cljs$core$async55248(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55249){
return (new cljs.core.async.t_cljs$core$async55248(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55249));
});

}

return (new cljs.core.async.t_cljs$core$async55248(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54553__auto___56583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_55352){
var state_val_55353 = (state_55352[(1)]);
if((state_val_55353 === (7))){
var inst_55267 = (state_55352[(2)]);
var state_55352__$1 = state_55352;
var statearr_55354_56584 = state_55352__$1;
(statearr_55354_56584[(2)] = inst_55267);

(statearr_55354_56584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (20))){
var inst_55279 = (state_55352[(7)]);
var state_55352__$1 = state_55352;
var statearr_55355_56589 = state_55352__$1;
(statearr_55355_56589[(2)] = inst_55279);

(statearr_55355_56589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (27))){
var state_55352__$1 = state_55352;
var statearr_55356_56590 = state_55352__$1;
(statearr_55356_56590[(2)] = null);

(statearr_55356_56590[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (1))){
var inst_55254 = (state_55352[(8)]);
var inst_55254__$1 = calc_state();
var inst_55256 = (inst_55254__$1 == null);
var inst_55257 = cljs.core.not(inst_55256);
var state_55352__$1 = (function (){var statearr_55357 = state_55352;
(statearr_55357[(8)] = inst_55254__$1);

return statearr_55357;
})();
if(inst_55257){
var statearr_55358_56591 = state_55352__$1;
(statearr_55358_56591[(1)] = (2));

} else {
var statearr_55359_56592 = state_55352__$1;
(statearr_55359_56592[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (24))){
var inst_55326 = (state_55352[(9)]);
var inst_55312 = (state_55352[(10)]);
var inst_55303 = (state_55352[(11)]);
var inst_55326__$1 = (inst_55303.cljs$core$IFn$_invoke$arity$1 ? inst_55303.cljs$core$IFn$_invoke$arity$1(inst_55312) : inst_55303.call(null,inst_55312));
var state_55352__$1 = (function (){var statearr_55360 = state_55352;
(statearr_55360[(9)] = inst_55326__$1);

return statearr_55360;
})();
if(cljs.core.truth_(inst_55326__$1)){
var statearr_55361_56593 = state_55352__$1;
(statearr_55361_56593[(1)] = (29));

} else {
var statearr_55362_56594 = state_55352__$1;
(statearr_55362_56594[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (4))){
var inst_55270 = (state_55352[(2)]);
var state_55352__$1 = state_55352;
if(cljs.core.truth_(inst_55270)){
var statearr_55363_56595 = state_55352__$1;
(statearr_55363_56595[(1)] = (8));

} else {
var statearr_55364_56596 = state_55352__$1;
(statearr_55364_56596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (15))){
var inst_55297 = (state_55352[(2)]);
var state_55352__$1 = state_55352;
if(cljs.core.truth_(inst_55297)){
var statearr_55365_56598 = state_55352__$1;
(statearr_55365_56598[(1)] = (19));

} else {
var statearr_55366_56599 = state_55352__$1;
(statearr_55366_56599[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (21))){
var inst_55302 = (state_55352[(12)]);
var inst_55302__$1 = (state_55352[(2)]);
var inst_55303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55302__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55302__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55302__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55352__$1 = (function (){var statearr_55367 = state_55352;
(statearr_55367[(11)] = inst_55303);

(statearr_55367[(13)] = inst_55304);

(statearr_55367[(12)] = inst_55302__$1);

return statearr_55367;
})();
return cljs.core.async.ioc_alts_BANG_(state_55352__$1,(22),inst_55305);
} else {
if((state_val_55353 === (31))){
var inst_55334 = (state_55352[(2)]);
var state_55352__$1 = state_55352;
if(cljs.core.truth_(inst_55334)){
var statearr_55368_56600 = state_55352__$1;
(statearr_55368_56600[(1)] = (32));

} else {
var statearr_55369_56604 = state_55352__$1;
(statearr_55369_56604[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (32))){
var inst_55311 = (state_55352[(14)]);
var state_55352__$1 = state_55352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55352__$1,(35),out,inst_55311);
} else {
if((state_val_55353 === (33))){
var inst_55302 = (state_55352[(12)]);
var inst_55279 = inst_55302;
var state_55352__$1 = (function (){var statearr_55370 = state_55352;
(statearr_55370[(7)] = inst_55279);

return statearr_55370;
})();
var statearr_55371_56609 = state_55352__$1;
(statearr_55371_56609[(2)] = null);

(statearr_55371_56609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (13))){
var inst_55279 = (state_55352[(7)]);
var inst_55286 = inst_55279.cljs$lang$protocol_mask$partition0$;
var inst_55287 = (inst_55286 & (64));
var inst_55288 = inst_55279.cljs$core$ISeq$;
var inst_55289 = (cljs.core.PROTOCOL_SENTINEL === inst_55288);
var inst_55290 = ((inst_55287) || (inst_55289));
var state_55352__$1 = state_55352;
if(cljs.core.truth_(inst_55290)){
var statearr_55372_56610 = state_55352__$1;
(statearr_55372_56610[(1)] = (16));

} else {
var statearr_55373_56611 = state_55352__$1;
(statearr_55373_56611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (22))){
var inst_55311 = (state_55352[(14)]);
var inst_55312 = (state_55352[(10)]);
var inst_55310 = (state_55352[(2)]);
var inst_55311__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55310,(0),null);
var inst_55312__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55310,(1),null);
var inst_55313 = (inst_55311__$1 == null);
var inst_55314 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55312__$1,change);
var inst_55315 = ((inst_55313) || (inst_55314));
var state_55352__$1 = (function (){var statearr_55374 = state_55352;
(statearr_55374[(14)] = inst_55311__$1);

(statearr_55374[(10)] = inst_55312__$1);

return statearr_55374;
})();
if(cljs.core.truth_(inst_55315)){
var statearr_55375_56612 = state_55352__$1;
(statearr_55375_56612[(1)] = (23));

} else {
var statearr_55376_56613 = state_55352__$1;
(statearr_55376_56613[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (36))){
var inst_55302 = (state_55352[(12)]);
var inst_55279 = inst_55302;
var state_55352__$1 = (function (){var statearr_55377 = state_55352;
(statearr_55377[(7)] = inst_55279);

return statearr_55377;
})();
var statearr_55378_56614 = state_55352__$1;
(statearr_55378_56614[(2)] = null);

(statearr_55378_56614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (29))){
var inst_55326 = (state_55352[(9)]);
var state_55352__$1 = state_55352;
var statearr_55379_56616 = state_55352__$1;
(statearr_55379_56616[(2)] = inst_55326);

(statearr_55379_56616[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (6))){
var state_55352__$1 = state_55352;
var statearr_55380_56617 = state_55352__$1;
(statearr_55380_56617[(2)] = false);

(statearr_55380_56617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (28))){
var inst_55322 = (state_55352[(2)]);
var inst_55323 = calc_state();
var inst_55279 = inst_55323;
var state_55352__$1 = (function (){var statearr_55381 = state_55352;
(statearr_55381[(7)] = inst_55279);

(statearr_55381[(15)] = inst_55322);

return statearr_55381;
})();
var statearr_55382_56618 = state_55352__$1;
(statearr_55382_56618[(2)] = null);

(statearr_55382_56618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (25))){
var inst_55348 = (state_55352[(2)]);
var state_55352__$1 = state_55352;
var statearr_55383_56620 = state_55352__$1;
(statearr_55383_56620[(2)] = inst_55348);

(statearr_55383_56620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (34))){
var inst_55346 = (state_55352[(2)]);
var state_55352__$1 = state_55352;
var statearr_55384_56621 = state_55352__$1;
(statearr_55384_56621[(2)] = inst_55346);

(statearr_55384_56621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (17))){
var state_55352__$1 = state_55352;
var statearr_55385_56622 = state_55352__$1;
(statearr_55385_56622[(2)] = false);

(statearr_55385_56622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (3))){
var state_55352__$1 = state_55352;
var statearr_55386_56623 = state_55352__$1;
(statearr_55386_56623[(2)] = false);

(statearr_55386_56623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (12))){
var inst_55350 = (state_55352[(2)]);
var state_55352__$1 = state_55352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55352__$1,inst_55350);
} else {
if((state_val_55353 === (2))){
var inst_55254 = (state_55352[(8)]);
var inst_55259 = inst_55254.cljs$lang$protocol_mask$partition0$;
var inst_55260 = (inst_55259 & (64));
var inst_55261 = inst_55254.cljs$core$ISeq$;
var inst_55262 = (cljs.core.PROTOCOL_SENTINEL === inst_55261);
var inst_55263 = ((inst_55260) || (inst_55262));
var state_55352__$1 = state_55352;
if(cljs.core.truth_(inst_55263)){
var statearr_55387_56624 = state_55352__$1;
(statearr_55387_56624[(1)] = (5));

} else {
var statearr_55388_56625 = state_55352__$1;
(statearr_55388_56625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (23))){
var inst_55311 = (state_55352[(14)]);
var inst_55317 = (inst_55311 == null);
var state_55352__$1 = state_55352;
if(cljs.core.truth_(inst_55317)){
var statearr_55389_56626 = state_55352__$1;
(statearr_55389_56626[(1)] = (26));

} else {
var statearr_55390_56627 = state_55352__$1;
(statearr_55390_56627[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (35))){
var inst_55337 = (state_55352[(2)]);
var state_55352__$1 = state_55352;
if(cljs.core.truth_(inst_55337)){
var statearr_55391_56628 = state_55352__$1;
(statearr_55391_56628[(1)] = (36));

} else {
var statearr_55392_56629 = state_55352__$1;
(statearr_55392_56629[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (19))){
var inst_55279 = (state_55352[(7)]);
var inst_55299 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55279);
var state_55352__$1 = state_55352;
var statearr_55393_56630 = state_55352__$1;
(statearr_55393_56630[(2)] = inst_55299);

(statearr_55393_56630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (11))){
var inst_55279 = (state_55352[(7)]);
var inst_55283 = (inst_55279 == null);
var inst_55284 = cljs.core.not(inst_55283);
var state_55352__$1 = state_55352;
if(inst_55284){
var statearr_55394_56631 = state_55352__$1;
(statearr_55394_56631[(1)] = (13));

} else {
var statearr_55395_56632 = state_55352__$1;
(statearr_55395_56632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (9))){
var inst_55254 = (state_55352[(8)]);
var state_55352__$1 = state_55352;
var statearr_55396_56637 = state_55352__$1;
(statearr_55396_56637[(2)] = inst_55254);

(statearr_55396_56637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (5))){
var state_55352__$1 = state_55352;
var statearr_55397_56638 = state_55352__$1;
(statearr_55397_56638[(2)] = true);

(statearr_55397_56638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (14))){
var state_55352__$1 = state_55352;
var statearr_55398_56640 = state_55352__$1;
(statearr_55398_56640[(2)] = false);

(statearr_55398_56640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (26))){
var inst_55312 = (state_55352[(10)]);
var inst_55319 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_55312);
var state_55352__$1 = state_55352;
var statearr_55399_56644 = state_55352__$1;
(statearr_55399_56644[(2)] = inst_55319);

(statearr_55399_56644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (16))){
var state_55352__$1 = state_55352;
var statearr_55400_56645 = state_55352__$1;
(statearr_55400_56645[(2)] = true);

(statearr_55400_56645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (38))){
var inst_55342 = (state_55352[(2)]);
var state_55352__$1 = state_55352;
var statearr_55401_56646 = state_55352__$1;
(statearr_55401_56646[(2)] = inst_55342);

(statearr_55401_56646[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (30))){
var inst_55312 = (state_55352[(10)]);
var inst_55303 = (state_55352[(11)]);
var inst_55304 = (state_55352[(13)]);
var inst_55329 = cljs.core.empty_QMARK_(inst_55303);
var inst_55330 = (inst_55304.cljs$core$IFn$_invoke$arity$1 ? inst_55304.cljs$core$IFn$_invoke$arity$1(inst_55312) : inst_55304.call(null,inst_55312));
var inst_55331 = cljs.core.not(inst_55330);
var inst_55332 = ((inst_55329) && (inst_55331));
var state_55352__$1 = state_55352;
var statearr_55402_56649 = state_55352__$1;
(statearr_55402_56649[(2)] = inst_55332);

(statearr_55402_56649[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (10))){
var inst_55254 = (state_55352[(8)]);
var inst_55275 = (state_55352[(2)]);
var inst_55276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55275,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55275,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55275,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55279 = inst_55254;
var state_55352__$1 = (function (){var statearr_55403 = state_55352;
(statearr_55403[(16)] = inst_55277);

(statearr_55403[(7)] = inst_55279);

(statearr_55403[(17)] = inst_55276);

(statearr_55403[(18)] = inst_55278);

return statearr_55403;
})();
var statearr_55404_56650 = state_55352__$1;
(statearr_55404_56650[(2)] = null);

(statearr_55404_56650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (18))){
var inst_55294 = (state_55352[(2)]);
var state_55352__$1 = state_55352;
var statearr_55405_56651 = state_55352__$1;
(statearr_55405_56651[(2)] = inst_55294);

(statearr_55405_56651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (37))){
var state_55352__$1 = state_55352;
var statearr_55406_56652 = state_55352__$1;
(statearr_55406_56652[(2)] = null);

(statearr_55406_56652[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55353 === (8))){
var inst_55254 = (state_55352[(8)]);
var inst_55272 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55254);
var state_55352__$1 = state_55352;
var statearr_55407_56653 = state_55352__$1;
(statearr_55407_56653[(2)] = inst_55272);

(statearr_55407_56653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__54456__auto__ = null;
var cljs$core$async$mix_$_state_machine__54456__auto____0 = (function (){
var statearr_55408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55408[(0)] = cljs$core$async$mix_$_state_machine__54456__auto__);

(statearr_55408[(1)] = (1));

return statearr_55408;
});
var cljs$core$async$mix_$_state_machine__54456__auto____1 = (function (state_55352){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_55352);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55409){if((e55409 instanceof Object)){
var ex__54459__auto__ = e55409;
var statearr_55410_56656 = state_55352;
(statearr_55410_56656[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55409;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56657 = state_55352;
state_55352 = G__56657;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54456__auto__ = function(state_55352){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54456__auto____1.call(this,state_55352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54456__auto____0;
cljs$core$async$mix_$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54456__auto____1;
return cljs$core$async$mix_$_state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55411 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55411[(6)] = c__54553__auto___56583);

return statearr_55411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55413 = arguments.length;
switch (G__55413) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__55416 = arguments.length;
switch (G__55416) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55414_SHARP_){
if(cljs.core.truth_((p1__55414_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55414_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55414_SHARP_.call(null,topic)))){
return p1__55414_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55414_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55417 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55418){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55418 = meta55418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55419,meta55418__$1){
var self__ = this;
var _55419__$1 = this;
return (new cljs.core.async.t_cljs$core$async55417(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55418__$1));
}));

(cljs.core.async.t_cljs$core$async55417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55419){
var self__ = this;
var _55419__$1 = this;
return self__.meta55418;
}));

(cljs.core.async.t_cljs$core$async55417.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55417.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55417.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55417.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async55417.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55417.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55418","meta55418",-556496437,null)], null);
}));

(cljs.core.async.t_cljs$core$async55417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55417");

(cljs.core.async.t_cljs$core$async55417.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async55417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55417.
 */
cljs.core.async.__GT_t_cljs$core$async55417 = (function cljs$core$async$__GT_t_cljs$core$async55417(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55418){
return (new cljs.core.async.t_cljs$core$async55417(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55418));
});

}

return (new cljs.core.async.t_cljs$core$async55417(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54553__auto___56684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_55491){
var state_val_55492 = (state_55491[(1)]);
if((state_val_55492 === (7))){
var inst_55487 = (state_55491[(2)]);
var state_55491__$1 = state_55491;
var statearr_55493_56686 = state_55491__$1;
(statearr_55493_56686[(2)] = inst_55487);

(statearr_55493_56686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (20))){
var state_55491__$1 = state_55491;
var statearr_55494_56687 = state_55491__$1;
(statearr_55494_56687[(2)] = null);

(statearr_55494_56687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (1))){
var state_55491__$1 = state_55491;
var statearr_55495_56688 = state_55491__$1;
(statearr_55495_56688[(2)] = null);

(statearr_55495_56688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (24))){
var inst_55470 = (state_55491[(7)]);
var inst_55479 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55470);
var state_55491__$1 = state_55491;
var statearr_55496_56689 = state_55491__$1;
(statearr_55496_56689[(2)] = inst_55479);

(statearr_55496_56689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (4))){
var inst_55422 = (state_55491[(8)]);
var inst_55422__$1 = (state_55491[(2)]);
var inst_55423 = (inst_55422__$1 == null);
var state_55491__$1 = (function (){var statearr_55497 = state_55491;
(statearr_55497[(8)] = inst_55422__$1);

return statearr_55497;
})();
if(cljs.core.truth_(inst_55423)){
var statearr_55498_56699 = state_55491__$1;
(statearr_55498_56699[(1)] = (5));

} else {
var statearr_55499_56700 = state_55491__$1;
(statearr_55499_56700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (15))){
var inst_55464 = (state_55491[(2)]);
var state_55491__$1 = state_55491;
var statearr_55500_56701 = state_55491__$1;
(statearr_55500_56701[(2)] = inst_55464);

(statearr_55500_56701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (21))){
var inst_55484 = (state_55491[(2)]);
var state_55491__$1 = (function (){var statearr_55501 = state_55491;
(statearr_55501[(9)] = inst_55484);

return statearr_55501;
})();
var statearr_55502_56708 = state_55491__$1;
(statearr_55502_56708[(2)] = null);

(statearr_55502_56708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (13))){
var inst_55446 = (state_55491[(10)]);
var inst_55448 = cljs.core.chunked_seq_QMARK_(inst_55446);
var state_55491__$1 = state_55491;
if(inst_55448){
var statearr_55503_56709 = state_55491__$1;
(statearr_55503_56709[(1)] = (16));

} else {
var statearr_55504_56710 = state_55491__$1;
(statearr_55504_56710[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (22))){
var inst_55476 = (state_55491[(2)]);
var state_55491__$1 = state_55491;
if(cljs.core.truth_(inst_55476)){
var statearr_55505_56711 = state_55491__$1;
(statearr_55505_56711[(1)] = (23));

} else {
var statearr_55506_56712 = state_55491__$1;
(statearr_55506_56712[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (6))){
var inst_55422 = (state_55491[(8)]);
var inst_55470 = (state_55491[(7)]);
var inst_55472 = (state_55491[(11)]);
var inst_55470__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55422) : topic_fn.call(null,inst_55422));
var inst_55471 = cljs.core.deref(mults);
var inst_55472__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55471,inst_55470__$1);
var state_55491__$1 = (function (){var statearr_55507 = state_55491;
(statearr_55507[(7)] = inst_55470__$1);

(statearr_55507[(11)] = inst_55472__$1);

return statearr_55507;
})();
if(cljs.core.truth_(inst_55472__$1)){
var statearr_55508_56713 = state_55491__$1;
(statearr_55508_56713[(1)] = (19));

} else {
var statearr_55509_56714 = state_55491__$1;
(statearr_55509_56714[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (25))){
var inst_55481 = (state_55491[(2)]);
var state_55491__$1 = state_55491;
var statearr_55510_56715 = state_55491__$1;
(statearr_55510_56715[(2)] = inst_55481);

(statearr_55510_56715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (17))){
var inst_55446 = (state_55491[(10)]);
var inst_55455 = cljs.core.first(inst_55446);
var inst_55456 = cljs.core.async.muxch_STAR_(inst_55455);
var inst_55457 = cljs.core.async.close_BANG_(inst_55456);
var inst_55458 = cljs.core.next(inst_55446);
var inst_55432 = inst_55458;
var inst_55433 = null;
var inst_55434 = (0);
var inst_55435 = (0);
var state_55491__$1 = (function (){var statearr_55511 = state_55491;
(statearr_55511[(12)] = inst_55435);

(statearr_55511[(13)] = inst_55457);

(statearr_55511[(14)] = inst_55434);

(statearr_55511[(15)] = inst_55433);

(statearr_55511[(16)] = inst_55432);

return statearr_55511;
})();
var statearr_55512_56716 = state_55491__$1;
(statearr_55512_56716[(2)] = null);

(statearr_55512_56716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (3))){
var inst_55489 = (state_55491[(2)]);
var state_55491__$1 = state_55491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55491__$1,inst_55489);
} else {
if((state_val_55492 === (12))){
var inst_55466 = (state_55491[(2)]);
var state_55491__$1 = state_55491;
var statearr_55513_56723 = state_55491__$1;
(statearr_55513_56723[(2)] = inst_55466);

(statearr_55513_56723[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (2))){
var state_55491__$1 = state_55491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55491__$1,(4),ch);
} else {
if((state_val_55492 === (23))){
var state_55491__$1 = state_55491;
var statearr_55514_56724 = state_55491__$1;
(statearr_55514_56724[(2)] = null);

(statearr_55514_56724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (19))){
var inst_55422 = (state_55491[(8)]);
var inst_55472 = (state_55491[(11)]);
var inst_55474 = cljs.core.async.muxch_STAR_(inst_55472);
var state_55491__$1 = state_55491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55491__$1,(22),inst_55474,inst_55422);
} else {
if((state_val_55492 === (11))){
var inst_55446 = (state_55491[(10)]);
var inst_55432 = (state_55491[(16)]);
var inst_55446__$1 = cljs.core.seq(inst_55432);
var state_55491__$1 = (function (){var statearr_55515 = state_55491;
(statearr_55515[(10)] = inst_55446__$1);

return statearr_55515;
})();
if(inst_55446__$1){
var statearr_55516_56725 = state_55491__$1;
(statearr_55516_56725[(1)] = (13));

} else {
var statearr_55517_56726 = state_55491__$1;
(statearr_55517_56726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (9))){
var inst_55468 = (state_55491[(2)]);
var state_55491__$1 = state_55491;
var statearr_55518_56727 = state_55491__$1;
(statearr_55518_56727[(2)] = inst_55468);

(statearr_55518_56727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (5))){
var inst_55429 = cljs.core.deref(mults);
var inst_55430 = cljs.core.vals(inst_55429);
var inst_55431 = cljs.core.seq(inst_55430);
var inst_55432 = inst_55431;
var inst_55433 = null;
var inst_55434 = (0);
var inst_55435 = (0);
var state_55491__$1 = (function (){var statearr_55519 = state_55491;
(statearr_55519[(12)] = inst_55435);

(statearr_55519[(14)] = inst_55434);

(statearr_55519[(15)] = inst_55433);

(statearr_55519[(16)] = inst_55432);

return statearr_55519;
})();
var statearr_55520_56734 = state_55491__$1;
(statearr_55520_56734[(2)] = null);

(statearr_55520_56734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (14))){
var state_55491__$1 = state_55491;
var statearr_55524_56735 = state_55491__$1;
(statearr_55524_56735[(2)] = null);

(statearr_55524_56735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (16))){
var inst_55446 = (state_55491[(10)]);
var inst_55450 = cljs.core.chunk_first(inst_55446);
var inst_55451 = cljs.core.chunk_rest(inst_55446);
var inst_55452 = cljs.core.count(inst_55450);
var inst_55432 = inst_55451;
var inst_55433 = inst_55450;
var inst_55434 = inst_55452;
var inst_55435 = (0);
var state_55491__$1 = (function (){var statearr_55525 = state_55491;
(statearr_55525[(12)] = inst_55435);

(statearr_55525[(14)] = inst_55434);

(statearr_55525[(15)] = inst_55433);

(statearr_55525[(16)] = inst_55432);

return statearr_55525;
})();
var statearr_55526_56736 = state_55491__$1;
(statearr_55526_56736[(2)] = null);

(statearr_55526_56736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (10))){
var inst_55435 = (state_55491[(12)]);
var inst_55434 = (state_55491[(14)]);
var inst_55433 = (state_55491[(15)]);
var inst_55432 = (state_55491[(16)]);
var inst_55440 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_55433,inst_55435);
var inst_55441 = cljs.core.async.muxch_STAR_(inst_55440);
var inst_55442 = cljs.core.async.close_BANG_(inst_55441);
var inst_55443 = (inst_55435 + (1));
var tmp55521 = inst_55434;
var tmp55522 = inst_55433;
var tmp55523 = inst_55432;
var inst_55432__$1 = tmp55523;
var inst_55433__$1 = tmp55522;
var inst_55434__$1 = tmp55521;
var inst_55435__$1 = inst_55443;
var state_55491__$1 = (function (){var statearr_55527 = state_55491;
(statearr_55527[(12)] = inst_55435__$1);

(statearr_55527[(17)] = inst_55442);

(statearr_55527[(14)] = inst_55434__$1);

(statearr_55527[(15)] = inst_55433__$1);

(statearr_55527[(16)] = inst_55432__$1);

return statearr_55527;
})();
var statearr_55528_56737 = state_55491__$1;
(statearr_55528_56737[(2)] = null);

(statearr_55528_56737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (18))){
var inst_55461 = (state_55491[(2)]);
var state_55491__$1 = state_55491;
var statearr_55529_56738 = state_55491__$1;
(statearr_55529_56738[(2)] = inst_55461);

(statearr_55529_56738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55492 === (8))){
var inst_55435 = (state_55491[(12)]);
var inst_55434 = (state_55491[(14)]);
var inst_55437 = (inst_55435 < inst_55434);
var inst_55438 = inst_55437;
var state_55491__$1 = state_55491;
if(cljs.core.truth_(inst_55438)){
var statearr_55530_56745 = state_55491__$1;
(statearr_55530_56745[(1)] = (10));

} else {
var statearr_55531_56746 = state_55491__$1;
(statearr_55531_56746[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_55532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55532[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_55532[(1)] = (1));

return statearr_55532;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_55491){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_55491);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55533){if((e55533 instanceof Object)){
var ex__54459__auto__ = e55533;
var statearr_55534_56747 = state_55491;
(statearr_55534_56747[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56748 = state_55491;
state_55491 = G__56748;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_55491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_55491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55535 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55535[(6)] = c__54553__auto___56684);

return statearr_55535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__55537 = arguments.length;
switch (G__55537) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__55539 = arguments.length;
switch (G__55539) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__55541 = arguments.length;
switch (G__55541) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__54553__auto___56760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_55580){
var state_val_55581 = (state_55580[(1)]);
if((state_val_55581 === (7))){
var state_55580__$1 = state_55580;
var statearr_55582_56761 = state_55580__$1;
(statearr_55582_56761[(2)] = null);

(statearr_55582_56761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (1))){
var state_55580__$1 = state_55580;
var statearr_55583_56762 = state_55580__$1;
(statearr_55583_56762[(2)] = null);

(statearr_55583_56762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (4))){
var inst_55544 = (state_55580[(7)]);
var inst_55546 = (inst_55544 < cnt);
var state_55580__$1 = state_55580;
if(cljs.core.truth_(inst_55546)){
var statearr_55584_56763 = state_55580__$1;
(statearr_55584_56763[(1)] = (6));

} else {
var statearr_55585_56764 = state_55580__$1;
(statearr_55585_56764[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (15))){
var inst_55576 = (state_55580[(2)]);
var state_55580__$1 = state_55580;
var statearr_55586_56765 = state_55580__$1;
(statearr_55586_56765[(2)] = inst_55576);

(statearr_55586_56765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (13))){
var inst_55569 = cljs.core.async.close_BANG_(out);
var state_55580__$1 = state_55580;
var statearr_55587_56766 = state_55580__$1;
(statearr_55587_56766[(2)] = inst_55569);

(statearr_55587_56766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (6))){
var state_55580__$1 = state_55580;
var statearr_55588_56767 = state_55580__$1;
(statearr_55588_56767[(2)] = null);

(statearr_55588_56767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (3))){
var inst_55578 = (state_55580[(2)]);
var state_55580__$1 = state_55580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55580__$1,inst_55578);
} else {
if((state_val_55581 === (12))){
var inst_55566 = (state_55580[(8)]);
var inst_55566__$1 = (state_55580[(2)]);
var inst_55567 = cljs.core.some(cljs.core.nil_QMARK_,inst_55566__$1);
var state_55580__$1 = (function (){var statearr_55589 = state_55580;
(statearr_55589[(8)] = inst_55566__$1);

return statearr_55589;
})();
if(cljs.core.truth_(inst_55567)){
var statearr_55590_56770 = state_55580__$1;
(statearr_55590_56770[(1)] = (13));

} else {
var statearr_55591_56771 = state_55580__$1;
(statearr_55591_56771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (2))){
var inst_55543 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55544 = (0);
var state_55580__$1 = (function (){var statearr_55592 = state_55580;
(statearr_55592[(7)] = inst_55544);

(statearr_55592[(9)] = inst_55543);

return statearr_55592;
})();
var statearr_55593_56772 = state_55580__$1;
(statearr_55593_56772[(2)] = null);

(statearr_55593_56772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (11))){
var inst_55544 = (state_55580[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55580,(10),Object,null,(9));
var inst_55553 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55544) : chs__$1.call(null,inst_55544));
var inst_55554 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55544) : done.call(null,inst_55544));
var inst_55555 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55553,inst_55554);
var state_55580__$1 = state_55580;
var statearr_55594_56773 = state_55580__$1;
(statearr_55594_56773[(2)] = inst_55555);


cljs.core.async.impl.ioc_helpers.process_exception(state_55580__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (9))){
var inst_55544 = (state_55580[(7)]);
var inst_55557 = (state_55580[(2)]);
var inst_55558 = (inst_55544 + (1));
var inst_55544__$1 = inst_55558;
var state_55580__$1 = (function (){var statearr_55595 = state_55580;
(statearr_55595[(7)] = inst_55544__$1);

(statearr_55595[(10)] = inst_55557);

return statearr_55595;
})();
var statearr_55596_56774 = state_55580__$1;
(statearr_55596_56774[(2)] = null);

(statearr_55596_56774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (5))){
var inst_55564 = (state_55580[(2)]);
var state_55580__$1 = (function (){var statearr_55597 = state_55580;
(statearr_55597[(11)] = inst_55564);

return statearr_55597;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55580__$1,(12),dchan);
} else {
if((state_val_55581 === (14))){
var inst_55566 = (state_55580[(8)]);
var inst_55571 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55566);
var state_55580__$1 = state_55580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55580__$1,(16),out,inst_55571);
} else {
if((state_val_55581 === (16))){
var inst_55573 = (state_55580[(2)]);
var state_55580__$1 = (function (){var statearr_55598 = state_55580;
(statearr_55598[(12)] = inst_55573);

return statearr_55598;
})();
var statearr_55599_56784 = state_55580__$1;
(statearr_55599_56784[(2)] = null);

(statearr_55599_56784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (10))){
var inst_55548 = (state_55580[(2)]);
var inst_55549 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55580__$1 = (function (){var statearr_55600 = state_55580;
(statearr_55600[(13)] = inst_55548);

return statearr_55600;
})();
var statearr_55601_56785 = state_55580__$1;
(statearr_55601_56785[(2)] = inst_55549);


cljs.core.async.impl.ioc_helpers.process_exception(state_55580__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55581 === (8))){
var inst_55562 = (state_55580[(2)]);
var state_55580__$1 = state_55580;
var statearr_55602_56787 = state_55580__$1;
(statearr_55602_56787[(2)] = inst_55562);

(statearr_55602_56787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_55603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55603[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_55603[(1)] = (1));

return statearr_55603;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_55580){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_55580);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55604){if((e55604 instanceof Object)){
var ex__54459__auto__ = e55604;
var statearr_55605_56791 = state_55580;
(statearr_55605_56791[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56793 = state_55580;
state_55580 = G__56793;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_55580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_55580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55606 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55606[(6)] = c__54553__auto___56760);

return statearr_55606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__55609 = arguments.length;
switch (G__55609) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54553__auto___56795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_55641){
var state_val_55642 = (state_55641[(1)]);
if((state_val_55642 === (7))){
var inst_55620 = (state_55641[(7)]);
var inst_55621 = (state_55641[(8)]);
var inst_55620__$1 = (state_55641[(2)]);
var inst_55621__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55620__$1,(0),null);
var inst_55622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55620__$1,(1),null);
var inst_55623 = (inst_55621__$1 == null);
var state_55641__$1 = (function (){var statearr_55643 = state_55641;
(statearr_55643[(7)] = inst_55620__$1);

(statearr_55643[(8)] = inst_55621__$1);

(statearr_55643[(9)] = inst_55622);

return statearr_55643;
})();
if(cljs.core.truth_(inst_55623)){
var statearr_55644_56796 = state_55641__$1;
(statearr_55644_56796[(1)] = (8));

} else {
var statearr_55645_56797 = state_55641__$1;
(statearr_55645_56797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55642 === (1))){
var inst_55610 = cljs.core.vec(chs);
var inst_55611 = inst_55610;
var state_55641__$1 = (function (){var statearr_55646 = state_55641;
(statearr_55646[(10)] = inst_55611);

return statearr_55646;
})();
var statearr_55647_56798 = state_55641__$1;
(statearr_55647_56798[(2)] = null);

(statearr_55647_56798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55642 === (4))){
var inst_55611 = (state_55641[(10)]);
var state_55641__$1 = state_55641;
return cljs.core.async.ioc_alts_BANG_(state_55641__$1,(7),inst_55611);
} else {
if((state_val_55642 === (6))){
var inst_55637 = (state_55641[(2)]);
var state_55641__$1 = state_55641;
var statearr_55648_56799 = state_55641__$1;
(statearr_55648_56799[(2)] = inst_55637);

(statearr_55648_56799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55642 === (3))){
var inst_55639 = (state_55641[(2)]);
var state_55641__$1 = state_55641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55641__$1,inst_55639);
} else {
if((state_val_55642 === (2))){
var inst_55611 = (state_55641[(10)]);
var inst_55613 = cljs.core.count(inst_55611);
var inst_55614 = (inst_55613 > (0));
var state_55641__$1 = state_55641;
if(cljs.core.truth_(inst_55614)){
var statearr_55650_56800 = state_55641__$1;
(statearr_55650_56800[(1)] = (4));

} else {
var statearr_55651_56801 = state_55641__$1;
(statearr_55651_56801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55642 === (11))){
var inst_55611 = (state_55641[(10)]);
var inst_55630 = (state_55641[(2)]);
var tmp55649 = inst_55611;
var inst_55611__$1 = tmp55649;
var state_55641__$1 = (function (){var statearr_55652 = state_55641;
(statearr_55652[(11)] = inst_55630);

(statearr_55652[(10)] = inst_55611__$1);

return statearr_55652;
})();
var statearr_55653_56802 = state_55641__$1;
(statearr_55653_56802[(2)] = null);

(statearr_55653_56802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55642 === (9))){
var inst_55621 = (state_55641[(8)]);
var state_55641__$1 = state_55641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55641__$1,(11),out,inst_55621);
} else {
if((state_val_55642 === (5))){
var inst_55635 = cljs.core.async.close_BANG_(out);
var state_55641__$1 = state_55641;
var statearr_55654_56803 = state_55641__$1;
(statearr_55654_56803[(2)] = inst_55635);

(statearr_55654_56803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55642 === (10))){
var inst_55633 = (state_55641[(2)]);
var state_55641__$1 = state_55641;
var statearr_55655_56804 = state_55641__$1;
(statearr_55655_56804[(2)] = inst_55633);

(statearr_55655_56804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55642 === (8))){
var inst_55620 = (state_55641[(7)]);
var inst_55621 = (state_55641[(8)]);
var inst_55622 = (state_55641[(9)]);
var inst_55611 = (state_55641[(10)]);
var inst_55625 = (function (){var cs = inst_55611;
var vec__55616 = inst_55620;
var v = inst_55621;
var c = inst_55622;
return (function (p1__55607_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55607_SHARP_);
});
})();
var inst_55626 = cljs.core.filterv(inst_55625,inst_55611);
var inst_55611__$1 = inst_55626;
var state_55641__$1 = (function (){var statearr_55656 = state_55641;
(statearr_55656[(10)] = inst_55611__$1);

return statearr_55656;
})();
var statearr_55657_56805 = state_55641__$1;
(statearr_55657_56805[(2)] = null);

(statearr_55657_56805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_55658 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55658[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_55658[(1)] = (1));

return statearr_55658;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_55641){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_55641);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55659){if((e55659 instanceof Object)){
var ex__54459__auto__ = e55659;
var statearr_55660_56806 = state_55641;
(statearr_55660_56806[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56807 = state_55641;
state_55641 = G__56807;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_55641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_55641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55661 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55661[(6)] = c__54553__auto___56795);

return statearr_55661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__55663 = arguments.length;
switch (G__55663) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54553__auto___56810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_55687){
var state_val_55688 = (state_55687[(1)]);
if((state_val_55688 === (7))){
var inst_55669 = (state_55687[(7)]);
var inst_55669__$1 = (state_55687[(2)]);
var inst_55670 = (inst_55669__$1 == null);
var inst_55671 = cljs.core.not(inst_55670);
var state_55687__$1 = (function (){var statearr_55689 = state_55687;
(statearr_55689[(7)] = inst_55669__$1);

return statearr_55689;
})();
if(inst_55671){
var statearr_55690_56812 = state_55687__$1;
(statearr_55690_56812[(1)] = (8));

} else {
var statearr_55691_56813 = state_55687__$1;
(statearr_55691_56813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55688 === (1))){
var inst_55664 = (0);
var state_55687__$1 = (function (){var statearr_55692 = state_55687;
(statearr_55692[(8)] = inst_55664);

return statearr_55692;
})();
var statearr_55693_56814 = state_55687__$1;
(statearr_55693_56814[(2)] = null);

(statearr_55693_56814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55688 === (4))){
var state_55687__$1 = state_55687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55687__$1,(7),ch);
} else {
if((state_val_55688 === (6))){
var inst_55682 = (state_55687[(2)]);
var state_55687__$1 = state_55687;
var statearr_55694_56816 = state_55687__$1;
(statearr_55694_56816[(2)] = inst_55682);

(statearr_55694_56816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55688 === (3))){
var inst_55684 = (state_55687[(2)]);
var inst_55685 = cljs.core.async.close_BANG_(out);
var state_55687__$1 = (function (){var statearr_55695 = state_55687;
(statearr_55695[(9)] = inst_55684);

return statearr_55695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55687__$1,inst_55685);
} else {
if((state_val_55688 === (2))){
var inst_55664 = (state_55687[(8)]);
var inst_55666 = (inst_55664 < n);
var state_55687__$1 = state_55687;
if(cljs.core.truth_(inst_55666)){
var statearr_55696_56818 = state_55687__$1;
(statearr_55696_56818[(1)] = (4));

} else {
var statearr_55697_56819 = state_55687__$1;
(statearr_55697_56819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55688 === (11))){
var inst_55664 = (state_55687[(8)]);
var inst_55674 = (state_55687[(2)]);
var inst_55675 = (inst_55664 + (1));
var inst_55664__$1 = inst_55675;
var state_55687__$1 = (function (){var statearr_55698 = state_55687;
(statearr_55698[(8)] = inst_55664__$1);

(statearr_55698[(10)] = inst_55674);

return statearr_55698;
})();
var statearr_55699_56820 = state_55687__$1;
(statearr_55699_56820[(2)] = null);

(statearr_55699_56820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55688 === (9))){
var state_55687__$1 = state_55687;
var statearr_55700_56822 = state_55687__$1;
(statearr_55700_56822[(2)] = null);

(statearr_55700_56822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55688 === (5))){
var state_55687__$1 = state_55687;
var statearr_55701_56823 = state_55687__$1;
(statearr_55701_56823[(2)] = null);

(statearr_55701_56823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55688 === (10))){
var inst_55679 = (state_55687[(2)]);
var state_55687__$1 = state_55687;
var statearr_55702_56824 = state_55687__$1;
(statearr_55702_56824[(2)] = inst_55679);

(statearr_55702_56824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55688 === (8))){
var inst_55669 = (state_55687[(7)]);
var state_55687__$1 = state_55687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55687__$1,(11),out,inst_55669);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_55703 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55703[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_55703[(1)] = (1));

return statearr_55703;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_55687){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_55687);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55704){if((e55704 instanceof Object)){
var ex__54459__auto__ = e55704;
var statearr_55705_56828 = state_55687;
(statearr_55705_56828[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56829 = state_55687;
state_55687 = G__56829;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_55687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_55687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55706 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55706[(6)] = c__54553__auto___56810);

return statearr_55706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55708 = (function (f,ch,meta55709){
this.f = f;
this.ch = ch;
this.meta55709 = meta55709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55710,meta55709__$1){
var self__ = this;
var _55710__$1 = this;
return (new cljs.core.async.t_cljs$core$async55708(self__.f,self__.ch,meta55709__$1));
}));

(cljs.core.async.t_cljs$core$async55708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55710){
var self__ = this;
var _55710__$1 = this;
return self__.meta55709;
}));

(cljs.core.async.t_cljs$core$async55708.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55708.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55708.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55711 = (function (f,ch,meta55709,_,fn1,meta55712){
this.f = f;
this.ch = ch;
this.meta55709 = meta55709;
this._ = _;
this.fn1 = fn1;
this.meta55712 = meta55712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55713,meta55712__$1){
var self__ = this;
var _55713__$1 = this;
return (new cljs.core.async.t_cljs$core$async55711(self__.f,self__.ch,self__.meta55709,self__._,self__.fn1,meta55712__$1));
}));

(cljs.core.async.t_cljs$core$async55711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55713){
var self__ = this;
var _55713__$1 = this;
return self__.meta55712;
}));

(cljs.core.async.t_cljs$core$async55711.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55707_SHARP_){
var G__55714 = (((p1__55707_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55707_SHARP_) : self__.f.call(null,p1__55707_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55714) : f1.call(null,G__55714));
});
}));

(cljs.core.async.t_cljs$core$async55711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55709","meta55709",1899437628,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55708","cljs.core.async/t_cljs$core$async55708",-1573908670,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55712","meta55712",-1631342522,null)], null);
}));

(cljs.core.async.t_cljs$core$async55711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55711");

(cljs.core.async.t_cljs$core$async55711.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async55711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55711.
 */
cljs.core.async.__GT_t_cljs$core$async55711 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55711(f__$1,ch__$1,meta55709__$1,___$2,fn1__$1,meta55712){
return (new cljs.core.async.t_cljs$core$async55711(f__$1,ch__$1,meta55709__$1,___$2,fn1__$1,meta55712));
});

}

return (new cljs.core.async.t_cljs$core$async55711(self__.f,self__.ch,self__.meta55709,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55715 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55715) : self__.f.call(null,G__55715));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55708.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55709","meta55709",1899437628,null)], null);
}));

(cljs.core.async.t_cljs$core$async55708.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55708");

(cljs.core.async.t_cljs$core$async55708.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async55708");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55708.
 */
cljs.core.async.__GT_t_cljs$core$async55708 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55708(f__$1,ch__$1,meta55709){
return (new cljs.core.async.t_cljs$core$async55708(f__$1,ch__$1,meta55709));
});

}

return (new cljs.core.async.t_cljs$core$async55708(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55716 = (function (f,ch,meta55717){
this.f = f;
this.ch = ch;
this.meta55717 = meta55717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55718,meta55717__$1){
var self__ = this;
var _55718__$1 = this;
return (new cljs.core.async.t_cljs$core$async55716(self__.f,self__.ch,meta55717__$1));
}));

(cljs.core.async.t_cljs$core$async55716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55718){
var self__ = this;
var _55718__$1 = this;
return self__.meta55717;
}));

(cljs.core.async.t_cljs$core$async55716.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55716.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55716.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55716.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55716.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55716.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55717","meta55717",1466200039,null)], null);
}));

(cljs.core.async.t_cljs$core$async55716.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55716");

(cljs.core.async.t_cljs$core$async55716.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async55716");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55716.
 */
cljs.core.async.__GT_t_cljs$core$async55716 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55716(f__$1,ch__$1,meta55717){
return (new cljs.core.async.t_cljs$core$async55716(f__$1,ch__$1,meta55717));
});

}

return (new cljs.core.async.t_cljs$core$async55716(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55719 = (function (p,ch,meta55720){
this.p = p;
this.ch = ch;
this.meta55720 = meta55720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55721,meta55720__$1){
var self__ = this;
var _55721__$1 = this;
return (new cljs.core.async.t_cljs$core$async55719(self__.p,self__.ch,meta55720__$1));
}));

(cljs.core.async.t_cljs$core$async55719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55721){
var self__ = this;
var _55721__$1 = this;
return self__.meta55720;
}));

(cljs.core.async.t_cljs$core$async55719.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55719.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55719.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55720","meta55720",666454855,null)], null);
}));

(cljs.core.async.t_cljs$core$async55719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55719");

(cljs.core.async.t_cljs$core$async55719.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async55719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55719.
 */
cljs.core.async.__GT_t_cljs$core$async55719 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55719(p__$1,ch__$1,meta55720){
return (new cljs.core.async.t_cljs$core$async55719(p__$1,ch__$1,meta55720));
});

}

return (new cljs.core.async.t_cljs$core$async55719(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__55723 = arguments.length;
switch (G__55723) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54553__auto___56900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_55744){
var state_val_55745 = (state_55744[(1)]);
if((state_val_55745 === (7))){
var inst_55740 = (state_55744[(2)]);
var state_55744__$1 = state_55744;
var statearr_55746_56901 = state_55744__$1;
(statearr_55746_56901[(2)] = inst_55740);

(statearr_55746_56901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55745 === (1))){
var state_55744__$1 = state_55744;
var statearr_55747_56902 = state_55744__$1;
(statearr_55747_56902[(2)] = null);

(statearr_55747_56902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55745 === (4))){
var inst_55726 = (state_55744[(7)]);
var inst_55726__$1 = (state_55744[(2)]);
var inst_55727 = (inst_55726__$1 == null);
var state_55744__$1 = (function (){var statearr_55748 = state_55744;
(statearr_55748[(7)] = inst_55726__$1);

return statearr_55748;
})();
if(cljs.core.truth_(inst_55727)){
var statearr_55749_56903 = state_55744__$1;
(statearr_55749_56903[(1)] = (5));

} else {
var statearr_55750_56904 = state_55744__$1;
(statearr_55750_56904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55745 === (6))){
var inst_55726 = (state_55744[(7)]);
var inst_55731 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55726) : p.call(null,inst_55726));
var state_55744__$1 = state_55744;
if(cljs.core.truth_(inst_55731)){
var statearr_55751_56905 = state_55744__$1;
(statearr_55751_56905[(1)] = (8));

} else {
var statearr_55752_56906 = state_55744__$1;
(statearr_55752_56906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55745 === (3))){
var inst_55742 = (state_55744[(2)]);
var state_55744__$1 = state_55744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55744__$1,inst_55742);
} else {
if((state_val_55745 === (2))){
var state_55744__$1 = state_55744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55744__$1,(4),ch);
} else {
if((state_val_55745 === (11))){
var inst_55734 = (state_55744[(2)]);
var state_55744__$1 = state_55744;
var statearr_55753_56910 = state_55744__$1;
(statearr_55753_56910[(2)] = inst_55734);

(statearr_55753_56910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55745 === (9))){
var state_55744__$1 = state_55744;
var statearr_55754_56911 = state_55744__$1;
(statearr_55754_56911[(2)] = null);

(statearr_55754_56911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55745 === (5))){
var inst_55729 = cljs.core.async.close_BANG_(out);
var state_55744__$1 = state_55744;
var statearr_55755_56912 = state_55744__$1;
(statearr_55755_56912[(2)] = inst_55729);

(statearr_55755_56912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55745 === (10))){
var inst_55737 = (state_55744[(2)]);
var state_55744__$1 = (function (){var statearr_55756 = state_55744;
(statearr_55756[(8)] = inst_55737);

return statearr_55756;
})();
var statearr_55757_56918 = state_55744__$1;
(statearr_55757_56918[(2)] = null);

(statearr_55757_56918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55745 === (8))){
var inst_55726 = (state_55744[(7)]);
var state_55744__$1 = state_55744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55744__$1,(11),out,inst_55726);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_55758 = [null,null,null,null,null,null,null,null,null];
(statearr_55758[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_55758[(1)] = (1));

return statearr_55758;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_55744){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_55744);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55759){if((e55759 instanceof Object)){
var ex__54459__auto__ = e55759;
var statearr_55760_56919 = state_55744;
(statearr_55760_56919[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56920 = state_55744;
state_55744 = G__56920;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_55744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_55744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55761 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55761[(6)] = c__54553__auto___56900);

return statearr_55761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55763 = arguments.length;
switch (G__55763) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__54553__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_55825){
var state_val_55826 = (state_55825[(1)]);
if((state_val_55826 === (7))){
var inst_55821 = (state_55825[(2)]);
var state_55825__$1 = state_55825;
var statearr_55827_56945 = state_55825__$1;
(statearr_55827_56945[(2)] = inst_55821);

(statearr_55827_56945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (20))){
var inst_55791 = (state_55825[(7)]);
var inst_55802 = (state_55825[(2)]);
var inst_55803 = cljs.core.next(inst_55791);
var inst_55777 = inst_55803;
var inst_55778 = null;
var inst_55779 = (0);
var inst_55780 = (0);
var state_55825__$1 = (function (){var statearr_55828 = state_55825;
(statearr_55828[(8)] = inst_55777);

(statearr_55828[(9)] = inst_55780);

(statearr_55828[(10)] = inst_55802);

(statearr_55828[(11)] = inst_55779);

(statearr_55828[(12)] = inst_55778);

return statearr_55828;
})();
var statearr_55829_56958 = state_55825__$1;
(statearr_55829_56958[(2)] = null);

(statearr_55829_56958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (1))){
var state_55825__$1 = state_55825;
var statearr_55830_56963 = state_55825__$1;
(statearr_55830_56963[(2)] = null);

(statearr_55830_56963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (4))){
var inst_55766 = (state_55825[(13)]);
var inst_55766__$1 = (state_55825[(2)]);
var inst_55767 = (inst_55766__$1 == null);
var state_55825__$1 = (function (){var statearr_55831 = state_55825;
(statearr_55831[(13)] = inst_55766__$1);

return statearr_55831;
})();
if(cljs.core.truth_(inst_55767)){
var statearr_55832_56971 = state_55825__$1;
(statearr_55832_56971[(1)] = (5));

} else {
var statearr_55833_56976 = state_55825__$1;
(statearr_55833_56976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (15))){
var state_55825__$1 = state_55825;
var statearr_55837_56982 = state_55825__$1;
(statearr_55837_56982[(2)] = null);

(statearr_55837_56982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (21))){
var state_55825__$1 = state_55825;
var statearr_55838_56987 = state_55825__$1;
(statearr_55838_56987[(2)] = null);

(statearr_55838_56987[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (13))){
var inst_55777 = (state_55825[(8)]);
var inst_55780 = (state_55825[(9)]);
var inst_55779 = (state_55825[(11)]);
var inst_55778 = (state_55825[(12)]);
var inst_55787 = (state_55825[(2)]);
var inst_55788 = (inst_55780 + (1));
var tmp55834 = inst_55777;
var tmp55835 = inst_55779;
var tmp55836 = inst_55778;
var inst_55777__$1 = tmp55834;
var inst_55778__$1 = tmp55836;
var inst_55779__$1 = tmp55835;
var inst_55780__$1 = inst_55788;
var state_55825__$1 = (function (){var statearr_55839 = state_55825;
(statearr_55839[(8)] = inst_55777__$1);

(statearr_55839[(9)] = inst_55780__$1);

(statearr_55839[(14)] = inst_55787);

(statearr_55839[(11)] = inst_55779__$1);

(statearr_55839[(12)] = inst_55778__$1);

return statearr_55839;
})();
var statearr_55840_57004 = state_55825__$1;
(statearr_55840_57004[(2)] = null);

(statearr_55840_57004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (22))){
var state_55825__$1 = state_55825;
var statearr_55841_57010 = state_55825__$1;
(statearr_55841_57010[(2)] = null);

(statearr_55841_57010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (6))){
var inst_55766 = (state_55825[(13)]);
var inst_55775 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55766) : f.call(null,inst_55766));
var inst_55776 = cljs.core.seq(inst_55775);
var inst_55777 = inst_55776;
var inst_55778 = null;
var inst_55779 = (0);
var inst_55780 = (0);
var state_55825__$1 = (function (){var statearr_55842 = state_55825;
(statearr_55842[(8)] = inst_55777);

(statearr_55842[(9)] = inst_55780);

(statearr_55842[(11)] = inst_55779);

(statearr_55842[(12)] = inst_55778);

return statearr_55842;
})();
var statearr_55843_57022 = state_55825__$1;
(statearr_55843_57022[(2)] = null);

(statearr_55843_57022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (17))){
var inst_55791 = (state_55825[(7)]);
var inst_55795 = cljs.core.chunk_first(inst_55791);
var inst_55796 = cljs.core.chunk_rest(inst_55791);
var inst_55797 = cljs.core.count(inst_55795);
var inst_55777 = inst_55796;
var inst_55778 = inst_55795;
var inst_55779 = inst_55797;
var inst_55780 = (0);
var state_55825__$1 = (function (){var statearr_55844 = state_55825;
(statearr_55844[(8)] = inst_55777);

(statearr_55844[(9)] = inst_55780);

(statearr_55844[(11)] = inst_55779);

(statearr_55844[(12)] = inst_55778);

return statearr_55844;
})();
var statearr_55845_57023 = state_55825__$1;
(statearr_55845_57023[(2)] = null);

(statearr_55845_57023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (3))){
var inst_55823 = (state_55825[(2)]);
var state_55825__$1 = state_55825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55825__$1,inst_55823);
} else {
if((state_val_55826 === (12))){
var inst_55811 = (state_55825[(2)]);
var state_55825__$1 = state_55825;
var statearr_55846_57024 = state_55825__$1;
(statearr_55846_57024[(2)] = inst_55811);

(statearr_55846_57024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (2))){
var state_55825__$1 = state_55825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55825__$1,(4),in$);
} else {
if((state_val_55826 === (23))){
var inst_55819 = (state_55825[(2)]);
var state_55825__$1 = state_55825;
var statearr_55847_57025 = state_55825__$1;
(statearr_55847_57025[(2)] = inst_55819);

(statearr_55847_57025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (19))){
var inst_55806 = (state_55825[(2)]);
var state_55825__$1 = state_55825;
var statearr_55848_57030 = state_55825__$1;
(statearr_55848_57030[(2)] = inst_55806);

(statearr_55848_57030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (11))){
var inst_55777 = (state_55825[(8)]);
var inst_55791 = (state_55825[(7)]);
var inst_55791__$1 = cljs.core.seq(inst_55777);
var state_55825__$1 = (function (){var statearr_55849 = state_55825;
(statearr_55849[(7)] = inst_55791__$1);

return statearr_55849;
})();
if(inst_55791__$1){
var statearr_55850_57038 = state_55825__$1;
(statearr_55850_57038[(1)] = (14));

} else {
var statearr_55851_57039 = state_55825__$1;
(statearr_55851_57039[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (9))){
var inst_55813 = (state_55825[(2)]);
var inst_55814 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_55825__$1 = (function (){var statearr_55852 = state_55825;
(statearr_55852[(15)] = inst_55813);

return statearr_55852;
})();
if(cljs.core.truth_(inst_55814)){
var statearr_55853_57044 = state_55825__$1;
(statearr_55853_57044[(1)] = (21));

} else {
var statearr_55854_57045 = state_55825__$1;
(statearr_55854_57045[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (5))){
var inst_55769 = cljs.core.async.close_BANG_(out);
var state_55825__$1 = state_55825;
var statearr_55855_57046 = state_55825__$1;
(statearr_55855_57046[(2)] = inst_55769);

(statearr_55855_57046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (14))){
var inst_55791 = (state_55825[(7)]);
var inst_55793 = cljs.core.chunked_seq_QMARK_(inst_55791);
var state_55825__$1 = state_55825;
if(inst_55793){
var statearr_55856_57048 = state_55825__$1;
(statearr_55856_57048[(1)] = (17));

} else {
var statearr_55857_57049 = state_55825__$1;
(statearr_55857_57049[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (16))){
var inst_55809 = (state_55825[(2)]);
var state_55825__$1 = state_55825;
var statearr_55858_57050 = state_55825__$1;
(statearr_55858_57050[(2)] = inst_55809);

(statearr_55858_57050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (10))){
var inst_55780 = (state_55825[(9)]);
var inst_55778 = (state_55825[(12)]);
var inst_55785 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_55778,inst_55780);
var state_55825__$1 = state_55825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55825__$1,(13),out,inst_55785);
} else {
if((state_val_55826 === (18))){
var inst_55791 = (state_55825[(7)]);
var inst_55800 = cljs.core.first(inst_55791);
var state_55825__$1 = state_55825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55825__$1,(20),out,inst_55800);
} else {
if((state_val_55826 === (8))){
var inst_55780 = (state_55825[(9)]);
var inst_55779 = (state_55825[(11)]);
var inst_55782 = (inst_55780 < inst_55779);
var inst_55783 = inst_55782;
var state_55825__$1 = state_55825;
if(cljs.core.truth_(inst_55783)){
var statearr_55859_57052 = state_55825__$1;
(statearr_55859_57052[(1)] = (10));

} else {
var statearr_55860_57053 = state_55825__$1;
(statearr_55860_57053[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__54456__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54456__auto____0 = (function (){
var statearr_55861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55861[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54456__auto__);

(statearr_55861[(1)] = (1));

return statearr_55861;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54456__auto____1 = (function (state_55825){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_55825);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55862){if((e55862 instanceof Object)){
var ex__54459__auto__ = e55862;
var statearr_55863_57054 = state_55825;
(statearr_55863_57054[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55862;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57056 = state_55825;
state_55825 = G__57056;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54456__auto__ = function(state_55825){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54456__auto____1.call(this,state_55825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54456__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54456__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55864 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55864[(6)] = c__54553__auto__);

return statearr_55864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));

return c__54553__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__55866 = arguments.length;
switch (G__55866) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__55868 = arguments.length;
switch (G__55868) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__55870 = arguments.length;
switch (G__55870) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54553__auto___57083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_55894){
var state_val_55895 = (state_55894[(1)]);
if((state_val_55895 === (7))){
var inst_55889 = (state_55894[(2)]);
var state_55894__$1 = state_55894;
var statearr_55896_57093 = state_55894__$1;
(statearr_55896_57093[(2)] = inst_55889);

(statearr_55896_57093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55895 === (1))){
var inst_55871 = null;
var state_55894__$1 = (function (){var statearr_55897 = state_55894;
(statearr_55897[(7)] = inst_55871);

return statearr_55897;
})();
var statearr_55898_57097 = state_55894__$1;
(statearr_55898_57097[(2)] = null);

(statearr_55898_57097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55895 === (4))){
var inst_55874 = (state_55894[(8)]);
var inst_55874__$1 = (state_55894[(2)]);
var inst_55875 = (inst_55874__$1 == null);
var inst_55876 = cljs.core.not(inst_55875);
var state_55894__$1 = (function (){var statearr_55899 = state_55894;
(statearr_55899[(8)] = inst_55874__$1);

return statearr_55899;
})();
if(inst_55876){
var statearr_55900_57105 = state_55894__$1;
(statearr_55900_57105[(1)] = (5));

} else {
var statearr_55901_57110 = state_55894__$1;
(statearr_55901_57110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55895 === (6))){
var state_55894__$1 = state_55894;
var statearr_55902_57112 = state_55894__$1;
(statearr_55902_57112[(2)] = null);

(statearr_55902_57112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55895 === (3))){
var inst_55891 = (state_55894[(2)]);
var inst_55892 = cljs.core.async.close_BANG_(out);
var state_55894__$1 = (function (){var statearr_55903 = state_55894;
(statearr_55903[(9)] = inst_55891);

return statearr_55903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55894__$1,inst_55892);
} else {
if((state_val_55895 === (2))){
var state_55894__$1 = state_55894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55894__$1,(4),ch);
} else {
if((state_val_55895 === (11))){
var inst_55874 = (state_55894[(8)]);
var inst_55883 = (state_55894[(2)]);
var inst_55871 = inst_55874;
var state_55894__$1 = (function (){var statearr_55904 = state_55894;
(statearr_55904[(10)] = inst_55883);

(statearr_55904[(7)] = inst_55871);

return statearr_55904;
})();
var statearr_55905_57129 = state_55894__$1;
(statearr_55905_57129[(2)] = null);

(statearr_55905_57129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55895 === (9))){
var inst_55874 = (state_55894[(8)]);
var state_55894__$1 = state_55894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55894__$1,(11),out,inst_55874);
} else {
if((state_val_55895 === (5))){
var inst_55874 = (state_55894[(8)]);
var inst_55871 = (state_55894[(7)]);
var inst_55878 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55874,inst_55871);
var state_55894__$1 = state_55894;
if(inst_55878){
var statearr_55907_57130 = state_55894__$1;
(statearr_55907_57130[(1)] = (8));

} else {
var statearr_55908_57131 = state_55894__$1;
(statearr_55908_57131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55895 === (10))){
var inst_55886 = (state_55894[(2)]);
var state_55894__$1 = state_55894;
var statearr_55909_57135 = state_55894__$1;
(statearr_55909_57135[(2)] = inst_55886);

(statearr_55909_57135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55895 === (8))){
var inst_55871 = (state_55894[(7)]);
var tmp55906 = inst_55871;
var inst_55871__$1 = tmp55906;
var state_55894__$1 = (function (){var statearr_55910 = state_55894;
(statearr_55910[(7)] = inst_55871__$1);

return statearr_55910;
})();
var statearr_55911_57137 = state_55894__$1;
(statearr_55911_57137[(2)] = null);

(statearr_55911_57137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_55912 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55912[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_55912[(1)] = (1));

return statearr_55912;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_55894){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_55894);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55913){if((e55913 instanceof Object)){
var ex__54459__auto__ = e55913;
var statearr_55914_57138 = state_55894;
(statearr_55914_57138[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57142 = state_55894;
state_55894 = G__57142;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_55894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_55894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55915 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55915[(6)] = c__54553__auto___57083);

return statearr_55915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__55917 = arguments.length;
switch (G__55917) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54553__auto___57152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_55955){
var state_val_55956 = (state_55955[(1)]);
if((state_val_55956 === (7))){
var inst_55951 = (state_55955[(2)]);
var state_55955__$1 = state_55955;
var statearr_55957_57158 = state_55955__$1;
(statearr_55957_57158[(2)] = inst_55951);

(statearr_55957_57158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55956 === (1))){
var inst_55918 = (new Array(n));
var inst_55919 = inst_55918;
var inst_55920 = (0);
var state_55955__$1 = (function (){var statearr_55958 = state_55955;
(statearr_55958[(7)] = inst_55919);

(statearr_55958[(8)] = inst_55920);

return statearr_55958;
})();
var statearr_55959_57162 = state_55955__$1;
(statearr_55959_57162[(2)] = null);

(statearr_55959_57162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55956 === (4))){
var inst_55923 = (state_55955[(9)]);
var inst_55923__$1 = (state_55955[(2)]);
var inst_55924 = (inst_55923__$1 == null);
var inst_55925 = cljs.core.not(inst_55924);
var state_55955__$1 = (function (){var statearr_55960 = state_55955;
(statearr_55960[(9)] = inst_55923__$1);

return statearr_55960;
})();
if(inst_55925){
var statearr_55961_57164 = state_55955__$1;
(statearr_55961_57164[(1)] = (5));

} else {
var statearr_55962_57165 = state_55955__$1;
(statearr_55962_57165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55956 === (15))){
var inst_55945 = (state_55955[(2)]);
var state_55955__$1 = state_55955;
var statearr_55963_57166 = state_55955__$1;
(statearr_55963_57166[(2)] = inst_55945);

(statearr_55963_57166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55956 === (13))){
var state_55955__$1 = state_55955;
var statearr_55964_57167 = state_55955__$1;
(statearr_55964_57167[(2)] = null);

(statearr_55964_57167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55956 === (6))){
var inst_55920 = (state_55955[(8)]);
var inst_55941 = (inst_55920 > (0));
var state_55955__$1 = state_55955;
if(cljs.core.truth_(inst_55941)){
var statearr_55965_57168 = state_55955__$1;
(statearr_55965_57168[(1)] = (12));

} else {
var statearr_55966_57169 = state_55955__$1;
(statearr_55966_57169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55956 === (3))){
var inst_55953 = (state_55955[(2)]);
var state_55955__$1 = state_55955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55955__$1,inst_55953);
} else {
if((state_val_55956 === (12))){
var inst_55919 = (state_55955[(7)]);
var inst_55943 = cljs.core.vec(inst_55919);
var state_55955__$1 = state_55955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55955__$1,(15),out,inst_55943);
} else {
if((state_val_55956 === (2))){
var state_55955__$1 = state_55955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55955__$1,(4),ch);
} else {
if((state_val_55956 === (11))){
var inst_55935 = (state_55955[(2)]);
var inst_55936 = (new Array(n));
var inst_55919 = inst_55936;
var inst_55920 = (0);
var state_55955__$1 = (function (){var statearr_55967 = state_55955;
(statearr_55967[(7)] = inst_55919);

(statearr_55967[(10)] = inst_55935);

(statearr_55967[(8)] = inst_55920);

return statearr_55967;
})();
var statearr_55968_57170 = state_55955__$1;
(statearr_55968_57170[(2)] = null);

(statearr_55968_57170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55956 === (9))){
var inst_55919 = (state_55955[(7)]);
var inst_55933 = cljs.core.vec(inst_55919);
var state_55955__$1 = state_55955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55955__$1,(11),out,inst_55933);
} else {
if((state_val_55956 === (5))){
var inst_55919 = (state_55955[(7)]);
var inst_55928 = (state_55955[(11)]);
var inst_55923 = (state_55955[(9)]);
var inst_55920 = (state_55955[(8)]);
var inst_55927 = (inst_55919[inst_55920] = inst_55923);
var inst_55928__$1 = (inst_55920 + (1));
var inst_55929 = (inst_55928__$1 < n);
var state_55955__$1 = (function (){var statearr_55969 = state_55955;
(statearr_55969[(11)] = inst_55928__$1);

(statearr_55969[(12)] = inst_55927);

return statearr_55969;
})();
if(cljs.core.truth_(inst_55929)){
var statearr_55970_57173 = state_55955__$1;
(statearr_55970_57173[(1)] = (8));

} else {
var statearr_55971_57174 = state_55955__$1;
(statearr_55971_57174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55956 === (14))){
var inst_55948 = (state_55955[(2)]);
var inst_55949 = cljs.core.async.close_BANG_(out);
var state_55955__$1 = (function (){var statearr_55973 = state_55955;
(statearr_55973[(13)] = inst_55948);

return statearr_55973;
})();
var statearr_55974_57175 = state_55955__$1;
(statearr_55974_57175[(2)] = inst_55949);

(statearr_55974_57175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55956 === (10))){
var inst_55939 = (state_55955[(2)]);
var state_55955__$1 = state_55955;
var statearr_55975_57177 = state_55955__$1;
(statearr_55975_57177[(2)] = inst_55939);

(statearr_55975_57177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55956 === (8))){
var inst_55919 = (state_55955[(7)]);
var inst_55928 = (state_55955[(11)]);
var tmp55972 = inst_55919;
var inst_55919__$1 = tmp55972;
var inst_55920 = inst_55928;
var state_55955__$1 = (function (){var statearr_55976 = state_55955;
(statearr_55976[(7)] = inst_55919__$1);

(statearr_55976[(8)] = inst_55920);

return statearr_55976;
})();
var statearr_55977_57178 = state_55955__$1;
(statearr_55977_57178[(2)] = null);

(statearr_55977_57178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_55978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55978[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_55978[(1)] = (1));

return statearr_55978;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_55955){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_55955);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e55979){if((e55979 instanceof Object)){
var ex__54459__auto__ = e55979;
var statearr_55980_57179 = state_55955;
(statearr_55980_57179[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57180 = state_55955;
state_55955 = G__57180;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_55955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_55955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_55981 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_55981[(6)] = c__54553__auto___57152);

return statearr_55981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__55983 = arguments.length;
switch (G__55983) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54553__auto___57184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54554__auto__ = (function (){var switch__54455__auto__ = (function (state_56025){
var state_val_56026 = (state_56025[(1)]);
if((state_val_56026 === (7))){
var inst_56021 = (state_56025[(2)]);
var state_56025__$1 = state_56025;
var statearr_56027_57185 = state_56025__$1;
(statearr_56027_57185[(2)] = inst_56021);

(statearr_56027_57185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56026 === (1))){
var inst_55984 = [];
var inst_55985 = inst_55984;
var inst_55986 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56025__$1 = (function (){var statearr_56028 = state_56025;
(statearr_56028[(7)] = inst_55986);

(statearr_56028[(8)] = inst_55985);

return statearr_56028;
})();
var statearr_56029_57187 = state_56025__$1;
(statearr_56029_57187[(2)] = null);

(statearr_56029_57187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56026 === (4))){
var inst_55989 = (state_56025[(9)]);
var inst_55989__$1 = (state_56025[(2)]);
var inst_55990 = (inst_55989__$1 == null);
var inst_55991 = cljs.core.not(inst_55990);
var state_56025__$1 = (function (){var statearr_56030 = state_56025;
(statearr_56030[(9)] = inst_55989__$1);

return statearr_56030;
})();
if(inst_55991){
var statearr_56031_57188 = state_56025__$1;
(statearr_56031_57188[(1)] = (5));

} else {
var statearr_56032_57193 = state_56025__$1;
(statearr_56032_57193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56026 === (15))){
var inst_56015 = (state_56025[(2)]);
var state_56025__$1 = state_56025;
var statearr_56033_57194 = state_56025__$1;
(statearr_56033_57194[(2)] = inst_56015);

(statearr_56033_57194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56026 === (13))){
var state_56025__$1 = state_56025;
var statearr_56034_57197 = state_56025__$1;
(statearr_56034_57197[(2)] = null);

(statearr_56034_57197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56026 === (6))){
var inst_55985 = (state_56025[(8)]);
var inst_56010 = inst_55985.length;
var inst_56011 = (inst_56010 > (0));
var state_56025__$1 = state_56025;
if(cljs.core.truth_(inst_56011)){
var statearr_56035_57198 = state_56025__$1;
(statearr_56035_57198[(1)] = (12));

} else {
var statearr_56036_57199 = state_56025__$1;
(statearr_56036_57199[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56026 === (3))){
var inst_56023 = (state_56025[(2)]);
var state_56025__$1 = state_56025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56025__$1,inst_56023);
} else {
if((state_val_56026 === (12))){
var inst_55985 = (state_56025[(8)]);
var inst_56013 = cljs.core.vec(inst_55985);
var state_56025__$1 = state_56025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56025__$1,(15),out,inst_56013);
} else {
if((state_val_56026 === (2))){
var state_56025__$1 = state_56025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56025__$1,(4),ch);
} else {
if((state_val_56026 === (11))){
var inst_55993 = (state_56025[(10)]);
var inst_55989 = (state_56025[(9)]);
var inst_56003 = (state_56025[(2)]);
var inst_56004 = [];
var inst_56005 = inst_56004.push(inst_55989);
var inst_55985 = inst_56004;
var inst_55986 = inst_55993;
var state_56025__$1 = (function (){var statearr_56037 = state_56025;
(statearr_56037[(11)] = inst_56003);

(statearr_56037[(7)] = inst_55986);

(statearr_56037[(8)] = inst_55985);

(statearr_56037[(12)] = inst_56005);

return statearr_56037;
})();
var statearr_56038_57205 = state_56025__$1;
(statearr_56038_57205[(2)] = null);

(statearr_56038_57205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56026 === (9))){
var inst_55985 = (state_56025[(8)]);
var inst_56001 = cljs.core.vec(inst_55985);
var state_56025__$1 = state_56025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56025__$1,(11),out,inst_56001);
} else {
if((state_val_56026 === (5))){
var inst_55993 = (state_56025[(10)]);
var inst_55986 = (state_56025[(7)]);
var inst_55989 = (state_56025[(9)]);
var inst_55993__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55989) : f.call(null,inst_55989));
var inst_55994 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55993__$1,inst_55986);
var inst_55995 = cljs.core.keyword_identical_QMARK_(inst_55986,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_55996 = ((inst_55994) || (inst_55995));
var state_56025__$1 = (function (){var statearr_56039 = state_56025;
(statearr_56039[(10)] = inst_55993__$1);

return statearr_56039;
})();
if(cljs.core.truth_(inst_55996)){
var statearr_56040_57206 = state_56025__$1;
(statearr_56040_57206[(1)] = (8));

} else {
var statearr_56041_57207 = state_56025__$1;
(statearr_56041_57207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56026 === (14))){
var inst_56018 = (state_56025[(2)]);
var inst_56019 = cljs.core.async.close_BANG_(out);
var state_56025__$1 = (function (){var statearr_56043 = state_56025;
(statearr_56043[(13)] = inst_56018);

return statearr_56043;
})();
var statearr_56044_57208 = state_56025__$1;
(statearr_56044_57208[(2)] = inst_56019);

(statearr_56044_57208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56026 === (10))){
var inst_56008 = (state_56025[(2)]);
var state_56025__$1 = state_56025;
var statearr_56045_57209 = state_56025__$1;
(statearr_56045_57209[(2)] = inst_56008);

(statearr_56045_57209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56026 === (8))){
var inst_55993 = (state_56025[(10)]);
var inst_55989 = (state_56025[(9)]);
var inst_55985 = (state_56025[(8)]);
var inst_55998 = inst_55985.push(inst_55989);
var tmp56042 = inst_55985;
var inst_55985__$1 = tmp56042;
var inst_55986 = inst_55993;
var state_56025__$1 = (function (){var statearr_56046 = state_56025;
(statearr_56046[(14)] = inst_55998);

(statearr_56046[(7)] = inst_55986);

(statearr_56046[(8)] = inst_55985__$1);

return statearr_56046;
})();
var statearr_56047_57211 = state_56025__$1;
(statearr_56047_57211[(2)] = null);

(statearr_56047_57211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54456__auto__ = null;
var cljs$core$async$state_machine__54456__auto____0 = (function (){
var statearr_56048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56048[(0)] = cljs$core$async$state_machine__54456__auto__);

(statearr_56048[(1)] = (1));

return statearr_56048;
});
var cljs$core$async$state_machine__54456__auto____1 = (function (state_56025){
while(true){
var ret_value__54457__auto__ = (function (){try{while(true){
var result__54458__auto__ = switch__54455__auto__(state_56025);
if(cljs.core.keyword_identical_QMARK_(result__54458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54458__auto__;
}
break;
}
}catch (e56049){if((e56049 instanceof Object)){
var ex__54459__auto__ = e56049;
var statearr_56050_57212 = state_56025;
(statearr_56050_57212[(5)] = ex__54459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56049;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57213 = state_56025;
state_56025 = G__57213;
continue;
} else {
return ret_value__54457__auto__;
}
break;
}
});
cljs$core$async$state_machine__54456__auto__ = function(state_56025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54456__auto____1.call(this,state_56025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54456__auto____0;
cljs$core$async$state_machine__54456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54456__auto____1;
return cljs$core$async$state_machine__54456__auto__;
})()
})();
var state__54555__auto__ = (function (){var statearr_56051 = (f__54554__auto__.cljs$core$IFn$_invoke$arity$0 ? f__54554__auto__.cljs$core$IFn$_invoke$arity$0() : f__54554__auto__.call(null));
(statearr_56051[(6)] = c__54553__auto___57184);

return statearr_56051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54555__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
