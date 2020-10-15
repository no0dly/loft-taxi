import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
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
      <Title>
        <TitleHeader>
          <Typography variant="h4">Регистрация</Typography>
        </TitleHeader>
        <TitleSub>
          <Typography variant="body1">
            Уже зарегистрирован?{" "}
            <Link to={pageUrls.LOGIN} component={NavLink}>
              Войти
            </Link>
          </Typography>
        </TitleSub>
      </Title>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormField>
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
          </FormField>
        </Grid>
        <Grid item xs={6}>
          <FormField>
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
          </FormField>
        </Grid>
        <Grid item xs={6}>
          <FormField>
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
              error={!!errors.password}
              helperText={errors.password && "Не должно быть пустым"}
            />
          </FormField>
        </Grid>
        <Grid item xs={12}>
          <FormActionField>
            <Button type="submit" variant="contained" color="primary">
              Зарегистрироваться
            </Button>
          </FormActionField>
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

const FormActionField = styled.div`
  padding-bottom: 30px;
  text-align: right;
`;

export default RegistrationForm;
