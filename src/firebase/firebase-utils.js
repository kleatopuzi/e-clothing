import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYEtEErR0O6BzKZuzRYPBf8WTnycRc420",
  authDomain: "crown-a9f6f.firebaseapp.com",
  projectId: "crown-a9f6f",
  storageBucket: "crown-a9f6f.appspot.com",
  messagingSenderId: "427283228886",
  appId: "1:427283228886:web:b8787d17ee32a90770c177",
  measurementId: "G-43ZWFBKTST",
};
// console.log(event)
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const useRef = firestore.doc(`users/${userAuth.uid}`),
    snapshot = await useRef.get();
  console.log(snapshot);
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
