import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import "./App.css";
import Header from "./components/Common/Header";
import View from "./pages";
import { useLocation } from "react-router-dom";
import { pageUrls } from "./utils/constants";

import * as actions from "./redux/actions";

const proopTypes = {
  loginSuccess: func.isRequired,
  getCardRequest: func.isRequired,
};

export function App({ loginSuccess, getCardRequest }) {
  const { pathname } = useLocation();
  const [initialLoad, setInitialLoad] = useState(true);

  const isLoginPages =
    pathname === pageUrls.LOGIN || pathname === pageUrls.HOME;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      loginSuccess(token);
      getCardRequest(token);
    }
    setInitialLoad(false);
  }, [loginSuccess, getCardRequest, setInitialLoad]);

  return (
    <div className="app" data-testid="app">
      {!isLoginPages && <Header />}
      {!initialLoad && <View />}
    </div>
  );
}
App.proopTypes = proopTypes;
export default connect(null, actions)(App);
