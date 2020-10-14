import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  routeFieldChange,
  fetchAddressListRequest,
  fetchAddressListSuccess,
  getRouteRequest,
  getRouteSuccess,
  changeRouteBoxView,
  routeFieldReset,
} from "../actions";

import { boxView } from "../../constants";

const from = createReducer("", {
  [routeFieldChange]: (state, actions) =>
    actions.payload.name === "from" ? actions.payload.value : state,
  [routeFieldReset]: (state) => "",
});

const to = createReducer("", {
  [routeFieldChange]: (state, actions) =>
    actions.payload.name === "to" ? actions.payload.value : state,
  [routeFieldReset]: (state) => "",
});

const addressList = createReducer([], {
  [fetchAddressListRequest]: (state) => [],
  [fetchAddressListSuccess]: (state, actions) => actions.payload,
});

const taxiRoute = createReducer([], {
  [getRouteRequest]: (state) => [],
  [getRouteSuccess]: (state, actions) => actions.payload,
});

const routeBoxView = createReducer(boxView.NO_CARD, {
  [changeRouteBoxView]: (state, actions) => actions.payload,
});

export default combineReducers({
  from,
  to,
  addressList,
  taxiRoute,
  routeBoxView,
});
