import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  resetLoginStatus,
} from "../actions";

const isLoggedIn = createReducer(false, {
  [loginRequest]: (state) => false,
  [loginSuccess]: (state) => true,
  [loginFailure]: (state) => false,
  [logout]: (state) => false,
});

const token = createReducer(null, {
  [loginRequest]: (state) => null,
  [loginSuccess]: (state, actions) => actions.payload,
  [logout]: (state) => null,
});

const isLoading = createReducer(false, {
  [loginRequest]: (state) => true,
  [loginSuccess]: (state) => false,
  [loginFailure]: (state) => false,
  [resetLoginStatus]: (state) => false,
});

const isLoaded = createReducer(false, {
  [loginRequest]: (state) => false,
  [loginSuccess]: (state) => true,
  [loginFailure]: (state) => true,
  [resetLoginStatus]: (state) => false,
});
const error = createReducer(false, {
  [loginRequest]: (state) => false,
  [loginSuccess]: (state) => false,
  [loginFailure]: (state) => true,
  [resetLoginStatus]: (state) => false,
});

export default combineReducers({
  isLoggedIn,
  isLoading,
  isLoaded,
  error,
  token,
});
