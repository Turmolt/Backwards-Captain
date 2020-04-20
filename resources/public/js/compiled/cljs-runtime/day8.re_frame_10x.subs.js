goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__51609_52093 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__51610_52094 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51609_52093,G__51610_52094) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51609_52093,G__51610_52094));
var G__51611_52095 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__51612_52096 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51613_52097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__51614_52098 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51611_52095,G__51612_52096,G__51613_52097,G__51614_52098) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51611_52095,G__51612_52096,G__51613_52097,G__51614_52098));
var G__51615_52099 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__51616_52100 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51617_52101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__51618_52102 = (function (panel_width_PERCENT_,p__51619){
var vec__51620 = p__51619;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51620,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51620,(1),null);
return (((function (){var G__51623 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__51623);
})() * n) / 100.0);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51615_52099,G__51616_52100,G__51617_52101,G__51618_52102) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51615_52099,G__51616_52100,G__51617_52101,G__51618_52102));
var G__51624_52103 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__51625_52104 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51626_52105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__51627_52106 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51624_52103,G__51625_52104,G__51626_52105,G__51627_52106) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51624_52103,G__51625_52104,G__51626_52105,G__51627_52106));
var G__51629_52107 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__51630_52108 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51631_52109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__51632_52110 = (function (width,p__51633){
var vec__51634 = p__51633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51634,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51634,(1),null);
return ((function (){var G__51637 = (width / n);
return Math.ceil(G__51637);
})() * n);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51629_52107,G__51630_52108,G__51631_52109,G__51632_52110) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51629_52107,G__51630_52108,G__51631_52109,G__51632_52110));
var G__51638_52111 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__51639_52112 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51640_52113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__51641_52114 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51638_52111,G__51639_52112,G__51640_52113,G__51641_52114) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51638_52111,G__51639_52112,G__51640_52113,G__51641_52114));
var G__51642_52119 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__51643_52120 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51644_52121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__51645_52122 = (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51642_52119,G__51643_52120,G__51644_52121,G__51645_52122) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51642_52119,G__51643_52120,G__51644_52121,G__51645_52122));
var G__51646_52123 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__51647_52124 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51648_52125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__51649_52126 = (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51646_52123,G__51647_52124,G__51648_52125,G__51649_52126) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51646_52123,G__51647_52124,G__51648_52125,G__51649_52126));
var G__51650_52127 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__51651_52128 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51652_52129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__51653_52130 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51650_52127,G__51651_52128,G__51652_52129,G__51653_52130) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51650_52127,G__51651_52128,G__51652_52129,G__51653_52130));
var G__51655_52131 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__51656_52132 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51657_52133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__51658_52134 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51655_52131,G__51656_52132,G__51657_52133,G__51658_52134) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51655_52131,G__51656_52132,G__51657_52133,G__51658_52134));
var G__51659_52135 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__51660_52136 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51661_52137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__51662_52138 = (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51659_52135,G__51660_52136,G__51661_52137,G__51662_52138) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51659_52135,G__51660_52136,G__51661_52137,G__51662_52138));
var G__51663_52139 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__51664_52140 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51665_52141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__51666_52142 = (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51663_52139,G__51664_52140,G__51665_52141,G__51666_52142) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51663_52139,G__51664_52140,G__51665_52141,G__51666_52142));
var G__51667_52143 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__51668_52144 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51669_52145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__51670_52146 = (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51667_52143,G__51668_52144,G__51669_52145,G__51670_52146) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51667_52143,G__51668_52144,G__51669_52145,G__51670_52146));
var G__51671_52149 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__51672_52150 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51671_52149,G__51672_52150) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51671_52149,G__51672_52150));
var G__51674_52151 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__51675_52152 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51676_52153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__51677_52154 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51674_52151,G__51675_52152,G__51676_52153,G__51677_52154) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51674_52151,G__51675_52152,G__51676_52153,G__51677_52154));
var G__51678_52155 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__51679_52156 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51680_52157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__51681_52158 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51678_52155,G__51679_52156,G__51680_52157,G__51681_52158) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51678_52155,G__51679_52156,G__51680_52157,G__51681_52158));
var G__51683_52161 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__51684_52162 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51685_52163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__51686_52164 = (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51682_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__51682_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__51682_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51683_52161,G__51684_52162,G__51685_52163,G__51686_52164) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51683_52161,G__51684_52162,G__51685_52163,G__51686_52164));
var G__51687_52166 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__51688_52167 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51689_52168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__51690_52169 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51687_52166,G__51688_52167,G__51689_52168,G__51690_52169) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51687_52166,G__51688_52167,G__51689_52168,G__51690_52169));
var G__51691_52170 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__51692_52171 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51693_52172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__51694_52173 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51691_52170,G__51692_52171,G__51693_52172,G__51694_52173) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51691_52170,G__51692_52171,G__51693_52172,G__51694_52173));
var G__51695_52175 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__51696_52176 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51697_52177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__51698_52178 = (function (expansions,p__51699){
var vec__51700 = p__51699;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51700,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51700,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51695_52175,G__51696_52176,G__51697_52177,G__51698_52178) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51695_52175,G__51696_52176,G__51697_52177,G__51698_52178));
var G__51703_52185 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__51704_52186 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51705_52187 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__51706_52188 = (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51703_52185,G__51704_52186,G__51705_52187,G__51706_52188) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51703_52185,G__51704_52186,G__51705_52187,G__51706_52188));
var G__51707_52189 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__51708_52190 = (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51707_52189,G__51708_52190) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51707_52189,G__51708_52190));
var G__51709_52191 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__51710_52192 = (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51709_52191,G__51710_52192) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51709_52191,G__51710_52192));
var G__51711_52193 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__51712_52194 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51711_52193,G__51712_52194) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51711_52193,G__51712_52194));
var G__51713_52195 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__51714_52196 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51713_52195,G__51714_52196) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51713_52195,G__51714_52196));
var G__51715_52199 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__51716_52200 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51715_52199,G__51716_52200) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51715_52199,G__51716_52200));
var G__51717_52201 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__51718_52202 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51719_52203 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__51720_52204 = (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51717_52201,G__51718_52202,G__51719_52203,G__51720_52204) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51717_52201,G__51718_52202,G__51719_52203,G__51720_52204));
var G__51721_52205 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__51722_52206 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51723_52207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__51724_52208 = (function (traces,_){
return cljs.core.count(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51721_52205,G__51722_52206,G__51723_52207,G__51724_52208) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51721_52205,G__51722_52206,G__51723_52207,G__51724_52208));
var G__51725_52209 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__51726_52210 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51727_52211 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__51728_52212 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51729_52213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__51730_52214 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51731_52215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__51732_52216 = (function (p__51733,_){
var vec__51734 = p__51733;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51734,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51734,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51734,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__51725_52209,G__51726_52210,G__51727_52211,G__51728_52212,G__51729_52213,G__51730_52214,G__51731_52215,G__51732_52216) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51725_52209,G__51726_52210,G__51727_52211,G__51728_52212,G__51729_52213,G__51730_52214,G__51731_52215,G__51732_52216));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__51737,_){
var vec__51738 = p__51737;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51738,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51738,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
});
var G__51741_52221 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__51742_52222 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51743_52223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__51744_52224 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51745_52225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__51746_52226 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__51741_52221,G__51742_52222,G__51743_52223,G__51744_52224,G__51745_52225,G__51746_52226) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51741_52221,G__51742_52222,G__51743_52223,G__51744_52224,G__51745_52225,G__51746_52226));
var G__51747_52228 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__51748_52229 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51749_52230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__51750_52231 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51751_52232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__51752_52233 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__51747_52228,G__51748_52229,G__51749_52230,G__51750_52231,G__51751_52232,G__51752_52233) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51747_52228,G__51748_52229,G__51749_52230,G__51750_52231,G__51751_52232,G__51752_52233));
var G__51753_52239 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__51754_52240 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51755_52241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__51756_52242 = (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51753_52239,G__51754_52240,G__51755_52241,G__51756_52242) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51753_52239,G__51754_52240,G__51755_52241,G__51756_52242));
var G__51757_52243 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__51758_52244 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51757_52243,G__51758_52244) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51757_52243,G__51758_52244));
var G__51759_52250 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__51760_52251 = (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51759_52250,G__51760_52251) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51759_52250,G__51760_52251));
var G__51761_52252 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__51762_52253 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51763_52254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__51764_52255 = (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51761_52252,G__51762_52253,G__51763_52254,G__51764_52255) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51761_52252,G__51762_52253,G__51763_52254,G__51764_52255));
var G__51765_52256 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__51766_52257 = (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51765_52256,G__51766_52257) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51765_52256,G__51766_52257));
var G__51767_52259 = new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812);
var G__51768_52260 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51769_52261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__51770_52262 = (function (epochs,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51767_52259,G__51768_52260,G__51769_52261,G__51770_52262) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51767_52259,G__51768_52260,G__51769_52261,G__51770_52262));
var G__51771_52263 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__51772_52264 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51773_52265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__51774_52266 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51775_52267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__51776_52268 = (function (p__51777,_){
var vec__51778 = p__51777;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51778,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51778,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__51771_52263,G__51772_52264,G__51773_52265,G__51774_52266,G__51775_52267,G__51776_52268) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51771_52263,G__51772_52264,G__51773_52265,G__51774_52266,G__51775_52267,G__51776_52268));
var G__51781_52276 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__51782_52277 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51783_52278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__51784_52279 = (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51781_52276,G__51782_52277,G__51783_52278,G__51784_52279) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51781_52276,G__51782_52277,G__51783_52278,G__51784_52279));
var G__51785_52280 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__51786_52281 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51787_52282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__51788_52283 = (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51785_52280,G__51786_52281,G__51787_52282,G__51788_52283) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51785_52280,G__51786_52281,G__51787_52282,G__51788_52283));
var G__51789_52285 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__51790_52286 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51791_52287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__51792_52288 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51789_52285,G__51790_52286,G__51791_52287,G__51792_52288) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51789_52285,G__51790_52286,G__51791_52287,G__51792_52288));
var G__51793_52289 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__51794_52290 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51795_52291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__51796_52292 = (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51793_52289,G__51794_52290,G__51795_52291,G__51796_52292) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51793_52289,G__51794_52290,G__51795_52291,G__51796_52292));
var G__51797_52294 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__51798_52295 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51799_52296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__51800_52297 = (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51797_52294,G__51798_52295,G__51799_52296,G__51800_52297) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51797_52294,G__51798_52295,G__51799_52296,G__51800_52297));
var G__51801_52298 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__51802_52299 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51803_52300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__51804_52301 = (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51801_52298,G__51802_52299,G__51803_52300,G__51804_52301) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51801_52298,G__51802_52299,G__51803_52300,G__51804_52301));
var G__51805_52302 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__51806_52303 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51807_52304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__51808_52305 = (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51805_52302,G__51806_52303,G__51807_52304,G__51808_52305) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51805_52302,G__51806_52303,G__51807_52304,G__51808_52305));
var G__51809_52306 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__51810_52307 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51811_52308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__51812_52309 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51809_52306,G__51810_52307,G__51811_52308,G__51812_52309) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51809_52306,G__51810_52307,G__51811_52308,G__51812_52309));
var G__51813_52310 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__51814_52311 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51815_52312 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__51816_52313 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51813_52310,G__51814_52311,G__51815_52312,G__51816_52313) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51813_52310,G__51814_52311,G__51815_52312,G__51816_52313));
var G__51817_52314 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__51818_52315 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51819_52316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__51820_52317 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51821_52318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__51822_52319 = (function (p__51823){
var vec__51824 = p__51823;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51824,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51824,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__51817_52314,G__51818_52315,G__51819_52316,G__51820_52317,G__51821_52318,G__51822_52319) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51817_52314,G__51818_52315,G__51819_52316,G__51820_52317,G__51821_52318,G__51822_52319));
var G__51827_52320 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__51828_52321 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51829_52322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__51830_52323 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51831_52324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__51832_52325 = (function (p__51833){
var vec__51834 = p__51833;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51834,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51834,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__51827_52320,G__51828_52321,G__51829_52322,G__51830_52323,G__51831_52324,G__51832_52325) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51827_52320,G__51828_52321,G__51829_52322,G__51830_52323,G__51831_52324,G__51832_52325));
var G__51837_52327 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__51838_52328 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51839_52329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__51840_52330 = (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51837_52327,G__51838_52328,G__51839_52329,G__51840_52330) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51837_52327,G__51838_52328,G__51839_52329,G__51840_52330));
var G__51842_52331 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__51843_52332 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51844_52333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__51845_52334 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51841_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__51841_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__51841_SHARP_)));
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51842_52331,G__51843_52332,G__51844_52333,G__51845_52334) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51842_52331,G__51843_52332,G__51844_52333,G__51845_52334));
var G__51846_52335 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__51847_52336 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51848_52337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__51849_52338 = (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51846_52335,G__51847_52336,G__51848_52337,G__51849_52338) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51846_52335,G__51847_52336,G__51848_52337,G__51849_52338));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__51854 = arguments.length;
switch (G__51854) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___52351 = arguments.length;
var i__4790__auto___52352 = (0);
while(true){
if((i__4790__auto___52352 < len__4789__auto___52351)){
args_arr__4810__auto__.push((arguments[i__4790__auto___52352]));

var G__52354 = (i__4790__auto___52352 + (1));
i__4790__auto___52352 = G__52354;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq51851){
var G__51852 = cljs.core.first(seq51851);
var seq51851__$1 = cljs.core.next(seq51851);
var G__51853 = cljs.core.first(seq51851__$1);
var seq51851__$2 = cljs.core.next(seq51851__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51852,G__51853,seq51851__$2);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

var G__51855_52367 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__51856_52368 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51857_52369 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__51858_52370 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51859_52371 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__51860_52372 = (function (p__51861,p__51862){
var vec__51863 = p__51861;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51863,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51863,(1),null);
var vec__51866 = p__51862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51866,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51866,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__51869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51869,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51869,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__51855_52367,G__51856_52368,G__51857_52369,G__51858_52370,G__51859_52371,G__51860_52372) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51855_52367,G__51856_52368,G__51857_52369,G__51858_52370,G__51859_52371,G__51860_52372));
var G__51872_52387 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__51873_52388 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51874_52389 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__51875_52390 = (function (match){
var map__51876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__51876__$1 = (((((!((map__51876 == null))))?(((((map__51876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51876):map__51876);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51876__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51876__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51876__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51876__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51872_52387,G__51873_52388,G__51874_52389,G__51875_52390) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51872_52387,G__51873_52388,G__51874_52389,G__51875_52390));
var G__51879_52391 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__51881_52392 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51882_52393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__51883_52394 = (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51879_52391,G__51881_52392,G__51882_52393,G__51883_52394) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51879_52391,G__51881_52392,G__51882_52393,G__51883_52394));
var G__51884_52399 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__51885_52400 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51886_52401 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__51887_52402 = (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51884_52399,G__51885_52400,G__51886_52401,G__51887_52402) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51884_52399,G__51885_52400,G__51886_52401,G__51887_52402));
var G__51888_52403 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__51889_52404 = (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51888_52403,G__51889_52404) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51888_52403,G__51889_52404));
var G__51890_52405 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__51891_52406 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51892_52407 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__51893_52408 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51890_52405,G__51891_52406,G__51892_52407,G__51893_52408) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51890_52405,G__51891_52406,G__51892_52407,G__51893_52408));
var G__51894_52432 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__51895_52433 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51896_52434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__51897_52435 = (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51894_52432,G__51895_52433,G__51896_52434,G__51897_52435) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51894_52432,G__51895_52433,G__51896_52434,G__51897_52435));
var G__51902_52436 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__51903_52437 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51904_52438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__51905_52439 = (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51902_52436,G__51903_52437,G__51904_52438,G__51905_52439) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51902_52436,G__51903_52437,G__51904_52438,G__51905_52439));
var G__51906_52440 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__51907_52441 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51908_52442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__51909_52443 = (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51906_52440,G__51907_52441,G__51908_52442,G__51909_52443) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51906_52440,G__51907_52441,G__51908_52442,G__51909_52443));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__51910_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__51910_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51912){
return cljs.core.coll_QMARK_(G__51912);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51913){
return cljs.core.map_QMARK_(G__51913);
}),(function (G__51913){
return cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__51913){
return cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__51913){
return cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__51913){
return cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__51913){
return cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__51913){
return cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__51913){
return ((cljs.core.map_QMARK_(G__51913)) && (cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__51913,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51926){
return cljs.core.coll_QMARK_(G__51926);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__51927 = sub_type;
var G__51927__$1 = (((G__51927 instanceof cljs.core.Keyword))?G__51927.fqn:null);
switch (G__51927__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__52460 = (exp - (1));
var G__52461 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__52462 = cljs.core.rest(order__$1);
exp = G__52460;
total = G__52461;
order__$1 = G__52462;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__51928 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__51928__$1 = (((G__51928 instanceof cljs.core.Keyword))?G__51928.fqn:null);
switch (G__51928__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__51929,p__51930){
var vec__51931 = p__51929;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51931,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51931,(1),null);
var vec__51934 = p__51930;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51934,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?(function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__51937_52496 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__51938_52497 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51939_52498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__51940_52499 = (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51937_52496,G__51938_52497,G__51939_52498,G__51940_52499) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51937_52496,G__51938_52497,G__51939_52498,G__51940_52499));
var G__51941_52504 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__51942_52505 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51943_52506 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__51944_52507 = (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51941_52504,G__51942_52505,G__51943_52506,G__51944_52507) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51941_52504,G__51942_52505,G__51943_52506,G__51944_52507));
var G__51945_52513 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__51946_52514 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51947_52515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__51948_52516 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51949_52517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__51950_52518 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__51945_52513,G__51946_52514,G__51947_52515,G__51948_52516,G__51949_52517,G__51950_52518) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51945_52513,G__51946_52514,G__51947_52515,G__51948_52516,G__51949_52517,G__51950_52518));
var G__51951_52526 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__51952_52527 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51953_52528 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__51954_52529 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51955_52530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__51956_52531 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__51951_52526,G__51952_52527,G__51953_52528,G__51954_52529,G__51955_52530,G__51956_52531) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51951_52526,G__51952_52527,G__51953_52528,G__51954_52529,G__51955_52530,G__51956_52531));
var G__51957_52537 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__51958_52538 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51959_52539 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__51960_52540 = (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51957_52537,G__51958_52538,G__51959_52539,G__51960_52540) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51957_52537,G__51958_52538,G__51959_52539,G__51960_52540));
var G__51964_52545 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__51965_52546 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51966_52547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__51967_52548 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51968_52549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__51969_52550 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51970_52551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__51971_52552 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51972_52553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__51973_52554 = (function (p__51974){
var vec__51975 = p__51974;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51975,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51975,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51975,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51975,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__51980 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__51980__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__51980):G__51980);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51981){
var map__51982 = p__51981;
var map__51982__$1 = (((((!((map__51982 == null))))?(((((map__51982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51982):map__51982);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4185__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__51980__$1);
} else {
return G__51980__$1;
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__51964_52545,G__51965_52546,G__51966_52547,G__51967_52548,G__51968_52549,G__51969_52550,G__51970_52551,G__51971_52552,G__51972_52553,G__51973_52554) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51964_52545,G__51965_52546,G__51966_52547,G__51967_52548,G__51968_52549,G__51969_52550,G__51970_52551,G__51971_52552,G__51972_52553,G__51973_52554));
var G__51988_52579 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__51989_52580 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51990_52581 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__51991_52582 = (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51988_52579,G__51989_52580,G__51990_52581,G__51991_52582) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51988_52579,G__51989_52580,G__51990_52581,G__51991_52582));
var G__51992_52586 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__51993_52587 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51994_52588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__51995_52589 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51992_52586,G__51993_52587,G__51994_52588,G__51995_52589) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51992_52586,G__51993_52587,G__51994_52588,G__51995_52589));
var G__51996_52590 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__51997_52591 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51998_52592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__51999_52593 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51996_52590,G__51997_52591,G__51998_52592,G__51999_52593) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__51996_52590,G__51997_52591,G__51998_52592,G__51999_52593));
var G__52000_52601 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__52001_52602 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52002_52603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__52003_52604 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52000_52601,G__52001_52602,G__52002_52603,G__52003_52604) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52000_52601,G__52001_52602,G__52002_52603,G__52003_52604));
var G__52006_52605 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__52007_52606 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52008_52607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__52009_52608 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52006_52605,G__52007_52606,G__52008_52607,G__52009_52608) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52006_52605,G__52007_52606,G__52008_52607,G__52009_52608));
var G__52012_52616 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__52013_52617 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52014_52618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__52015_52619 = (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52012_52616,G__52013_52617,G__52014_52618,G__52015_52619) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52012_52616,G__52013_52617,G__52014_52618,G__52015_52619));
var G__52016_52621 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__52017_52622 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52018_52623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__52019_52624 = (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52016_52621,G__52017_52622,G__52018_52623,G__52019_52624) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52016_52621,G__52017_52622,G__52018_52623,G__52019_52624));
var G__52020_52627 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__52021_52628 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52022_52629 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__52023_52630 = (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52020_52627,G__52021_52628,G__52022_52629,G__52023_52630) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52020_52627,G__52021_52628,G__52022_52629,G__52023_52630));
var G__52024_52636 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__52025_52637 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52026_52638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__52027_52639 = (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52024_52636,G__52025_52637,G__52026_52638,G__52027_52639) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52024_52636,G__52025_52637,G__52026_52638,G__52027_52639));
var G__52030_52641 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__52031_52642 = (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52030_52641,G__52031_52642) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52030_52641,G__52031_52642));
var G__52032_52643 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__52033_52644 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52034_52645 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__52035_52646 = (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52032_52643,G__52033_52644,G__52034_52645,G__52035_52646) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52032_52643,G__52033_52644,G__52034_52645,G__52035_52646));
var G__52036_52656 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__52037_52657 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52038_52658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__52039_52659 = (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52036_52656,G__52037_52657,G__52038_52658,G__52039_52659) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52036_52656,G__52037_52657,G__52038_52658,G__52039_52659));
var G__52040_52660 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__52041_52661 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52042_52662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__52043_52663 = (function (form,_){
return zprint.core.zprint_str(form);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52040_52660,G__52041_52661,G__52042_52662,G__52043_52663) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52040_52660,G__52041_52661,G__52042_52662,G__52043_52663));
var G__52044_52665 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__52045_52666 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52046_52667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__52047_52668 = (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52044_52665,G__52045_52666,G__52046_52667,G__52047_52668) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52044_52665,G__52045_52666,G__52046_52667,G__52047_52668));
var G__52048_52673 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__52049_52674 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52050_52675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__52051_52676 = (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52048_52673,G__52049_52674,G__52050_52675,G__52051_52676) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52048_52673,G__52049_52674,G__52050_52675,G__52051_52676));
var G__52052_52677 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__52053_52678 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52054_52679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__52055_52680 = (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52052_52677,G__52053_52678,G__52054_52679,G__52055_52680) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52052_52677,G__52053_52678,G__52054_52679,G__52055_52680));
var G__52057_52685 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__52058_52686 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52059_52687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__52060_52688 = (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52057_52685,G__52058_52686,G__52059_52687,G__52060_52688) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52057_52685,G__52058_52686,G__52059_52687,G__52060_52688));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__52061_52693 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__52062_52694 = (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52061_52693,G__52062_52694) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52061_52693,G__52062_52694));
var G__52063_52699 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__52064_52700 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52065_52701 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__52066_52702 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52067_52703 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__52068_52704 = (function (p__52069,_){
var vec__52070 = p__52069;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52070,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52070,(1),null);
var G__52073 = (window_width / char_width);
return Math.ceil(G__52073);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__52063_52699,G__52064_52700,G__52065_52701,G__52066_52702,G__52067_52703,G__52068_52704) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52063_52699,G__52064_52700,G__52065_52701,G__52066_52702,G__52067_52703,G__52068_52704));
var G__52074_52705 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__52075_52706 = (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52074_52705,G__52075_52706) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52074_52705,G__52075_52706));
var G__52076_52713 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__52077_52714 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52078_52715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__52079_52716 = (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52076_52713,G__52077_52714,G__52078_52715,G__52079_52716) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52076_52713,G__52077_52714,G__52078_52715,G__52079_52716));
var G__52080_52717 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__52081_52718 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52080_52717,G__52081_52718) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52080_52717,G__52081_52718));
var G__52082_52720 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__52083_52721 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52084_52722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__52085_52723 = (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52082_52720,G__52083_52721,G__52084_52722,G__52085_52723) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52082_52720,G__52083_52721,G__52084_52722,G__52085_52723));
var G__52086_52726 = new cljs.core.Keyword("history","showing-history?","history/showing-history?",896856376);
var G__52087_52727 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"showing-history?","showing-history?",2100610492)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52086_52726,G__52087_52727) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__52086_52726,G__52087_52727));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
