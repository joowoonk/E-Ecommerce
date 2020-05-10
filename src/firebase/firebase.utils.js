import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAIbrCS5uyPxF5mde7-KIxQHeGAUbA4-3c",
  authDomain: "e-commerce-b5b71.firebaseapp.com",
  databaseURL: "https://e-commerce-b5b71.firebaseio.com",
  projectId: "e-commerce-b5b71",
  storageBucket: "e-commerce-b5b71.appspot.com",
  messagingSenderId: "413843829203",
  appId: "1:413843829203:web:c954c6162fc452bcdbbf26",
  measurementId: "G-S415QK2NR8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
