import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import styled from 'styled-components';
import { FaCheck as Create } from 'react-icons/fa';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import ScreenReaderOnly from '../../components/ScreenReaderOnly';
import L from 'leaflet';
import osm from './osm-provider';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Link } from 'react-router-dom';

export default function BasicMap({ onNewDiveClick, diveData }) {
  mapboxgl.accessToken = process.env.REACT_APP_ACCESSTOKEN;

  const markerIcon = new L.Icon({
    iconUrl: require('./icon.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  const [destinationMapbox, setDestinationMapbox] = useLocalStorage(
    'destinationMapBox',
    [52.51667, 13.38333]
  );
  const ZOOM_LEVEL = 8;
  const mapRef = useRef();
  const center = { lat: destinationMapbox[0], lng: destinationMapbox[1] };
  const position = [destinationMapbox[0], destinationMapbox[1]];
  const divesWithCoordinates = diveData.filter(
    dive => dive.coordinates[0] !== null
  );

  useEffect(() => {
    const geocoderDestination = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: 'country, region, place, poi',
      limit: 5,
      placeholder: 'e.g. Lissabon',
      minLength: 2,
    });
    geocoderDestination.on('result', e => {
      return setDestinationMapbox([
        e.result.center[1],
        e.result.center[0],
        e.result,
      ]);
    });
    geocoderDestination.addTo('#geocoderdestination');
  }, [setDestinationMapbox]);

  return (
    <>
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} id="map">
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            Add new Dive
            <StyledLink
              to="/divelog"
              aria-label="searchTags"
              onClick={() => onNewDiveClick(destinationMapbox)}
            >
              <Create size={20} alt="create" />
            </StyledLink>
          </Popup>
        </Marker>
        {divesWithCoordinates.map(dive => (
          <Marker
            key={dive.coordinates}
            position={dive.coordinates}
            icon={markerIcon}
          >
            <Popup>
              <p>divespot: {dive.divespot}</p>
              <p>location: {dive.location}</p>
              <p>country:{dive.country}</p>
              <p>{dive.date}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <SearchWrapper>
        <GeoCoderDestination
          id={'geocoderdestination'}
          onKeyDown={handleEnterClick}
        ></GeoCoderDestination>
        <SearchButton type="submit">search</SearchButton>
      </SearchWrapper>
      <LinkBack to="/" name="back">
        <ArrowBack />
        <ScreenReaderOnly>back to divelogs</ScreenReaderOnly>
      </LinkBack>
    </>
  );

  function handleEnterClick(event) {
    let code = 0;
    code = event.keyCode;
    if (code === 13) {
      window.location.reload();
    }
  }
}

const SearchWrapper = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 90vw;
  color: white;
  display: flex;
  z-index: 400;
`;

const SearchButton = styled.button`
  height: 28px;
  width: 55px;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 14px;
`;

const GeoCoderDestination = styled.div`
  margin-top: 10px;
  display: ${props => (props.display === 'none' ? 'none' : '')};
  height: 28px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  color: darkslategray;
`;

const LinkBack = styled(Link)`
  position: absolute;
  left: 5px;
  bottom: 5px;
  height: 30px;
  color: white;
  font-size: 1.8rem;
  border: none;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 900;
`;
