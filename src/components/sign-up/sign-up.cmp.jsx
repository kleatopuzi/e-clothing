import React from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.cmp";
import CustomButton from "../custom-button/custom-button.cmp";
import { auth, createUserProfileDocument } from "../../firebase/firebase-utils";
// import { signInWithGoogle } from "../../firebase/firebase-utils.js";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.peventDefault();
    alert();
    const { displayName, email, password, confirmPassword } = this.state;
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      alert("Paswords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(users, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not Have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit" onClick={this.handleSubmit}>
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
