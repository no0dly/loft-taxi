import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  saveCardRequest,
  saveCardSuccess,
  saveCardFailure,
  getCardRequest,
  getCardSuccess,
  getCardFailure,
} from "../actions";

const isLoading = createReducer(false, {
  [saveCardRequest]: (state) => true,
  [saveCardSuccess]: (state) => false,
  [saveCardFailure]: (state) => false,
  [getCardRequest]: (state) => true,
  [getCardSuccess]: (state) => false,
  [getCardFailure]: (state) => false,
});

const isLoaded = createReducer(false, {
  [saveCardRequest]: (state) => false,
  [saveCardSuccess]: (state) => true,
  [saveCardFailure]: (state) => true,
  [getCardRequest]: (state) => false,
  [getCardSuccess]: (state) => true,
  [getCardFailure]: (state) => true,
});
const error = createReducer(false, {
  [saveCardRequest]: (state) => false,
  [saveCardSuccess]: (state) => false,
  [saveCardFailure]: (state) => true,
  [getCardRequest]: (state) => false,
  [getCardSuccess]: (state) => false,
  [getCardFailure]: (state) => true,
});

export default combineReducers({
  isLoading,
  isLoaded,
  error,
});
