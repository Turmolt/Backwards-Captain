(ns backwards-captain.blog.blank
  (:require-macros [secretary.core :refer [defroute]])
  (:require 
   [re-frame.core :as rf]
   [backwards-captain.events :as events]
  [secretary.core :as secretary]))

(def title "This is the title of the fancy first blog post")
(def body-preview "The body is very interesting")
(def body "Lorem ipsum testing things :)")

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
   [:p body]])

(def post {:name "blank" 
           :preview preview 
           :panel panel})

(defroute (str "/blog/" (post :name)) []
  (rf/dispatch [::events/set-active-panel :blog-panel])
  (rf/dispatch [::events/set-post post]))