import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import LocationPin from "./LocationPin";

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCmcR5MTd1O1E7dc67a-U9iVO_pGugmYZg" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);
export default Map;
