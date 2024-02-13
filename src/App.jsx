import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Authentication/LoginPage";
import SignupPage from "./pages/Authentication/SignupPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import UserHome from "./components/Home/UserHome";
import UserProfile from "./components/Dashboard/UserProfile";
import Settings from "./components/Dashboard/Settings";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register/" element={<SignupPage />} />
          <Route path="login/" element={<LoginPage />} />
          <Route path="dashboard/" element={<Dashboard />} />
          <Route path="userhome/" element={<UserHome />} />
          <Route path="userprofile/" element={<UserProfile />} />
          <Route path="settings/" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
