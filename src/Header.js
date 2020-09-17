import React from "react";
import { Logo } from "loft-taxi-mui-theme";
import "./Header.css";

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
    <header className="header">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <nav className="nav">
          <ul className="nav__list">
            {buttonList.map(({ name, text }) => (
              <li className="nav__item" key={name}>
                <button
                  className="nav__link"
                  name={name}
                  onClick={onPageChange}
                >
                  {text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
