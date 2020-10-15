import React from "react";
import { connect } from "react-redux";
import { Logo } from "loft-taxi-mui-theme";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { func } from "prop-types";
import { Container, Paper, Button } from "@material-ui/core";

import { pageUrls } from "../../../utils/constants";
import * as actions from "../../../redux/actions";

const proopTypes = {
  logout: func.isRequired,
};

const buttonList = [
  {
    url: pageUrls.MAP,
    text: "Карта",
  },
  {
    url: pageUrls.PROFILE,
    text: "Профиль",
  },
  {
    type: "logout",
    text: "Выйти",
  },
];

export function Header({ logout }) {
  const history = useHistory();
  const onLogout = () => {
    logout();
    history.push(pageUrls.LOGIN);
  };
  return (
    <HeaderContainer elevation={4} tag="header" square data-testid="header">
      <Container>
        <Content>
          <div>
            <Logo />
          </div>
          <nav>
            <NavList>
              {buttonList.map(({ url, text }) => (
                <NavItem key={text}>
                  {url ? (
                    <Button to={url} component={Link} data-testid="nav-button">
                      {text}
                    </Button>
                  ) : (
                    <Button
                      to={url}
                      onClick={onLogout}
                      data-testid="nav-button"
                    >
                      {text}
                    </Button>
                  )}
                </NavItem>
              ))}
            </NavList>
          </nav>
        </Content>
      </Container>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Paper)`
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  padding: 10px;
`;

Header.proopTypes = proopTypes;
export default connect(null, actions)(Header);
