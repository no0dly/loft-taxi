import React, { useState, useContext } from "react";
import "./Login.css";
import { func } from "prop-types";

import { AuthContext } from "./App";

const proopTypes = {
  onPageChange: func.isRequired,
};

function Login({ onPageChange }) {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const auth = useContext(AuthContext);
  const onChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    auth.login(fields.email, fields.password);
  };

  return (
    <div className="login">
      <div className="login__form">
        <form className="form" onSubmit={login}>
          <div className="title">
            <div>
              <h3>Войти</h3>
            </div>
            <div>
              <span>
                Новый пользователь?{" "}
                <button onClick={() => onPageChange("REGISTRATION")}>
                  Зарегистрируйтесь
                </button>
              </span>
            </div>
          </div>
          <div className="form__container">
            <div className="field field--full">
              <label htmlFor="email" className="field__label">
                Имя
              </label>
              <input
                id="email"
                type="text"
                className="field__input"
                name="email"
                value={fields.email}
                onChange={onChange}
              />
            </div>
            <div className="field field--full">
              <label htmlFor="password" className="field__label">
                Пароль
              </label>
              <input
                id="password"
                type="password"
                className="field__input"
                name="password"
                value={fields.password}
                onChange={onChange}
              />
            </div>
            <div className="actions">
              <button className="actions__button">Войти</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.proopTypes = proopTypes;

export default Login;
