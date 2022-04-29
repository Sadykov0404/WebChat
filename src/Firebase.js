import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyANehkW_o4Vi9Y9IfQ33JIGtaB6VSqFhhI",
    authDomain: "web-chat-69123.firebaseapp.com",
    projectId: "web-chat-69123",
    storageBucket: "web-chat-69123.appspot.com",
    messagingSenderId: "413027728938",
    appId: "1:413027728938:web:671903b855719a8f8d8d53",
  })
  .auth();
