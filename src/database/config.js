import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAiL7JZvFt7gq-kCv0AabVjU2tFVDLUqE8",
  authDomain: "store-be1e1.firebaseapp.com",
  databaseURL: "https://store-be1e1.firebaseio.com",
  projectId: "store-be1e1",
  storageBucket: "store-be1e1.appspot.com",
  messagingSenderId: "185606745586",
  appId: "1:185606745586:web:fa03570cbb499ce03b0f6b",
  measurementId: "G-WD83C4CKLW"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();