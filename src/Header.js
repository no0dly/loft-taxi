import React from "react";
import { Logo } from "loft-taxi-mui-theme";
import "./Header.css";
import { func } from "prop-types";
import { Button, Container, Paper } from "@material-ui/core";

const proopTypes = {
  onPageChange: func.isRequired,
};

const buttonList = [
  {
    name: "MAP",
    text: "Карта",
  },
  {
    name: "PROFILE",
    text: "Профиль",
  },
  {
    name: "REGISTRATION",
    text: "Войти",
  },
];

function Header({ onPageChange }) {
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
              {buttonList.map(({ name, text }) => (
                <li className="nav__item" key={name}>
                  <Button onClick={() => onPageChange(name)}>{text}</Button>
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
