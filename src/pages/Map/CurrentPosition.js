import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import GeoLocaition from './GeoLocation';
import osm from './osm-provider';

const markerIcon = new L.Icon({
  iconUrl: require('./icon.png'),
  iconSize: [20, 25],
});

export default function BasicMap() {
  const [center, setCenter] = useState({ lat: 53.551086, lng: 9.993682 });
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const position = [53.551086, 9.993682];
  const location = GeoLocaition();

  return (
    <>
      <StyledMap center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={position} icon={markerIcon}></Marker>
        {location.loaded && !location.error && (
          <Marker
            icon={markerIcon}
            position={[location.coordinates.lat, location.coordinates.lng]}
          ></Marker>
        )}
      </StyledMap>
    </>
  );
}

const StyledMap = styled(MapContainer)`
  height: 90vh;
  width: 100vw;
  margin-left: -20px;
  margin-top: -20px;
`;
