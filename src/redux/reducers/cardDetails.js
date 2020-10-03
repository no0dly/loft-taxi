import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { profileFieldChange } from "../actions";

const cardNumber = createReducer("", {
  [profileFieldChange]: (state, actions) =>
    actions.payload.name === "cardNumber" ? actions.payload.value : state,
});
const expiryDate = createReducer(null, {
  [profileFieldChange]: (state, actions) =>
    actions.payload.name === "expiryDate" ? actions.payload.value : state,
});
const cardName = createReducer("", {
  [profileFieldChange]: (state, actions) =>
    actions.payload.name === "cardName" ? actions.payload.value : state,
});
const cvc = createReducer("", {
  [profileFieldChange]: (state, actions) =>
    actions.payload.name === "cvc" ? actions.payload.value : state,
});

export default combineReducers({
  cardNumber,
  expiryDate,
  cardName,
  cvc,
});
