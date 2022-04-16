import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import styled from 'styled-components';
import { FaTimes as Delete, FaCheck as Create } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import './CurrentPosition.css';
import L from 'leaflet';
// import GeoLocation from './GeoLocation';
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
    [53.551086, 9.993682]
  );
  const ZOOM_LEVEL = 3;
  const mapRef = useRef();
  const center = { lat: destinationMapbox[0], lng: destinationMapbox[1] };
  const position = [destinationMapbox[0], destinationMapbox[1]];
  // const location = GeoLocation();

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
      setView: true,
    });
    geocoderDestination.on('result', e => {
      return setDestinationMapbox([
        e.result.center[1],
        e.result.center[0],
        e.result.text,
        'false',
        e.result,
      ]);
    });
    geocoderDestination.addTo('#geocoderdestination');
  }, []);

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
            <ButtonContainer>
              <IconButton
                type="button"
                alt="deleteLocation"
                className="deleteLocation"
                aria-label="deleteLocation"
              >
                <Delete size={20} alt="delete" />
              </IconButton>
              <StyledLink
                to="/divelog"
                aria-label="searchTags"
                onClick={() => onNewDiveClick(destinationMapbox)}
              >
                <Create size={20} alt="create" />
              </StyledLink>
            </ButtonContainer>
          </Popup>
        </Marker>
        {divesWithCoordinates.map(dive => (
          <Marker
            key={dive.coordinates}
            position={dive.coordinates}
            icon={markerIcon}
          >
            <Popup>
              <p>{dive.divespot}</p>
              <p>{dive.location}</p>
              <p>{dive.country}</p>
              <p>{dive.date}</p>
            </Popup>
          </Marker>
        ))}
        {/* {location.loaded && !location.error && (
          <Marker
            icon={markerIcon}
            position={[location.coordinates.lat, location.coordinates.lng]}
          ></Marker>
        )} */}
      </MapContainer>
      <SearchWrapper>
        <GeoCoderDestination
          id={'geocoderdestination'}
          onKeyDown={handleEnterClick}
        ></GeoCoderDestination>
        <SearchButton type="submit">search</SearchButton>
      </SearchWrapper>
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1em;
`;

const IconButton = styled.button`
  height: 1.6rem;
  width: 1.6rem;
  color: palevioletred;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  color: darkslategray;
`;

// const [center, setCenter] = useLocalStorage('center', {
//   lat: 53.551086,
//   lng: 9.993682,
// });

// const StyledMap = styled(MapContainer)`
//   height: 100vh;
//   width: 100vw;
//   margin-left: -20px;
//   margin-top: -20px;
// `;

//   ul {
//     list-style: none;
//     padding: 0 20px;
//     margin: 0;
//     max-width: 70vw;
//   }
//   li {
//     margin: 5px 0;
//     border: 1px solid white;
//     background-color: white;
//     color: black;
//   }
