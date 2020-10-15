import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Link, TextField, Grid, Button } from "@material-ui/core";

import { pageUrls } from "../../../utils/constants";

import { useForm, Controller } from "react-hook-form";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";

export function LoginForm() {
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    dispatch(actions.loginRequest(data));
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              label="Имя пользователя"
              type="email"
              fullWidth
              name="email"
              as={TextField}
              control={control}
              defaultValue=""
              rules={{ required: true }}
              error={!!errors.email}
              helperText={errors.email && "Не должно быть пустым"}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="form__field">
            <Controller
              type="password"
              label="Пароль"
              fullWidth
              name="password"
              as={TextField}
              control={control}
              defaultValue=""
              rules={{ required: true }}
              error={!!errors.email}
              helperText={errors.email && "Не должно быть пустым"}
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
  );
}

export default LoginForm;
