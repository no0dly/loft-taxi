import { createAction } from "@reduxjs/toolkit";

export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFailure = createAction("LOGIN_FAILURE");
export const resetLoginStatus = createAction("LOGIN_STATUS_RESET");

export const logout = createAction("LOGOUT");

export const saveCardRequest = createAction("SAVE_CARD_REQUEST");
export const saveCardSuccess = createAction("SAVE_CARD_SUCCESS");
export const saveCardFailure = createAction("SAVE_CARD_FAILURE");

export const registrationRequest = createAction("REGISTRATION_REQUEST");
export const registrationSuccess = createAction("REGISTRATION_SUCCESS");
export const registrationFailure = createAction("REGISTRATION_FAILURE");

export const profileFieldChange = createAction("PROFILE_FIELD_CHANGE");

export const routeFieldChange = createAction("ROUTE_FIELD_CHANGE");

export const fetchAddressListRequest = createAction(
  "FETCH_ADDRESS_LIST_REQUEST"
);
export const fetchAddressListSuccess = createAction(
  "FETCH_ADDRESS_LIST_SUCCESS"
);
export const fetchAddressListFailure = createAction(
  "FETCH_ADDRESS_LIST_FAILURE"
);

export const getRouteRequest = createAction("GET_ROUTE_REQUEST");
export const getRouteSuccess = createAction("GET_ROUTE_SUCCESS");
export const getRouteFailure = createAction("GET_ROUTE_FAILURE");

export const getCardRequest = createAction("GET_CARD_REQUEST");
export const getCardSuccess = createAction("GET_CARD_SUCCESS");
export const getCardFailure = createAction("GET_CARD_FAILURE");

export const changeRouteBoxView = createAction("CHANGE_ROUTE_BOX_VIEW");
