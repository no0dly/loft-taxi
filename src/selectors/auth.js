import { createSelector, createStructuredSelector } from "reselect";

export const authSelector = (state) => state.auth;
const isLoggedInSelector = createSelector(
  authSelector,
  (auth) => auth.isLoggedIn
);
const isLoadedSelector = createSelector(authSelector, (auth) => auth.isLoaded);
const errorSelector = createSelector(authSelector, (auth) => auth.error);

export default createStructuredSelector({
  isLoaded: isLoadedSelector,
  error: errorSelector,
  isLoggedIn: isLoggedInSelector,
});
