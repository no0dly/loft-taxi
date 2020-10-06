import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchAddressListRequest,
  fetchAddressListSuccess,
  fetchAddressListFailure,
} from "../actions";

import { fetchAddressList } from "../../api";

export function* addressListSaga() {
  try {
    const { data } = yield call(fetchAddressList);
    if (data && data.addresses) {
      yield put(fetchAddressListSuccess(data.addresses));
    } else {
      yield put(fetchAddressListFailure());
    }
  } catch (error) {
    yield put(fetchAddressListFailure(error));
  }
}

export default function* () {
  yield takeLatest(fetchAddressListRequest, addressListSaga);
}
