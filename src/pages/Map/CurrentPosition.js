import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useRef } from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import './CurrentPosition.css';
import L from 'leaflet';
import GeoLocation from './GeoLocation';
import osm from './osm-provider';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function BasicMap() {
  mapboxgl.accessToken = process.env.REACT_APP_ACCESSTOKEN;

  const markerIcon = new L.Icon({
    iconUrl: require('./icon.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  const [center, setCenter] = useLocalStorage('center', {
    lat: 53.551086,
    lng: 9.993682,
  });
  const [destinationMapbox, setDestinationMapbox] = useLocalStorage(
    'destinationMapBox',
    [53.551086, 9.993682]
  );
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const position = [destinationMapbox[0], destinationMapbox[1]];
  const location = GeoLocation();

  console.log(destinationMapbox);

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
        <Marker position={position} icon={markerIcon}></Marker>
        {location.loaded && !location.error && (
          <Marker
            icon={markerIcon}
            position={[location.coordinates.lat, location.coordinates.lng]}
          ></Marker>
        )}
      </MapContainer>
      <SearchWrapper>
        <GeoCoderDestination
          id={'geocoderdestination'}
          onKeyDown={handleEnterClick}
        ></GeoCoderDestination>
        <SearchButton type="submit" onClick={handleSearch}>
          search
        </SearchButton>
      </SearchWrapper>
    </>
  );

  function handleSearch() {
    setCenter({ lat: destinationMapbox[0], lng: destinationMapbox[1] });
    window.location.reload();
  }

  function handleEnterClick(event) {
    let code = 0;
    code = event.keyCode;
    if (code === 13) {
      console.log('hello');
      setCenter({ lat: destinationMapbox[0], lng: destinationMapbox[1] });
      window.location.reload();
    }
  }
}

// const StyledMap = styled(MapContainer)`
//   height: 100vh;
//   width: 100vw;
//   margin-left: -20px;
//   margin-top: -20px;
// `;

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
`;
