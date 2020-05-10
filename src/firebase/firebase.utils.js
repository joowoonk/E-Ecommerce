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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let createdAt = `${year}` + `/` + `${month}` + `/` + `${day}`;
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
