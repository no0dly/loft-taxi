import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import RouteBox from "./RouteBox";
import { func, shape, string } from "prop-types";
import { drawRoute } from "./drawRoute";

import { boxView } from "./constants";

import Selector from "./selectors/RouteBox";
import * as actions from "./redux/actions";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9vZGx5IiwiYSI6ImNrZjZmMDFsODBod2IycW83cTZ3aTBmYmgifQ.fgAUFNAyohTZH-APFqS1xA";

const proopTypes = {
  taxiRoute: shape([]),
  routeBoxView: string.isRequired,
  changeRouteBoxView: func.isRequired,
};

function Map({ taxiRoute, routeBoxView, changeRouteBoxView }) {
  const mapContainer = useRef(null);
  const myMap = useRef(null);

  useEffect(() => {
    myMap.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4279681677595, 37.76245847728178],
      zoom: 9,
    });
    return () => myMap.current.remove();
  }, []);

  useEffect(() => {
    if (taxiRoute && taxiRoute.length > 0) {
      drawRoute(myMap.current, taxiRoute);
      changeRouteBoxView(boxView.ORDERED);
    }
  }, [taxiRoute, changeRouteBoxView]);

  useEffect(() => {
    if (routeBoxView === boxView.ROUTE_SELECT) {
      if (myMap.current.getLayer("route")) {
        myMap.current.removeLayer("route");
        myMap.current.removeSource("route");
      }
    }
  }, [routeBoxView]);

  return (
    <div className="map-page">
      <div className="map" data-testid="map">
        <div className="map-container" ref={mapContainer} />
      </div>
      <RouteBox />
    </div>
  );
}

Map.proopTypes = proopTypes;
export default connect(Selector, actions)(Map);
