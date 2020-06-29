import React from "react";

import SignIn from "../sign-in/Sign-in.component";
import SignUp from "../Sign-Up/Sign-Up.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
