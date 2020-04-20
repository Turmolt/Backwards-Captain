(ns backwards-captain.views
  (:require
   [re-frame.core :as rf]
   [backwards-captain.blog :as blog]
   [backwards-captain.subs :as subs]
   ))


;; home

(defn navitem [title route]
  [:div 
   [:a.nav-link
    {:href (str "#/" route)
     :style {:color "rgb(90,90,90)"
             :padding-top 60
             :padding-right 30
             :padding-left 30
             :margin "auto"}}
    title]])

(defn banner []
  [:nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
   {:style {:height 100}}
   [:span.dot {:style
               {:height 215 :width 215
                :background-color "rgb(52, 58, 64)"
                :border-radius "50%"
                :position "fixed"
                :z-index 10
                :left "50%"
                :transform "translate(-50%, 22.5%)"}}]
   [:div {:style {:color "white"
                  :position "fixed"
                  :left "50%"
                  :z-index 12
                  :transform "translate(-50%, 25%)"
                  :font-size 30}}
    [:div.box.flex {:style {:align-items "center"
                            :display "flex" 
                            :padding-right 20}}
     [navitem "About" ""]
     [:img {:src "img/BackwardsCaptainLogoLight.png" 
            :width 190 
            :style {:align-self "center"}}]
     [navitem "Blog" "blog"]]]])

(defn navbar []
  [:div
   [banner]
   [:nav.navbar.navbar-expand-lg
    {:style {:background "linear-gradient(rgb(150,150,150),white)"}}
    [:ul.navbar-nav.navbar-dark
     {:style {:padding-left 5 :padding-bottom 50}}
     [:div.navbar-nav {:style {:height 45 }}
      
      ]]]])

(defn home-panel []
  (set! (. js/document -title) "Welcome Aboard!")
  [:div {:style {:display "flex" :justify-content "center" :text-align "center"}}
   [:div {:style {:width 500}}
    [:h3 "My name is Sam Gates"]
    [:img {:src "img/selfie.jpg" :width 250 :style {:float "left"}}]
    [:li "Is a programmer"] [:li "Loves Clojure"] [:li "Has a dog"]]
   ])

;; blog

(defn blog-panel []
  (let [post @(rf/subscribe [::subs/post])]
    [:div {:style {:display "flex" 
                   :justify-content "center" 
                   :text-align "center"}}
     (if (nil? post)
       [blog/panel]
       [(post :panel)])]))

;; main

(defn- panels [panel-name]
  [:div 
   [navbar]
   (case panel-name
     :home-panel [home-panel]
     :blog-panel [blog-panel]
     [:div])])

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (rf/subscribe [::subs/active-panel])]
    [show-panel @active-panel]))
