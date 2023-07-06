import React from "react";
import { Route } from "react-router-dom";

export const PublicRoute = ({ isLoggedIn, children, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={() => {
        if (!isLoggedIn) return children;
      }}
    />
  );
};
