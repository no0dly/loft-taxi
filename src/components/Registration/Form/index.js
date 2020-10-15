import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Link, TextField, Grid, Button } from "@material-ui/core";

import { pageUrls } from "../../../utils/constants";

import { useForm, Controller } from "react-hook-form";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";

export function RegistrationForm() {
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
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
              as={TextField}
              control={control}
              defaultValue=""
              rules={{ required: true }}
              error={!!errors.email}
              helperText={errors.email && "Не должно быть пустым"}
            />
          </div>
        </Grid>
        <Grid item xs={6} className="form__field">
          <div className="form__field">
            <Controller
              label="Имя"
              fullWidth
              name="name"
              as={TextField}
              control={control}
              defaultValue=""
              rules={{ required: true }}
              error={!!errors.name}
              helperText={errors.name && "Не должно быть пустым"}
            />
          </div>
        </Grid>
        <Grid item xs={6} className="form__field">
          <div className="form__field">
            <Controller
              label="Фамилия"
              fullWidth
              name="surname"
              as={TextField}
              control={control}
              defaultValue=""
              rules={{ required: true }}
              error={!!errors.surname}
              helperText={errors.surname && "Не должно быть пустым"}
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
              as={TextField}
              control={control}
              defaultValue=""
              rules={{ required: true }}
              error={!!errors.password}
              helperText={errors.password && "Не должно быть пустым"}
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
