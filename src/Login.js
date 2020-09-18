import React, { useState } from "react";
import "./Login.css";
import { func } from "prop-types";

const proopTypes = {
  onPageChange: func.isRequired,
};

function Login({ onPageChange }) {
  const [formFields, setFormField] = useState({
    name: "",
    password: "",
  });

  const onChange = (e) => {
    setFormField({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login">
      <div className="login__form">
        <form className="form">
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
              <label htmlFor="name" className="field__label">
                Имя
              </label>
              <input
                id="name"
                type="text"
                className="field__input"
                name="name"
                value={formFields.name}
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
                value={formFields.password}
                onChange={onChange}
              />
            </div>
            <div className="actions">
              <button
                className="actions__button"
                onClick={() => onPageChange("MAP")}
              >
                Войти
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.proopTypes = proopTypes;

export default Login;
