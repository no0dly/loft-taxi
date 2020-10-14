import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Link, TextField, Grid, Button } from "@material-ui/core";

import { pageUrls } from "../../../utils/constants";

import { useForm, Controller } from "react-hook-form";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";

export function RegistrationForm() {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(actions.registrationRequest(data));
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              label="Адрес электронной почты"
              type="email"
              fullWidth
              name="email"
              required
              as={TextField}
              control={control}
              defaultValue=""
            />
          </div>
        </Grid>
        <Grid item xs={6} className="form__field">
          <div className="form__field">
            <Controller
              label="Имя"
              fullWidth
              name="name"
              required
              as={TextField}
              control={control}
              defaultValue=""
            />
          </div>
        </Grid>
        <Grid item xs={6} className="form__field">
          <div className="form__field">
            <Controller
              label="Фамилия"
              fullWidth
              name="surname"
              required
              as={TextField}
              control={control}
              defaultValue=""
            />
          </div>
        </Grid>
        <Grid item xs={12} className="form__field">
          <div className="form__field">
            <Controller
              type="password"
              label="Пароль"
              fullWidth
              name="password"
              required
              as={TextField}
              control={control}
              defaultValue=""
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
  );
}

export default RegistrationForm;
