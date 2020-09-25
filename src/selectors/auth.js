import { createSelector, createStructuredSelector } from "reselect";

const authSelector = (state) => state.auth;

const isLoggedInSelector = createSelector(
  authSelector,
  (auth) => auth.isLoggedIn
);
const isLoadingSelector = createSelector(
  authSelector,
  (auth) => auth.isLoading
);
const isLoadedSelector = createSelector(authSelector, (auth) => auth.isLoaded);
const errorSelector = createSelector(authSelector, (auth) => auth.error);

export default createStructuredSelector({
  isLoggedIn: isLoggedInSelector,
  isLoading: isLoadingSelector,
  isLoaded: isLoadedSelector,
  error: errorSelector,
});
