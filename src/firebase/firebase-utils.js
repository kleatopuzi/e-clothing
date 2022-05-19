import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   getBasicProfile,
// } from "firebase/auth";

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
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// signInOptions;
// export { signInWithPopup };

// import firebase from "firebase/compat/app";

// import {
//   ifmport
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   getBasicProfile,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAYEtEErR0O6BzKZuzRYPBf8WTnycRc420",
//   authDomain: "crown-a9f6f.firebaseapp.com",
//   projectId: "crown-a9f6f",
//   storageBucket: "crown-a9f6f.appspot.com",
//   messagingSenderId: "427283228886",
//   appId: "1:427283228886:web:b8787d17ee32a90770c177",
//   measurementId: "G-43ZWFBKTST",
// };
//     console.log(event)
// firebase.initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({ prompt: "select_account" });

// const auth = getAuth();
// auth.languageCode = "it";

// // console.log("auth" + auth, "provide" + provider);
// signInWithPopup(auth, provider);
// .then((result) => {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   const credential = provider.credentialFromResult(result);
//   const token = credential.accessToken;
//   // The signed-in user info.
//   const user = result.user;
//   // ...
// })
// .catch((error) => {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // The email of the user's account used.
//   const email = error.email;
//   // The AuthCredential type that was used.
//   const credential = GoogleAuthProvider.credentialFromError(error);
//   // ...
//   console.log(
//     "__ERR" + errorCode,
//     "__ERR__errorMSG" + errorMessage,
//     "__ERR__errorCredential" + credential
//   );
// });

// // signInOptions;
// export { signInWithPopup };

// export { signInWithPopup as default };
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAYEtEErR0O6BzKZuzRYPBf8WTnycRc420",
//   authDomain: "crown-a9f6f.firebaseapp.com",
//   projectId: "crown-a9f6f",
//   storageBucket: "crown-a9f6f.appspot.com",
//   messagingSenderId: "427283228886",
//   appId: "1:427283228886:web:b8787d17ee32a90770c177",
//   measurementId: "G-43ZWFBKTST",
// };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// firebase.auth().useDeviceLanguage();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// // export const signInWithGoogle = () => auth.signInWithPopup(provider);
// firebase
//   .auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });

// export default firebase;

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "API_KEY",
//   authDomain: "PROJECT_ID.firebaseapp.com",
//   databaseURL: "https://PROJECT_ID.firebaseio.com",
//   projectId: "PROJECT_ID",
//   storageBucket: "PROJECT_ID.appspot.com",
//   messagingSenderId: "SENDER_ID",
//   appId: "APP_ID",
//   measurementId: "G-MEASUREMENT_ID",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// auth.onAuthStateChanged((user) => {
//   // Check for user status
// });
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
