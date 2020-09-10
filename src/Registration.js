import React, { useState } from "react";
import "./Registration.css";

function Registration({ onPageChange }) {
  const [formFields, setFormField] = useState({
    email: "",
    name: "",
    lastName: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormField({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="registration">
      <div className="registration__form">
        <form className="form">
          <div className="title">
            <div>
              <h3>Регистрация</h3>
            </div>
            <div>
              <span>
                Уже зарегистрирован?{" "}
                <button onClick={onPageChange} name="LOGIN">
                  Войти
                </button>
              </span>
            </div>
          </div>
          <div className="form__container">
            <div className="field field--full">
              <label htmlFor="email" className="field__label">
                Адрес электронной почты
              </label>
              <input
                id="email"
                type="email"
                className="field__input"
                name="email"
                value={formFields.email}
                onChange={onChangeHandler}
              />
            </div>
            <div className="field field--half">
              <label htmlFor="name" className="field__label">
                Имя
              </label>
              <input
                id="name"
                type="text"
                className="field__input"
                name="name"
                value={formFields.name}
                onChange={onChangeHandler}
              />
            </div>
            <div className="field field--half">
              <label htmlFor="last-name" className="field__label">
                Фамилия
              </label>
              <input
                id="last-name"
                type="text"
                className="field__input"
                name="lastName"
                value={formFields.lastName}
                onChange={onChangeHandler}
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
                onChange={onChangeHandler}
              />
            </div>
            <div className="actions">
              <button
                className="actions__button"
                name="MAP"
                onClick={onPageChange}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Registration;
