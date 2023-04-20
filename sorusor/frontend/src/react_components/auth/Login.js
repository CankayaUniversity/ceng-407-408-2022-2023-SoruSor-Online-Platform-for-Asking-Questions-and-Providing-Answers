import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import SoruSorLogo from "../../SoruSorDesign/LoginRegisterPage/logo.png";
import GoogleLogo from "../../SoruSorDesign/LoginRegisterPage/google-logo.png";
import PeopleImg from "../../SoruSorDesign/LoginRegisterPage/people.png";

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
    <div
      className="loginContainer"
      style={{ backgroundImage: `url(${PeopleImg})` }}
    >
      <div className="loginContent">
        <h1 className="loginTitle">Soru Sor</h1>
        <p className="loginSubtitle">
          A Place to Ask Questions and Gain Knowledge
        </p>
        <img src={SoruSorLogo} alt="logo" className="loginLogo" />
        <button onClick={handleSubmit} className="btn-login">
          <img src={GoogleLogo} alt="Google Logo" className="googleLogo" />
          Login with Google
        </button>
        <p className="termsAndPrivacy">
          By continuing you indicate that you agree to <br /> Quora’s Terms of
          Service and Privacy Policy. © SoruSor, Inc. 2023
        </p>
      </div>
    </div>
  );
}

export default Login;
