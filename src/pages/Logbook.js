import styled from 'styled-components';
import { useState } from 'react';
import AddDive from '../components/AddDiveForm/AddDive';
import DiveLog from '../components/DiveLog/DiveLog';

export default function Logbook() {
  const [active, setActive] = useState(true);
  const [diveData, setDiveData] = useState([]);

  return (
    <>
      {active && <Headline>Dive Logs</Headline>}
      {active && (
        <Grid role="list">
          {diveData.map(
            (
              {
                location,
                city,
                country,
                date,
                buddy,
                typeOfDive,
                timeIn,
                timeOut,
                bottomTime,
                maxDepth,
                notes,
              },
              index
            ) => (
              <li key={date + timeIn}>
                <DiveLog
                  location={location}
                  city={city}
                  country={country}
                  date={date}
                  buddy={buddy}
                  typeOfDive={typeOfDive}
                  timeIn={timeIn}
                  timeOut={timeOut}
                  bottomTime={bottomTime}
                  maxDepth={maxDepth}
                  notes={notes}
                  divenumber={index + 1}
                />
              </li>
            )
          )}
        </Grid>
      )}
      {!active && (
        <AddDive
          handleTogglePage={handleTogglePage}
          onCreateDive={handleCreateDive}
        />
      )}
      {active && <TogglePage onClick={handleTogglePage}>add dive</TogglePage>}
    </>
  );

  function handleTogglePage() {
    setActive(!active);
  }

  function handleCreateDive(newData) {
    setDiveData([...diveData, newData]);
    setActive(!active);
  }
}

const Headline = styled.h1`
  text-align: center;
`;

const Grid = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column-reverse;
`;

const TogglePage = styled.button`
  position: fixed;
  right: 10px;
  bottom: 20px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #97e6e4;
`;
