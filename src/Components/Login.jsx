import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { auth } from "../Firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to WebChat!</h2>
        <p>Sign in with</p>
        <div className="sign-in">
          <div
            className="login-button google"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
          >
            <i class="fa-brands fa-google"></i>
          </div>
          <br /> <br />
          <div
            className="login-button facebook"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }
          >
            <i className="fa-brands fa-facebook-f"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
