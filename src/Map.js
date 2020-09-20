import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9vZGx5IiwiYSI6ImNrZjZmMDFsODBod2IycW83cTZ3aTBmYmgifQ.fgAUFNAyohTZH-APFqS1xA";

function Map() {
  const mapContainer = useRef(null);
  useEffect(() => {
    const myMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4279681677595, 37.76245847728178],
      zoom: 9,
    });
    return () => myMap.remove();
  });

  return (
    <div className="map" data-testid="map">
      <div className="map-container" ref={mapContainer} />;
    </div>
  );
}
export default Map;
