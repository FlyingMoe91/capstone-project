import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useState, useRef, useReducer } from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import GeoLocation from './GeoLocation';
import osm from './osm-provider';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';

const markerIcon = new L.Icon({
  iconUrl: require('./icon.png'),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function BasicMap() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZmx5aW5nbW9lOTEiLCJhIjoiY2wxeGIya3B3MDEwZzNjbWt2OGNmangxMSJ9.Uduf_6dSBMiXMepGrRqhOw';

  const [destinationMapbox, setDestinationMapbox] = useState([
    53.551086, 9.993682,
  ]);
  const position = [destinationMapbox[0], destinationMapbox[1]];
  const [center, setCenter] = useState({
    lat: destinationMapbox[0],
    lng: 9.993682,
  });
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();

  const location = GeoLocation();
  const [destinationError, setDestinationError] = useState(false);

  console.log(destinationMapbox[0], destinationMapbox[1]);

  function handleMapboxInput(e) {
    e.target.value === ''
      ? setDestinationError(true)
      : setDestinationError(false);
  }

  useEffect(() => {
    const geocoderDestination = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: 'country, region, place, poi',
      limit: 5,
      placeholder: 'e.g. Lissabon',
      minLength: 2,
    });
    geocoderDestination.on('result', e => {
      setDestinationMapbox([e.result.center[1], e.result.center[0]]);
      setCenter({ lat: destinationMapbox[0], lng: destinationMapbox[1] });
    });
    geocoderDestination.addTo('#geocoderdestination');
  }, [destinationMapbox]);

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
      <Wrapper>
        <LabelHeader htmlFor="destinationresult">Destination:</LabelHeader>

        <InputField id="destinationresult" readOnly disabled />

        <GeoCoderDestination
          id={'geocoderdestination'}
          onInput={e => handleMapboxInput(e)}
        ></GeoCoderDestination>
        {destinationError ? (
          <ErrorMessage>
            The name of your next destination must be filled!
          </ErrorMessage>
        ) : (
          ''
        )}
      </Wrapper>
    </>
  );
}

const LabelHeader = styled.label`
  text-decoration: underline;
  font-weight: bold;
  font-size: 1.5rem;
`;

const InputField = styled.input`
  padding: 6px 12px;
  margin-top: 10px;
  border-radius: 14px;
  border: none;
  background-color: var(--bg-color-content);
  width: 100%;
  max-width: 400px;
`;

const StyledMap = styled(MapContainer)`
  height: 60vh;
  width: 100vw;
  margin-left: -20px;
  margin-top: -20px;
`;

const Wrapper = styled.div`
  max-width: 400px;
  position: relative;
`;

const ErrorMessage = styled.p`
  margin: 0;
  color: var(--bg-color-action);
  font-size: 0.8em;
`;

const GeoCoderDestination = styled.div`
  margin-top: 10px;
  display: ${props => (props.display === 'none' ? 'none' : '')};
`;
