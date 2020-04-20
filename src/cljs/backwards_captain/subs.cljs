(ns backwards-captain.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(rf/reg-sub
 ::post
 (fn [db _]
   (:post db)))