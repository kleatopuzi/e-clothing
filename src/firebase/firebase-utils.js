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

  const userRef = firestore.doc(`users/${userAuth.uid}`),
    snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

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

  // console.log(snapshot);
};
firebase.initializeApp(firebaseConfig);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    // console.log("accumulator snapshot", accumulator);

    return accumulator;
  }, {});
  // console.log("transformedCollection", transformedCollection);
};

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

// FUNCTION TO ADD DATA DYNAMICLY TO THE STORE

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();

//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };
