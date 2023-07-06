import React from "react";

import { Routes } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { Login } from "./components/pages/auth/Login";

export const AppRoutes = ({
  isLoggedIn,
  setIsLoggedIn,
  setUserName,
  setIsAdmin,
  isAdmin,
}) => {
  return (
    <Routes>
      <PublicRoute isLoggedIn={isLoggedIn} path="/login" exact>
        <Login
          setIsLoggedIn={setIsLoggedIn}
          setUserName={setUserName}
          setIsAdmin={setIsAdmin}
        />
      </PublicRoute>
    </Routes>
  );
};
