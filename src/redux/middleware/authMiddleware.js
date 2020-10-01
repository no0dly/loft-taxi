import axios from "axios";

import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
} from "../actions";

const instance = axios.create({
  baseURL: "https://loft-taxi.glitch.me/",
});

export default (store) => (next) => (action) => {
  if (action.type === loginRequest.toString()) {
    instance
      .post("/auth", action.payload)
      .then((resp) => {
        const { data } = resp;
        if (data && data.success) {
          store.dispatch(loginSuccess(data.token));
          localStorage.setItem("token", data.token);
        } else {
          store.dispatch(loginFailure());
        }
      })
      .catch((e) => {
        loginFailure();
      });
  }

  if (action.type === registrationRequest.toString()) {
    instance
      .post("/register", action.payload)
      .then((resp) => {
        const { data } = resp;
        if (data && data.success) {
          store.dispatch(registrationSuccess(data.token));
          localStorage.setItem("token", data.token);
        } else {
          store.dispatch(registrationFailure());
        }
      })
      .catch((e) => {
        registrationFailure();
      });
  }
  if (action.type === logout.toString()) {
    localStorage.removeItem("token");
  }

  return next(action);
};
