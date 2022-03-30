import styled from 'styled-components';
import { useState } from 'react';
import AddDive from '../components/AddDiveForm/AddDive';
import DiveLog from '../DiveLog/DiveLog';

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
      {active && <Headline>Dive Logs</Headline>}
      {active && (
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
      {!active && <AddDive handleTogglePage={handleTogglePage} />}
      {active && <TogglePage onClick={handleTogglePage}>add dive</TogglePage>}
    </>
  );

  function handleTogglePage() {
    setActive(!active);
  }
}

const Headline = styled.h1`
  text-align: center;
`;

const Grid = styled.ul`
  list-style: none;
  padding: 0;
`;

const TogglePage = styled.button`
  position: absolute;
  right: 10px;
  bottom: 20px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #97e6e4;
`;
