import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  logout,
  resetLoginStatus,
} from "../actions";

const isLoggedIn = createReducer(false, {
  [loginRequest]: (state) => false,
  [loginSuccess]: (state) => true,
  [loginFailure]: (state) => false,
  [registrationRequest]: (state) => false,
  [registrationSuccess]: (state) => true,
  [registrationFailure]: (state) => false,
  [logout]: (state) => false,
});

const token = createReducer(null, {
  [loginRequest]: (state) => null,
  [loginSuccess]: (state, actions) => actions.payload,
  [registrationRequest]: (state) => null,
  [registrationSuccess]: (state, actions) => actions.payload,
  [logout]: (state) => null,
});

const isLoading = createReducer(false, {
  [loginRequest]: (state) => true,
  [loginSuccess]: (state) => false,
  [loginFailure]: (state) => false,
  [registrationRequest]: (state) => true,
  [registrationSuccess]: (state) => false,
  [registrationFailure]: (state) => false,
  [resetLoginStatus]: (state) => false,
});

const isLoaded = createReducer(false, {
  [loginRequest]: (state) => false,
  [loginSuccess]: (state) => true,
  [loginFailure]: (state) => true,
  [registrationRequest]: (state) => false,
  [registrationSuccess]: (state) => true,
  [registrationFailure]: (state) => true,
  [resetLoginStatus]: (state) => false,
});
const error = createReducer(false, {
  [loginRequest]: (state) => false,
  [loginSuccess]: (state) => false,
  [loginFailure]: (state) => true,
  [registrationRequest]: (state) => false,
  [registrationSuccess]: (state) => false,
  [registrationFailure]: (state) => true,
  [resetLoginStatus]: (state) => false,
});

export default combineReducers({
  isLoggedIn,
  isLoading,
  isLoaded,
  error,
  token,
});
