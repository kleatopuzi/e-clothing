import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createUserProfileDocument, auth } from "./firebase/firebase-utils.js";
import "./App.css";

import HomePage from "./pages/homepage/homepage.cmp";
import ShopPage from "./pages/shop/shop.cmp";
import Header from "./components/header/header.cmp";
import CheckoutPage from "./pages/checkout/checkout.cmp";
import SignInAndSignUpPage from "./pages/signin-signup/signIn-signUp.cmp";
import { setCurrentUser } from "./redux/user/user.actions.js";
import { selectCurrentUser } from "./redux/user/user.selectors.js";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
        // console.log("snap", this.state);
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop/*" element={<ShopPage />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          {/* <Route exact path="/signin" element={<Navigate replace to="/" />} /> */}

          <Route
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          ></Route>

          {/* <Route exact path="/signin" render={<SignInAndSignUpPage />}></Route> */}
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// METHOD 1

// const AppLayout = () =>
// this.props.currentUser ? (
//   <Navigate to="/" replace />
// ) : (
//   <SignInAndSignUpPage />
// );
