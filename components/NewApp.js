import React, { useState } from "react";
//import "./NewStyle.css";
import SignInForm from "./NewSignIn";
import SignUpForm from "./NewSignUp";

export default function NewApp() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <body  className="customBody">
    <div className="NewApp">
      <h2>Sign in/up Form</h2>
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container1">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1tag">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="buttontag ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1tag">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="buttontag ghost"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}
