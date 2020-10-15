import React, { useEffect } from "react";
import { connect } from "react-redux";
import { func, bool } from "prop-types";
import styled from "styled-components";
import { Logo } from "loft-taxi-mui-theme";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/Login/Form";
import { Paper } from "@material-ui/core";
import img from "../../assets/login-background.jpg";

import { pageUrls } from "../../utils/constants";

import authSelector from "../../selectors/auth";
import * as actions from "../../redux/actions";

const proopTypes = {
  resetLoginStatus: func.isRequired,
  isLoaded: bool.isRequired,
  error: bool.isRequired,
};

export function Login({ resetLoginStatus, isLoaded, error }) {
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
    <LoginPage data-testid="login">
      <Container>
        <LogoContainer>
          <Logo white animated />
        </LogoContainer>
        <Form>
          <LoginForm />
        </Form>
      </Container>
    </LoginPage>
  );
}

const LoginPage = styled.div`
  background-image: url(${img});
  background-size: cover;
  height: 100vh;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  width: 300px;
`;

const Form = styled(Paper)`
  width: 500px;
  padding: 44px 60px;
  margin: 48px 0;
  background: #fff;
  box-sizing: border-box;
`;

Login.proopTypes = proopTypes;

export default connect(authSelector, actions)(Login);
