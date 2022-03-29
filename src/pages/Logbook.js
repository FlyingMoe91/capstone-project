import styled from 'styled-components';
import { useState } from 'react';
import AddDive from '../components/AddDive';
import DiveLog from '../components/DiveLog';

export default function Logbook({
  divenumber,
  city,
  country,
  locationname,
  date,
  typeOfDive,
  timeIn,
  timeOut,
  bottomTime,
  maxDepth,
  buddyName,
  notes,
}) {
  const [active, setActive] = useState(true);
  return (
    <>
      {!active && <Headline>Dive Logs</Headline>}
      {!active && (
        <Grid>
          <DiveLog
            divenumber={divenumber}
            city={city}
            country={country}
            locationname={locationname}
            date={date}
            typeOfDive={typeOfDive}
            timeIn={timeIn}
            timeOut={timeOut}
            bottomTime={bottomTime}
            maxDepth={maxDepth}
            buddyName={buddyName}
            notes={notes}
          />
        </Grid>
      )}
      <AddDive />
    </>
  );
}

const Headline = styled.h1`
  text-align: center;
`;

const Grid = styled.ul`
  list-style: none;
  padding: 0;
`;
