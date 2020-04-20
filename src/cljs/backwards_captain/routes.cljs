(ns backwards-captain.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import [goog History]
           [goog.history EventType])
  (:require
   [secretary.core :as secretary]
   [goog.events :as gevents]
   [re-frame.core :as rf]
   [backwards-captain.events :as events]
   [backwards-captain.blog :as blog]
   ))

(defn hook-browser-navigation! []
  (doto (History.)
    (gevents/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  ;; --------------------
  ;; define routes here
  (defroute "/" []
    (rf/dispatch [::events/set-active-panel :home-panel])
    )
  
  (defroute "/blog" []
    (rf/dispatch [::events/set-active-panel :blog-panel])
    (rf/dispatch [::events/set-post nil]))
  

  ;; --------------------
  (hook-browser-navigation!))
