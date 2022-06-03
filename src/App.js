import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import HomePage from "./pages/homepage/homepage.cmp";
import ShopPage from "./pages/shop/shop.cmp";
import Header from "./components/header/header.cmp";
import CheckoutPage from "./pages/checkout/checkout.cmp";
import SignInAndSignUpPage from "./pages/signin-signup/signIn-signUp.cmp";
import { selectCurrentUser } from "./redux/user/user.selectors.js";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";

// class App extends React.Component {
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

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
            currentUser ? <Navigate to="/" replace /> : <SignInAndSignUpPage />
          }
        ></Route>

        {/* <Route exact path="/signin" render={<SignInAndSignUpPage />}></Route> */}
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// METHOD 1

// const AppLayout = () =>
// this.props.currentUser ? (
//   <Navigate to="/" replace />
// ) : (
//   <SignInAndSignUpPage />
// );
