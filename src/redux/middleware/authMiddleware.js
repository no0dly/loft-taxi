import axios from "axios";

import { loginRequest, loginSuccess, loginFailure } from "../actions";

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
        } else {
          store.dispatch(loginFailure());
        }
      })
      .catch((e) => {
        loginFailure();
      });
  }

  return next(action);
};
