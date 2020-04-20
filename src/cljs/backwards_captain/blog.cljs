(ns backwards-captain.blog
  (:require 
   [backwards-captain.blog.blank :as p0]
   [backwards-captain.blog.one :as p1]
   [secretary.core :as secretary]
   [re-frame.core :as rf]))

(def posts [p1/post p0/post])

(defn post-preview [post]
  [:a {:href (str "#/blog/" (:name post))}
   [(post :preview)]])

(defn post-preview-panel []
  [:div
   (for [x posts] [post-preview x])])

(defn panel []
  (set! (. js/document -title) "My thoughts on things")
  [post-preview-panel])
