import { createSelector, createStructuredSelector } from "reselect";

export const taxiRouteSelector = (state) => state.taxiRoute;

const addressListSelector = createSelector(taxiRouteSelector, (routesData) => {
  const { addressList } = routesData;

  return addressList;
});

const toSelector = createSelector(taxiRouteSelector, (routesData) => {
  const { to } = routesData;

  return to;
});

const fromSelector = createSelector(taxiRouteSelector, (routesData) => {
  const { from } = routesData;

  return from;
});

const routeSelector = createSelector(taxiRouteSelector, (routesData) => {
  const { taxiRoute } = routesData;

  return taxiRoute;
});

const routeBoxViewSelector = createSelector(taxiRouteSelector, (routesData) => {
  const { routeBoxView } = routesData;

  return routeBoxView;
});

export default createStructuredSelector({
  addressList: addressListSelector,
  to: toSelector,
  from: fromSelector,
  taxiRoute: routeSelector,
  routeBoxView: routeBoxViewSelector,
});
