import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { func, bool } from "prop-types";
import { Logo } from "loft-taxi-mui-theme";
import { Paper } from "@material-ui/core";
import img from "../../assets/login-background.jpg";

import { pageUrls } from "../../utils/constants";

import * as actions from "../../redux/actions";
import authSelector from "../../selectors/auth";

import RegistrationForm from "../../components/Registration/Form";

const proopTypes = {
  resetLoginStatus: func.isRequired,
  isLoaded: bool.isRequired,
  error: bool.isRequired,
};

export function Registration({ resetLoginStatus, isLoaded, error }) {
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
    <RegistrationPage data-testid="registration">
      <Container>
        <LogoContainer>
          <Logo white animated />
        </LogoContainer>
        <Form>
          <RegistrationForm />
        </Form>
      </Container>
    </RegistrationPage>
  );
}

const RegistrationPage = styled.div`
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

Registration.proopTypes = proopTypes;
export default connect(authSelector, actions)(Registration);
