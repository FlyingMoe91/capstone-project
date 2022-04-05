import styled from 'styled-components';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import ScreenReaderOnly from '../ScreenReaderOnly';
import DeleteModal from '../DeleteModal/DeleteModal';

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
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <DiveLogDetailsCard onClick={handleCardToggle}>
        <DiveLogCard onClick={() => handleCardToggle()}>
          <DiveNumber>{divenumber}</DiveNumber>
          <div>
            <p>{city}</p>
            <p>{country}</p>
            <p>{location}</p>
          </div>
          <BoxDateDelete>
            <Date>{date}</Date>
            <ButtonDelete onClick={clickDelete}>
              <FaTrash />
              <ScreenReaderOnly>delete</ScreenReaderOnly>
            </ButtonDelete>
          </BoxDateDelete>
        </DiveLogCard>

        {!active && (
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
        )}
      </DiveLogDetailsCard>
      {modalActive && (
        <DeleteModal
          onDelete={() => onDelete(_id)}
          onCancel={() => setModalActive(!modalActive)}
        />
      )}
    </>
  );

  function clickDelete(event) {
    event.stopPropagation();
    setModalActive(!modalActive);
  }

  function handleCardToggle(event) {
    setActive(!active);
  }
}

const DiveLogDetailsCard = styled.div`
  position: relative;
  border: 2px solid black;
  border-radius: 10px;
  max-width: 90vw;
  margin: 10px auto;
  padding: 0 20px;
  background-color: lightblue;
`;

const DiveLogCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  text-align: center;
  max-width: 90vw;
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
