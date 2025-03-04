import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

//  default icon for all markers
L.Marker.prototype.options.icon = defaultIcon;

// component to update map view when center changes
const ChangeMapView = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 10);
    }
  }, [center, map]);

  return null;
};

// handle map click events
const LocationMarker = ({ onLocationSelected, position, setPosition }) => {
  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition(e.latlng);
      onLocationSelected(lat, lng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Selected location</Popup>
    </Marker>
  );
};

const Map = ({ onLocationSelected, center }) => {
  // default is jhb
  const defaultCenter = [-26.2, 28.04];
  const defaultZoom = 6;
  const [position, setPosition] = useState(null);

  // update position marker when center changes from outside
  useEffect(() => {
    if (center && center.length === 2) {
      setPosition({ lat: center[0], lng: center[1] });
    }
  }, [center]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          onLocationSelected={onLocationSelected}
          position={position}
          setPosition={setPosition}
        />
        {center && <ChangeMapView center={center} />}
      </MapContainer>
    </div>
  );
};

export default Map;
