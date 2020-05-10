import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.compoent";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    };
  }
  hnadleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmedPassword } = this.state;

    if (password !== confirmedPassword) {
      alert("passwords don't match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmedPassword: "",
      });

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
  };

  hnadleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.hnadleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.hnadleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.hnadleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.hnadleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={this.hnadleChange}
            label="Confirmed Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
