import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { func, bool } from "prop-types";
import { Logo } from "loft-taxi-mui-theme";
import { NavLink, useHistory } from "react-router-dom";
import {
  Typography,
  Link,
  TextField,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";

import "./Login.css";

import { pageUrls } from "./constants";

import authSelector from "./selectors/auth";
import * as actions from "./redux/actions";

const proopTypes = {
  onPageChange: func.isRequired,
  isLoggedIn: bool.isRequired,
  isLoading: bool.isRequired,
  isLoaded: bool.isRequired,
  error: bool.isRequired,
};

function Login({ loginRequest, isLoggedIn, isLoading, isLoaded, error }) {
  const history = useHistory();
  const [formFields, setFields] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();

    loginRequest({ email: formFields.email, password: formFields.password });
  };

  useEffect(() => {
    if (isLoaded && !error) {
      history.push(pageUrls.MAP);
    } else if (isLoaded && error) {
      console.log("error");
    }
  }, [isLoaded, error]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="login" data-testid="login">
      <div className="login__container">
        <div className="login__logo">
          <Logo white animated />
        </div>
        <Paper className="login__form">
          <form className="form" onSubmit={login} autoComplete="off">
            <div className="title">
              <div className="title__header">
                <Typography variant="h4">Войти</Typography>
              </div>
              <div className="title__subtext">
                <Typography variant="body1">
                  Новый пользователь?{" "}
                  <Link to={pageUrls.REGISTRATION} component={NavLink}>
                    Зарегистрируйтесь
                  </Link>
                </Typography>
              </div>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className="form__field">
                  <TextField
                    id="email"
                    label="Имя пользователя"
                    type="email"
                    fullWidth
                    name="email"
                    value={formFields.email}
                    onChange={onChange}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form__field">
                  <TextField
                    id="password"
                    type="password"
                    label="Пароль"
                    fullWidth
                    name="password"
                    value={formFields.password}
                    onChange={onChange}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form__field">
                  <Button type="submit" variant="contained" color="primary">
                    Войти
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
}

Login.proopTypes = proopTypes;

export default connect(authSelector, actions)(Login);
