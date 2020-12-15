import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


let firebaseConfig = {
  apiKey: "AIzaSyBCB8338S4WAqa3nBeiX62xJ7u2Ow8ZcYM",
  authDomain: "eseditor-1dbe0.firebaseapp.com",
  projectId: "eseditor-1dbe0",
  storageBucket: "eseditor-1dbe0.appspot.com",
  messagingSenderId: "270313603620",
  appId: "1:270313603620:web:b84b6ca1de44b4a4c5ceb1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase