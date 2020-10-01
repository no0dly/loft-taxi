import { takeLatest, put, call } from "redux-saga/effects";
import { saveCardRequest, saveCardSuccess, saveCardFailure } from "../actions";

import { saveCard } from "../../api";

export function* saveCardRequestSaga(action) {
  try {
    const { data } = yield call(saveCard, action.payload);
    if (data && data.success) {
      yield put(saveCardSuccess(data.token));
    } else {
      yield put(saveCardFailure());
    }
  } catch (error) {
    yield put(saveCardFailure(error));
  }
}

export default function* () {
  yield takeLatest(saveCardRequest, saveCardRequestSaga);
}
