import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Map from "./Map";
import Profile from "./Profile";
import Registration from "./Registration";
import { pageUrls } from "./constants";
import PrivatRoute from "./PrivateRoute";

function View() {
  return (
    <Switch>
      <Route path={pageUrls.HOME} component={Registration} exact />
      <Route path={pageUrls.LOGIN} component={Login} />
      <PrivatRoute path={pageUrls.PROFILE} component={Profile} />
      <PrivatRoute path={pageUrls.MAP} component={Map} />
      <Redirect from={pageUrls.REGISTRATION} to={pageUrls.HOME} />
    </Switch>
  );
}
export default View;
