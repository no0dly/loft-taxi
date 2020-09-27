import axios from "axios";

import { saveCardRequest, saveCardSuccess, saveCardFailure } from "../actions";

const instance = axios.create({
  baseURL: "https://loft-taxi.glitch.me/",
});

export default (store) => (next) => (action) => {
  if (action.type === saveCardRequest.toString()) {
    const state = store.getState();
    const { token } = state.auth;

    instance
      .post("/card", {
        ...action.payload,
        token,
      })
      .then((resp) => {
        const { data } = resp;
        if (data && data.success) {
          store.dispatch(saveCardSuccess(data.token));
        } else {
          store.dispatch(saveCardFailure());
        }
      })
      .catch((e) => {
        saveCardFailure();
      });
  }
  return next(action);
};
