import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from "../actions";

const isLoggedIn = createReducer(false, {
  [loginRequest]: (state) => false,
  [loginSuccess]: (state) => true,
  [loginFailure]: (state) => false,
  [logoutSuccess]: (state) => false,
});

const isLoading = createReducer(false, {
  [loginRequest]: (state) => true,
  [loginSuccess]: (state) => false,
  [loginFailure]: (state) => false,
  [logoutRequest]: (state) => true,
  [logoutSuccess]: (state) => false,
  [logoutFailure]: (state) => false,
});

const isLoaded = createReducer(false, {
  [loginRequest]: (state) => false,
  [loginSuccess]: (state) => true,
  [loginFailure]: (state) => true,
  [logoutRequest]: (state) => false,
  [logoutSuccess]: (state) => true,
  [logoutFailure]: (state) => true,
});
const error = createReducer(false, {
  [loginRequest]: (state) => false,
  [loginSuccess]: (state) => false,
  [loginFailure]: (state) => true,
  [logoutRequest]: (state) => false,
  [logoutSuccess]: (state) => false,
  [logoutFailure]: (state) => true,
});

export default combineReducers({
  isLoggedIn,
  isLoading,
  isLoaded,
  error,
});
