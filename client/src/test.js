import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

// ### METHOD 1 DOC
// firestore.collection("users").doc("J3EKziyysu7t7dz3UOw3");

firestore
  .collection("users")
  .doc("vAUA3C23z8rnRNjkDvp2")
  .collection("cartItems")
  .doc("a747xUllG6tH82HDzwS7");

// ### METHOD 2
firestore.doc("users/vAUA3C23z8rnRNjkDvp2/cartItems/a747xUllG6tH82HDzwS7");
firestore.collection("users/vAUA3C23z8rnRNjkDvp2/cartItems");

export default firestore;
