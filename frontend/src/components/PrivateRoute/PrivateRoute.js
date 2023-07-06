import React from "react";
import { Routes, Route } from "react-router-dom";

export const PrivateRoute = ({ isLoggedIn, children, path }) => {
  return (
    <Routes
      path={path}
      render={() => {
        if (isLoggedIn) return children;
        return <Route to="/login" />;
      }}
    />
  );
};
