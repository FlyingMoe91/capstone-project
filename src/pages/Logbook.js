import styled from 'styled-components';
import DiveLog from '../components/DiveLog';

export default function Logbook({
  divenumber,
  city,
  country,
  locationname,
  date,
}) {
  return (
    <>
      <Headline>Dive Logs</Headline>
      <DiveLog
        divenumber={divenumber}
        city={city}
        country={country}
        locationname={locationname}
        date={date}
      />
      ;
    </>
  );
}

const Headline = styled.h1`
  text-align: center;
`;
