import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { saveCardRequest, saveCardSuccess, saveCardFailure } from "../actions";

const isLoading = createReducer(false, {
  [saveCardRequest]: (state) => true,
  [saveCardSuccess]: (state) => false,
  [saveCardFailure]: (state) => false,
});

const isLoaded = createReducer(false, {
  [saveCardRequest]: (state) => false,
  [saveCardSuccess]: (state) => true,
  [saveCardFailure]: (state) => true,
});
const error = createReducer(false, {
  [saveCardRequest]: (state) => false,
  [saveCardSuccess]: (state) => false,
  [saveCardFailure]: (state) => true,
});

export default combineReducers({
  isLoading,
  isLoaded,
  error,
});
