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
        <h1 className="loginTitle">Soru Sor</h1>
        <p className="loginSubtitle">
          A place to ask questions and gain knowledge
        </p>
        <img src="" alt="logo" className="loginLogo" />
        <button onClick={handleSubmit} className="btn-login">
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;