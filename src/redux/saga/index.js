import { fork } from "redux-saga/effects";
import authorizationSaga from "./authorizationSaga";
import registrationSaga from "./registrationSaga";
import paymentSaga from "./paymentSaga";
import addressListSaga from "./addressListSaga";
import routeSaga from "./routeSaga";

export default function* () {
  yield fork(authorizationSaga);
  yield fork(registrationSaga);
  yield fork(paymentSaga);
  yield fork(addressListSaga);
  yield fork(routeSaga);
}
