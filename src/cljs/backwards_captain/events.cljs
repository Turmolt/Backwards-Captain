(ns backwards-captain.events
  (:require
   [re-frame.core :as rf]
   [backwards-captain.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
   ))

(rf/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(rf/reg-event-db
 ::set-active-panel
 (fn-traced [db [_ active-panel]]
            (assoc db :active-panel active-panel)))

(rf/reg-event-db
 ::set-post
 (fn-traced [db [_ post]]
            (assoc db :post post)))
