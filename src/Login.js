import React, { useState, useContext } from "react";
import { func } from "prop-types";
import { Logo } from "loft-taxi-mui-theme";

import {
  Typography,
  Link,
  TextField,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";

import { AuthContext } from "./AuthContext";
import "./Login.css";

const proopTypes = {
  onPageChange: func.isRequired,
};

function Login({ onPageChange }) {
  const [formFields, setFields] = useState({
    email: "",
    password: "",
  });

  const auth = useContext(AuthContext);
  const onChange = (e) => {
    setFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    auth.login(formFields.email, formFields.password);
  };

  return (
    <div className="login" data-testid="login">
      <div className="login__container">
        <div className="login__logo">
          <Logo white animated />
        </div>
        <Paper className="login__form">
          <form className="form" onSubmit={login}>
            <div className="title">
              <div className="title__header">
                <Typography variant="h4">Войти</Typography>
              </div>
              <div className="title__subtext">
                <Typography variant="body1">
                  Новый пользователь?{" "}
                  <Link onClick={() => onPageChange("REGISTRATION")}>
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
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // onClick={() => onPageChange("MAP")}
                  >
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

export default Login;
