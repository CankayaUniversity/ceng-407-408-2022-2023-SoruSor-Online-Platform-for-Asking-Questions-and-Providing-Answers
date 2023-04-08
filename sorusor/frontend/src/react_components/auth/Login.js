import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="loginContainer">
      <div className="loginContent">
        <img src="" alt="logo" />
        <button onClick={handleSubmit} className="btn-login">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
