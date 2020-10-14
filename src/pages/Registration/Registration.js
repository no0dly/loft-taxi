import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { func, bool } from "prop-types";
import { Logo } from "loft-taxi-mui-theme";
import { Paper } from "@material-ui/core";
import "./Registration.css";

import { pageUrls } from "../../utils/constants";

import * as actions from "../../redux/actions";
import authSelector from "../../selectors/auth";

import RegistrationForm from "../../components/Registration/Form";

const proopTypes = {
  resetLoginStatus: func.isRequired,
  isLoaded: bool.isRequired,
  error: bool.isRequired,
};

export function Registration({ resetLoginStatus, isLoaded, error }) {
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
    <div className="registration" data-testid="registration">
      <div className="registration__container">
        <div className="registration__logo">
          <Logo white animated />
        </div>
        <Paper className="registration__form">
          <RegistrationForm />
        </Paper>
      </div>
    </div>
  );
}

Registration.proopTypes = proopTypes;
export default connect(authSelector, actions)(Registration);
