import { createAction } from "@reduxjs/toolkit";

export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFailure = createAction("LOGIN_FAILURE");

export const logoutRequest = createAction("LOGOUT_REQUEST");
export const logoutSuccess = createAction("LOGOUT_SUCCESS");
export const logoutFailure = createAction("LOGOUT_FAILURE");
