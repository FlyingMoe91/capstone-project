import styled from 'styled-components';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import BackgroundImage from '../images/Background.jpg';
import Button from '../components/Button/Button';
import AddDive from '../components/AddDiveForm/AddDive';
import DiveLog from '../components/DiveLog/DiveLog';

export default function Logbook() {
  const [active, setActive] = useState(true);
  const [diveData, setDiveData] = useLocalStorage('diveDate', []);

  return (
    <Wrapper>
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
          onClickBack={handleTogglePage}
          onCreateDive={handleCreateDive}
        />
      )}
      {active && (
        <TogglePage variant="round" onClick={handleTogglePage}>
          add dive
        </TogglePage>
      )}
    </Wrapper>
  );

  function handleTogglePage() {
    setActive(!active);
  }

  function handleCreateDive(newData) {
    setDiveData([...diveData, newData]);
    setActive(!active);
  }
}

const Wrapper = styled.section`
  background: url(${BackgroundImage}) center no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
`;

const Headline = styled.h1`
  padding-top: 20px;
  margin: 0;
  text-align: center;
  font-size: 2.5rem;
  color: white;
`;

const Grid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column-reverse;
`;

const TogglePage = styled(Button)`
  position: fixed;
  right: 10px;
  bottom: 20px;
`;
