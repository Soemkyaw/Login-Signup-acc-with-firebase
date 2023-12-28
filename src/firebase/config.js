import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDQXZSNzE0pq5fpJyfhHEe4eGnHqCEd2rk",
  authDomain: "vue-blog-system-b0e26.firebaseapp.com",
  projectId: "vue-blog-system-b0e26",
  storageBucket: "vue-blog-system-b0e26.appspot.com",
  messagingSenderId: "327298733836",
  appId: "1:327298733836:web:57c1a053079e1453675b29"
};

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()
let auth = firebase.auth()
let timestamp = firebase.firestore.FieldValue.serverTimestamp

export {db,auth,timestamp}

