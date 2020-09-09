import React from "react";
import "./Header.css";

function Header({ onPageChange }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo__text">Logo</span>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <button className="nav__link" name="MAP" onClick={onPageChange}>
                Карта
              </button>
            </li>
            <li className="nav__item">
              <button
                className="nav__link"
                name="PROFILE"
                onClick={onPageChange}
              >
                Профиль
              </button>
            </li>
            <li className="nav__item">
              <button className="nav__link" name="LOGIN" onClick={onPageChange}>
                Войти
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
