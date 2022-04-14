import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { useState } from 'react';
import L from 'leaflet';

const position = [51.505, -0.09];

const icon = new L.icon({
  iconUrl: require('./icon.png'),

  iconSize: [38, 50], // size of the icon
});

function LocationMarker({ content }) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function MapPage({ content }) {
  return (
    <>
      <Map center={position} zoom={13} id="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Wrapper>
          <StyledMarker position={position} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </StyledMarker>
        </Wrapper>
        <LocationMarker content={content} />
      </Map>
    </>
  );
}

const Map = styled(MapContainer)`
  height: 90vh;
  width: 100vw;
  margin-left: -20px;
  margin-top: -20px;
`;

const Wrapper = styled.div`
  width: 0;
  padding-bottom: 10px;
`;

const StyledMarker = styled(Marker)`
  img {
    margin: 0;
  }
`;

export default MapPage;
