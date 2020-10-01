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
