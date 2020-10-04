import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  routeFieldChange,
  fetchAddressListRequest,
  fetchAddressListSuccess,
  //   fetchAddressListFailure,
  getRouteRequest,
  getRouteSuccess,
  // getRouteFailure,
} from "../actions";

const from = createReducer("", {
  [routeFieldChange]: (state, actions) =>
    actions.payload.name === "from" ? actions.payload.value : state,
});

const to = createReducer("", {
  [routeFieldChange]: (state, actions) =>
    actions.payload.name === "to" ? actions.payload.value : state,
});

const addressList = createReducer([], {
  [fetchAddressListRequest]: (state) => [],
  [fetchAddressListSuccess]: (state, actions) => actions.payload,
});

const taxiRoute = createReducer([], {
  [getRouteRequest]: (state) => [],
  [getRouteSuccess]: (state, actions) => actions.payload,
});

export default combineReducers({
  from,
  to,
  addressList,
  taxiRoute,
});
