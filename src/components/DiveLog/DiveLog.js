import styled from 'styled-components';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import ScreenReaderOnly from '../ScreenReaderOnly';

export default function DiveLog({
  divenumber,
  city,
  country,
  location,
  date,
  typeOfDive,
  timeIn,
  timeOut,
  bottomTime,
  maxDepth,
  buddy,
  notes,
  onDelete,
  _id,
}) {
  const [active, setActive] = useState(true);

  return (
    <>
      {active && (
        <DiveLogCard id="divelog" onClick={() => handleCardToggle()}>
          <DiveNumber>{divenumber}</DiveNumber>
          <div>
            <p>{city}</p>
            <p>{country}</p>
            <p>{location}</p>
          </div>
          <BoxDateDelete>
            <Date>{date}</Date>
            <ButtonDelete>
              <FaTrash onClick={() => onDelete(_id)} />
              <ScreenReaderOnly>delete</ScreenReaderOnly>
            </ButtonDelete>
          </BoxDateDelete>
        </DiveLogCard>
      )}

      {!active && (
        <DiveLogDetailsCard onClick={handleCardToggle}>
          <DiveNumberDetails>{divenumber}</DiveNumberDetails>
          <DetailsCardHead>
            <div>
              <p>{city}</p>
              <p> {country}</p>
              <p>{location}</p>
            </div>
            <BoxDateDelete>
              <Date>{date}</Date>
              <ButtonDelete>
                <FaTrash onClick={() => onDelete(_id)} />
                <ScreenReaderOnly>delete</ScreenReaderOnly>
              </ButtonDelete>
            </BoxDateDelete>
          </DetailsCardHead>
          <CardDetails>
            <p>time in: </p>
            <p>{timeIn}</p>
            <p>time out: </p>
            <p>{timeOut}</p>
            <p>bottom time: </p>
            <p>{bottomTime}</p>
            <p>max. depth: </p>
            <p>{maxDepth}m</p>
            <p>buddy: </p>
            <p>{buddy}</p>
            <p>type of dive</p>
            <p>{typeOfDive}</p>
            <p>notes: </p>
            <p>{notes}</p>
          </CardDetails>
        </DiveLogDetailsCard>
      )}
    </>
  );

  function handleCardToggle() {
    setActive(!active);
  }
}

const DiveLogCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  text-align: center;
  border: 2px solid black;
  border-radius: 10px;
  max-width: 90vw;
  margin: 15px;
  padding: 0 10px;
  background-color: lightblue;

  p {
    margin: 5px;
    max-width: 160px;
    overflow-wrap: break-word;
  }
`;

const BoxDateDelete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Date = styled.p`
  font-size: 0.9rem;
`;

const ButtonDelete = styled.button`
  border: none;
  background-color: transparent;
  color: #2e5bd8;
  cursor: pointer;
  font-size: 1rem;
`;

const DetailsCardHead = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 10px;
  background-color: lightblue;

  p {
    margin: 5px;
    max-width: 160px;
    overflow-wrap: break-word;
  }
`;

const DiveLogDetailsCard = styled.div`
  position: relative;
  border: 2px solid black;
  border-radius: 10px;
  max-width: 90vw;
  margin: 30px;
  padding: 10px 20px;
  background-color: lightblue;
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
  background-color: #2d9ac2;
  color: white;
`;

const DiveNumberDetails = styled.div`
  position: absolute;
  left: -20px;
  top: -20px;
  background-color: #2d9ac2;
  color: white;
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

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  padding: 5px;
  background-color: aliceblue;

  p {
    margin: 0;
    max-width: 160px;
    overflow-wrap: break-word;
  }
`;
