import { createStructuredSelector } from "reselect";

const cardDetailsSelector = (state) => state.auth;

export default createStructuredSelector({
  cardDetails: cardDetailsSelector,
});
