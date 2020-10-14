import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  saveCardRequest,
  saveCardSuccess,
  saveCardFailure,
  getCardRequest,
  getCardSuccess,
  getCardFailure,
  changeRouteBoxView,
} from "../actions";

import { saveCard, getCard } from "../../api";

import { boxView } from "../../utils/constants";

export function* saveCardRequestSaga(action) {
  try {
    const { data } = yield call(saveCard, action.payload);
    if (data && data.success) {
      yield put(saveCardSuccess(data.token));
      yield put(changeRouteBoxView(boxView.ROUTE_SELECT));
    } else {
      yield put(saveCardFailure());
    }
  } catch (error) {
    yield put(saveCardFailure(error));
  }
}

export function* getCardRequestSaga(action) {
  try {
    const { data } = yield call(getCard, action.payload);
    if (data && !data.error) {
      yield put(getCardSuccess(data));
      yield put(changeRouteBoxView(boxView.ROUTE_SELECT));
    } else {
      yield put(getCardFailure());
    }
  } catch (error) {
    yield put(getCardFailure(error));
  }
}

export default function* () {
  yield all([
    takeLatest(saveCardRequest, saveCardRequestSaga),
    takeLatest(getCardRequest, getCardRequestSaga),
  ]);
}
