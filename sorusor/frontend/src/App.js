import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import SoruSor from "./react_components/SoruSor";
import { login, selectUser } from "./feature/userSlice";
import Login from "./react_components/auth/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../src/react_components/Header";
import HomePage from "../src/react_components/navbarPages/Files/HomePage";
import NotificationsPage from "../src/react_components/navbarPages/Files/NotificationsPage";
import PeoplePage from "../src/react_components/navbarPages/Files/PeoplePage";
import AssignmentPage from "../src/react_components/navbarPages/Files/AssignmentPage";
import FeaturedPlayListPage from "../src/react_components/navbarPages/Files/FeaturedPlayListPage";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/assignment" element={<AssignmentPage />} />
          <Route path="/featured-playlist" element={<FeaturedPlayListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
