import React, { useEffect } from "react";
import { connect } from "react-redux";
import { func, bool } from "prop-types";
import { Logo } from "loft-taxi-mui-theme";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/Login/Form";
import { Paper } from "@material-ui/core";

import "./Login.css";

import { pageUrls } from "../../utils/constants";

import authSelector from "../../selectors/auth";
import * as actions from "../../redux/actions";

const proopTypes = {
  resetLoginStatus: func.isRequired,
  isLoaded: bool.isRequired,
  error: bool.isRequired,
};

export function Login({ resetLoginStatus, isLoaded, error }) {
  const history = useHistory();

  useEffect(() => {
    if (isLoaded && !error) {
      history.push(pageUrls.MAP);
    } else if (isLoaded && error) {
      console.log("error");
    }
    return () => {
      resetLoginStatus();
    };
  }, [isLoaded, error]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="login" data-testid="login">
      <div className="login__container">
        <div className="login__logo">
          <Logo white animated />
        </div>
        <Paper className="login__form">
          <LoginForm />
        </Paper>
      </div>
    </div>
  );
}

Login.proopTypes = proopTypes;

export default connect(authSelector, actions)(Login);
