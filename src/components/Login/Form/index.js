import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Link, TextField, Grid, Button } from "@material-ui/core";

import { pageUrls } from "../../../utils/constants";

import { useForm, Controller } from "react-hook-form";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export function LoginForm() {
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    dispatch(actions.loginRequest(data));
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Title>
        <TitleHeader>
          <Typography variant="h4">Войти</Typography>
        </TitleHeader>
        <TitleSub>
          <Typography variant="body1">
            Новый пользователь?{" "}
            <Link to={pageUrls.REGISTRATION} component={NavLink}>
              Зарегистрируйтесь
            </Link>
          </Typography>
        </TitleSub>
      </Title>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormField>
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
          </FormField>
        </Grid>
        <Grid item xs={12}>
          <FormField>
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
          </FormField>
        </Grid>
        <Grid item xs={12}>
          <FormField>
            <Button type="submit" variant="contained" color="primary">
              Войти
            </Button>
          </FormField>
        </Grid>
      </Grid>
    </form>
  );
}

const Title = styled.div`
  margin-bottom: 20px;
`;

const TitleHeader = styled.div`
  margin-bottom: 40px;
`;

const TitleSub = styled.div`
  margin-bottom: 10px;
`;

const FormField = styled.div`
  padding-bottom: 30px;
`;

export default LoginForm;
