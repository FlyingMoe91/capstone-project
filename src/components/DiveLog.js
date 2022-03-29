import styled from 'styled-components';
import { useState } from 'react';

export default function DiveLog({
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
    <li>
      {active && (
        <DiveLogCard id="divelog" onClick={() => handleCardToggle()}>
          <DiveNumber>{divenumber}</DiveNumber>
          <div>
            <p>
              {city}, {country}
            </p>
            <p>{locationname}</p>
          </div>
          <div>
            <p>{date}</p>
            <p>{typeOfDive}</p>
          </div>
        </DiveLogCard>
      )}

      {!active && (
        <DiveLogDetailsCard onClick={handleCardToggle}>
          <DiveNumberDetails>{divenumber}</DiveNumberDetails>
          <DetailsCardHead>
            <div>
              <p>
                {city}, {country}
              </p>
              <p>{locationname}</p>
            </div>
            <div>
              <p>{date}</p>
              <p>{typeOfDive}</p>
            </div>
          </DetailsCardHead>
          <CardDetails>
            <p>time in: </p>
            <p>{timeIn}</p>
            <p>time out: </p>
            <p>{timeOut}</p>
            <p>bottom time: </p>
            <p>{bottomTime}</p>
            <p>max. depth: </p>
            <p>{maxDepth}</p>
            <p>buddy: </p>
            <p>{buddyName}</p>
            <p>notes: </p>
            <p>{notes}</p>
          </CardDetails>
        </DiveLogDetailsCard>
      )}
    </li>
  );

  function handleCardToggle() {
    setActive(!active);
  }
}

const DiveLogCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid black;
  border-radius: 10px;
  max-width: 90vw;
  margin: 15px;
  background-color: lightblue;
`;

const DiveLogDetailsCard = styled.div`
  position: relative;
  border: 2px solid black;
  border-radius: 10px;
  max-width: 90vw;
  margin: 30px;
  padding: 10px 20px;
  background-color: teal;
`;

const DiveNumber = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.5rem;
  border: 2px solid grey;
  border-radius: 50%;
  background-color: aliceblue;
`;

const DiveNumberDetails = styled.div`
  position: absolute;
  left: -20px;
  top: -20px;
  background-color: aliceblue;
  width: 50px;
  height: 50px;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 50px;
  font-size: 1.5rem;
  border: 2px solid grey;
  border-radius: 50%;
`;

const DetailsCardHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin-bottom: 10px;
  background-color: lightblue;
`;

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 5px;
  background-color: aliceblue;

  p {
    margin: 0;
  }
`;
