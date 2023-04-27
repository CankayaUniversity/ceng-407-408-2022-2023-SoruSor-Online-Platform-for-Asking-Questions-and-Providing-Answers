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
import PeoplePage from "../src/react_components/navbarPages/Files/PeoplePage";
import AssignmentPage from "../src/react_components/navbarPages/Files/AssignmentPage";
import FeaturedPlayListPage from "../src/react_components/navbarPages/Files/FeaturedPlayListPage";

import Psychology from "../src/react_components/sidebarPages/Files/Psychology";
import History from "../src/react_components/sidebarPages/Files/History";
import Business from "../src/react_components/sidebarPages/Files/Business";
import Cooking from "../src/react_components/sidebarPages/Files/Cooking";
import Music from "../src/react_components/sidebarPages/Files//Music";
import Science from "../src/react_components/sidebarPages/Files//Science";
import Health from "../src/react_components/sidebarPages/Files//Health";
import Movies from "../src/react_components/sidebarPages/Files//Movies";
import Technology from "../src/react_components/sidebarPages/Files//Technology";
import Education from "../src/react_components/sidebarPages/Files//Education";
import DiscoverSpaces from "../src/react_components/sidebarPages/Files/DiscoverSpaces";

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
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/assignment" element={<AssignmentPage />} />
          <Route path="/featured-playlist" element={<FeaturedPlayListPage />} />

          <Route path="/psychology" element={<Psychology />} />
          <Route path="/history" element={<History />} />
          <Route path="/business" element={<Business />} />
          <Route path="/cooking" element={<Cooking />} />
          <Route path="/music" element={<Music />} />
          <Route path="/science" element={<Science />} />
          <Route path="/health" element={<Health />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/education" element={<Education />} />
          <Route path="/discoverspaces" element={<DiscoverSpaces />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
