import { createStructuredSelector } from "reselect";

const cardDetailsSelector = (state) => state.cardDetails;

export default createStructuredSelector({
  cardDetails: cardDetailsSelector,
});
