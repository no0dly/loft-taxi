import { fork } from "redux-saga/effects";
import authorizationSaga from "./authorizationSaga";
import registrationSaga from "./registrationSaga";
import paymentSaga from "./paymentSaga";

export default function* () {
  yield fork(authorizationSaga);
  yield fork(registrationSaga);
  yield fork(paymentSaga);
}
