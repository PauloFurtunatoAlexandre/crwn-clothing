import React from "react";

import FormInput from "../form-input/Form-imput.component";
import CustomButton from "../custom-button/Custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/Firebase.utils";

import "./Sign-Up.styles.scss";

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
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match!");
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
        confirmPassword: "",
      });

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            label="Display Name"
            value={this.displayName}
            requiered
          />
          <FormInput
            type="email"
            name="Email"
            onChange={this.handleChange}
            label="Email"
            value={this.email}
            requiered
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            label="Password"
            value={this.password}
            requiered
          />
          <FormInput
            type="text"
            name="confirmPassword"
            onChange={this.handleChange}
            label="Confirm Password"
            value={this.confirmPassword}
            requiered
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </span>
      </div>
    );
  }
}

export default SignUp;
