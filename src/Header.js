import React from "react";
import { Logo } from "loft-taxi-mui-theme";
import { Link } from "react-router-dom";
import "./Header.css";
import { func } from "prop-types";
import { Container, Paper, Button } from "@material-ui/core";

import { pageUrls } from "./constants";

const proopTypes = {
  onPageChange: func.isRequired,
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
    url: pageUrls.REGISTRATION,
    text: "Войти",
  },
];

function Header() {
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
                  <Button to={url} component={Link} data-testid="nav-button">
                    {text}
                  </Button>
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
export default Header;
