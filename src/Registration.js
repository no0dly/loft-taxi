import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { func, bool } from "prop-types";
import { Logo } from "loft-taxi-mui-theme";
import {
  Typography,
  Link,
  TextField,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";
import "./Registration.css";

import { pageUrls } from "./constants";

import * as actions from "./redux/actions";
import authSelector from "./selectors/auth";

const proopTypes = {
  registrationRequest: func.isRequired,
  resetLoginStatus: func.isRequired,
  isLoaded: bool.isRequired,
  error: bool.isRequired,
};

function Registration({
  registrationRequest,
  resetLoginStatus,
  isLoaded,
  error,
}) {
  const [formFields, setFormField] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });
  const history = useHistory();

  const onChange = (e) => {
    setFormField({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

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

  const onSubmit = (e) => {
    e.preventDefault();
    registrationRequest(formFields);
  };

  return (
    <div className="registration" data-testid="registration">
      <div className="registration__container">
        <div className="registration__logo">
          <Logo white animated />
        </div>
        <Paper className="registration__form">
          <form className="form" onSubmit={onSubmit}>
            <div className="title">
              <div className="title__header">
                <Typography variant="h4">Регистрация</Typography>
              </div>
              <div className="title__subtext">
                <Typography variant="body1">
                  Уже зарегистрирован?{" "}
                  <Link to={pageUrls.LOGIN} component={NavLink}>
                    Войти
                  </Link>
                </Typography>
              </div>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className="form__field">
                  <TextField
                    id="email"
                    label="Адрес электронной почты"
                    type="email"
                    fullWidth
                    name="email"
                    value={formFields.email}
                    required
                    onChange={onChange}
                  />
                </div>
              </Grid>
              <Grid item xs={6} className="form__field">
                <div className="form__field">
                  <TextField
                    id="name"
                    label="Имя"
                    fullWidth
                    name="name"
                    value={formFields.name}
                    required
                    onChange={onChange}
                  />
                </div>
              </Grid>
              <Grid item xs={6} className="form__field">
                <div className="form__field">
                  <TextField
                    id="surname"
                    label="Фамилия"
                    fullWidth
                    name="surname"
                    value={formFields.surname}
                    required
                    onChange={onChange}
                  />
                </div>
              </Grid>
              <Grid item xs={12} className="form__field">
                <div className="form__field">
                  <TextField
                    id="password"
                    type="password"
                    label="Пароль"
                    fullWidth
                    name="password"
                    value={formFields.password}
                    required
                    onChange={onChange}
                  />
                </div>
              </Grid>
              <Grid item xs={12} className="form__field form__action">
                <div className="form__field">
                  <Button type="submit" variant="contained" color="primary">
                    Зарегистрироваться
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

Registration.proopTypes = proopTypes;
export default connect(authSelector, actions)(Registration);
