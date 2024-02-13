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

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProtected from "./ProtectedRoutes/UserProtected";
import AdminProtected from "./ProtectedRoutes/AdminProtected";
import PrivateRoutes from "./ProtectedRoutes/PrivateRoutes";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="register" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<UserProtected />}>
            <Route path="userhome" element={<UserHome />} />
          </Route>
          <Route element={<AdminProtected />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
