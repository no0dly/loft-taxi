import { takeLatest, put, call, all } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure, logout } from "../actions";

import { login } from "../../api";

export function* loginRequestSaga(action) {
  try {
    const { data } = yield call(login, action.payload);
    if (data && data.success) {
      yield put(loginSuccess(data.token));
      localStorage.setItem("token", data.token);
    } else {
      yield put(loginFailure());
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* logoutSaga() {
  yield localStorage.removeItem("token");
}

export default function* () {
  yield all([
    takeLatest(loginRequest, loginRequestSaga),
    takeLatest(logout, logoutSaga),
  ]);
}
