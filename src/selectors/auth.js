import { createSelector, createStructuredSelector } from "reselect";

const authSelector = (state) => state.auth;

const isLoadedSelector = createSelector(authSelector, (auth) => auth.isLoaded);
const errorSelector = createSelector(authSelector, (auth) => auth.error);

export default createStructuredSelector({
  isLoaded: isLoadedSelector,
  error: errorSelector,
});
