(ns backwards-captain.blog.one
  (:require-macros [secretary.core :refer [defroute]])
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [backwards-captain.events :as events]
   [secretary.core :as secretary]
   ["highlight.js/lib/highlight" :as hl]))

(def title "Using Highlight.js")
(def body-preview "A droplet of Clojure")
(def body [:div "Clojure be like "
           [:pre {:style {:width 200 :margin "auto"}} [:code {:class "Clojure"
                                               :ref (fn [n] (when n (js/setTimeout #(hl/highlightBlock n) 0)))}
                                        "(+ 1 1) ;=> 2"]]])

(defn preview []
  [:div.card.m-2 {:style {:padding 20 :width 600 :margin "auto"}} 
   [:h3 title]
   [:p {:style {:font-size 15
                :font-style "italic"}} 
    body-preview]])

(defn panel []
  (set! (. js/document -title) title)
  [:div 
   [:h1 title]
   [:div body]])

(def post {:name "one" 
           :preview preview 
           :panel panel})

(defroute (str "/blog/" (post :name)) []
  (rf/dispatch [::events/set-active-panel :blog-panel])
  (rf/dispatch [::events/set-post post]))