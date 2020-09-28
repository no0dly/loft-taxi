import React, { useEffect } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import "./App.css";
import Header from "./Header";
import View from "./View";
import { useLocation } from "react-router-dom";
import { pageUrls } from "./constants";

import * as actions from "./redux/actions";

const proopTypes = {
  loginSuccess: func.isRequired,
};

function App({ loginSuccess }) {
  const { pathname } = useLocation();

  const isLoginPages =
    pathname === pageUrls.LOGIN || pathname === pageUrls.HOME;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      loginSuccess(token);
    }
  });

  return (
    <div className="app" data-testid="app">
      {!isLoginPages && <Header />}
      <View />
    </div>
  );
}
App.proopTypes = proopTypes;
export default connect(null, actions)(App);
