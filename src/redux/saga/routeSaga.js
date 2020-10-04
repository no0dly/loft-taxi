import { takeLatest, put, call, select } from "redux-saga/effects";
import { getRouteRequest, getRouteSuccess, getRouteFailure } from "../actions";
import { taxiRouteSelector } from "../../selectors/RouteBox";
import { getRoute } from "../../api";

export function* routeSaga() {
  try {
    const { from: address1, to: address2 } = yield select(taxiRouteSelector);
    const { data } = yield call(getRoute, address1, address2);
    if (data) {
      yield put(getRouteSuccess(data));
    } else {
      yield put(getRouteFailure());
    }
  } catch (error) {
    yield put(getRouteFailure(error));
  }
}

export default function* () {
  yield takeLatest(getRouteRequest, routeSaga);
}
