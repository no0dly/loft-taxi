import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import authSelector from "../../../selectors/auth";

export const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default connect(authSelector)(PrivateRoute);
