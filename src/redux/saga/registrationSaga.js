import { takeLatest, put, call } from "redux-saga/effects";
import {
  registrationRequest,
  registrationSuccess,
  registrationFailure,
} from "../actions";

import { registration } from "../../api";

export function* registrationRequestSaga(action) {
  try {
    const { data } = yield call(registration, action.payload);
    if (data && data.success) {
      yield put(registrationSuccess(data.token));
      localStorage.setItem("token", data.token);
    } else {
      yield put(registrationFailure());
    }
  } catch (error) {
    yield put(registrationFailure(error));
  }
}

export default function* () {
  yield takeLatest(registrationRequest, registrationRequestSaga);
}
