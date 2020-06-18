import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC1Bp9uoetGIm1H39KY1otT52GnEeI1JTI",
  authDomain: "crwn-db-49d66.firebaseapp.com",
  databaseURL: "https://crwn-db-49d66.firebaseio.com",
  projectId: "crwn-db-49d66",
  storageBucket: "crwn-db-49d66.appspot.com",
  messagingSenderId: "52148433110",
  appId: "1:52148433110:web:fc29213c86600841735977",
  measurementId: "G-NQPTFKJ8W8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
