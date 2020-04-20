(ns backwards-captain.post-creator
  (:require [clojure.java.io :as io]
            [clojure.string :as str]))

(defn create-post [name]
  (let [dir "src/cljs/backwards_captain/blog/"
        t  (slurp (str dir "blank.cljs"))]
    (spit (str dir name ".cljs") (str/replace t #"blank" name))))


