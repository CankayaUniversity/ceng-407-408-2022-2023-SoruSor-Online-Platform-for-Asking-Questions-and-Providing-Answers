// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9ZjZcZrGpsfI46VB1lFOwUYSLpkNF-6E",
  authDomain: "sorusor-95546.firebaseapp.com",
  projectId: "sorusor-95546",
  storageBucket: "sorusor-95546.appspot.com",
  messagingSenderId: "975633818669",
  appId: "1:975633818669:web:58f9a0af3d34fd653404a4",
  measurementId: "G-HKCPSBJK6X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
