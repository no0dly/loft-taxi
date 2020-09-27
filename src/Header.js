import React from "react";
import { connect } from "react-redux";
import { Logo } from "loft-taxi-mui-theme";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import { func } from "prop-types";
import { Container, Paper, Button } from "@material-ui/core";

import { pageUrls } from "./constants";
import * as actions from "./redux/actions";

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
    <Paper
      elevation={4}
      tag="header"
      className="header"
      square
      data-testid="header"
    >
      <Container>
        <div className="flex">
          <div className="logo">
            <Logo />
          </div>
          <nav className="nav">
            <ul className="nav__list">
              {buttonList.map(({ url, text }) => (
                <li className="nav__item" key={text}>
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
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </Paper>
  );
}

Header.proopTypes = proopTypes;
export default connect(null, actions)(Header);
