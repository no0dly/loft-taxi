import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { profileFieldChange, getCardSuccess } from "../actions";

const cardNumber = createReducer("", {
  [profileFieldChange]: (state, actions) =>
    actions.payload.name === "cardNumber" ? actions.payload.value : state,
  [getCardSuccess]: (state, actions) => actions.payload.cardNumber,
});
const expiryDate = createReducer(null, {
  [profileFieldChange]: (state, actions) =>
    actions.payload.name === "expiryDate" ? actions.payload.value : state,
  [getCardSuccess]: (state, actions) => actions.payload.expiryDate,
});
const cardName = createReducer("", {
  [profileFieldChange]: (state, actions) =>
    actions.payload.name === "cardName" ? actions.payload.value : state,
  [getCardSuccess]: (state, actions) => actions.payload.cardName,
});
const cvc = createReducer("", {
  [profileFieldChange]: (state, actions) =>
    actions.payload.name === "cvc" ? actions.payload.value : state,
  [getCardSuccess]: (state, actions) => actions.payload.cvc,
});

export default combineReducers({
  cardNumber,
  expiryDate,
  cardName,
  cvc,
});
