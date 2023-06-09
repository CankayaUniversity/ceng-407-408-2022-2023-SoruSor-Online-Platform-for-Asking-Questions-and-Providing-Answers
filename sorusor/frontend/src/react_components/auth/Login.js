import React from "react";
import "./Login.css"; // Importing the Login component's styling
import { signInWithPopup } from "firebase/auth"; // Importing the signInWithPopup method from Firebase's
import { auth, provider } from "../../firebase"; // Importing the Firebase authentication
import SoruSorLogo from "../../SoruSorDesign/LoginRegisterPage/logo.png"; // Importing SoruSor logo image
import GoogleLogo from "../../SoruSorDesign/LoginRegisterPage/google-logo.png"; // Importing Google logo image
import PeopleImg from "../../SoruSorDesign/LoginRegisterPage/people.png"; // Importing the background image

function Login() {
  // Define the handleSubmit function to handle sign in with Google
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider) // Wait for Firebase to popup a window that allows the user to choose a Google account to sign in with
      .then((result) => {
        // If sign in is successful, console log the result
        console.log(result);
      })
      .catch((error) => {
        // If there's an error, console log the error
        console.log(error);
      });
  };

  // Render the login page
  return (
    <div
      className="loginContainer" // Add a class for styling
      style={{ backgroundImage: `url(${PeopleImg})` }} // Set the background image
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
          By continuing you indicate that you agree to <br /> Sorusor’s Terms of
          Service and Privacy Policy. © SoruSor, Inc. 2023
        </p>
      </div>
    </div>
  );
}

export default Login;
