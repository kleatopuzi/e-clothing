import React from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.cmp";
import CustomButton from "../custom-button/custom-button.cmp";
import { signInWithGoogle } from "../../firebase/firebase-utils.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
    // console.log(event);
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span> Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google auth
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;