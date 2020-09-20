import React, { useState } from "react";
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
import "./Registration.css";

const proopTypes = {
  onPageChange: func.isRequired,
};

function Registration({ onPageChange }) {
  const [formFields, setFormField] = useState({
    email: "",
    name: "",
    lastName: "",
    password: "",
  });

  const onChange = (e) => {
    setFormField({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="registration">
      <div className="registration__container">
        <div className="registration__logo">
          <Logo white animated />
        </div>
        <Paper className="registration__form">
          <form className="form">
            <div className="title">
              <div className="title__header">
                <Typography variant="h4">Регистрация</Typography>
              </div>
              <div className="title__subtext">
                <Typography variant="body1">
                  Уже зарегистрирован?{" "}
                  <Link onClick={() => onPageChange("LOGIN")}>Войти</Link>
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
                    onChange={onChange}
                  />
                </div>
              </Grid>
              <Grid item xs={6} className="form__field">
                <div className="form__field">
                  <TextField
                    id="lastName"
                    label="Фамилия"
                    fullWidth
                    name="lastName"
                    value={formFields.lastName}
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
                    onChange={onChange}
                  />
                </div>
              </Grid>
              <Grid item xs={12} className="form__field form__action">
                <div className="form__field">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onPageChange("MAP")}
                  >
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
export default Registration;
