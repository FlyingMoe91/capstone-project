import styled from 'styled-components';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaRegEdit as EditIcon } from 'react-icons/fa';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';
import DeleteModal from '../Modal/DeleteModal/DeleteModal';
import { Link } from 'react-router-dom';

export default function DiveLog({
  divenumber,
  divespot,
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
  _id,
  coordinates,
  image,
  onDelete,
  setView,
  onEditDiverInfo,
}) {
  const [active, setActive] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Card>
        <CardHead>
          <DiveNumber>{divenumber}</DiveNumber>
          <div onClick={handleCardToggle}>
            <p>{divespot}</p>
            <p>{country}</p>
            <p>{location}</p>
          </div>
          <BoxDateDelete>
            <Date>{date}</Date>
            <IconBox>
              <ButtonUnfold onClick={handleCardToggle}>
                {active ? <GoChevronDown /> : <GoChevronUp />}
              </ButtonUnfold>
              <ButtonEdit>
                <EditIcon
                  onClick={() =>
                    onEditDiverInfo({
                      divespot,
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
                      coordinates,
                      image,
                      _id,
                    })
                  }
                />
                <ScreenReaderOnly>edit dive</ScreenReaderOnly>
              </ButtonEdit>
              <ButtonDelete onClick={clickTrash}>
                <FaTrash />
                <ScreenReaderOnly>delete dive</ScreenReaderOnly>
              </ButtonDelete>
            </IconBox>
          </BoxDateDelete>
        </CardHead>

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
            {coordinates[0] !== null ? (
              <StyledMapLink
                onClick={() => setView(coordinates)}
                to="/src/pages/Map/Map"
                aria-label="show-on-map"
              >
                show on Map
              </StyledMapLink>
            ) : (
              ''
            )}
            <StyledImage src={image} alt={image} />
          </CardDetails>
        )}
      </Card>
      {modalActive && (
        <DeleteModal
          onDelete={() => onDelete(_id)}
          onCancel={() => setModalActive(!modalActive)}
          message="Are you sure you want to delete this dive?"
        />
      )}
    </>
  );

  function clickTrash(event) {
    event.stopPropagation();
    setModalActive(!modalActive);
  }

  function handleCardToggle() {
    setActive(!active);
  }
}

const Card = styled.div`
  position: relative;
  border-radius: 10px;
  max-width: 85vw;
  margin: 10px auto;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.45);
  color: white;
`;

const CardHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  text-align: center;
  max-width: 90vw;
  background-color: transparent;

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

const IconBox = styled.div`
  display: flex;
  gap: 15px;
`;

const ButtonUnfold = styled.button`
  border: none;
  background: transparent;
  color: white;
  padding: 5px 0 0 0;
  font-size: 1.3rem;
`;

const ButtonDelete = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-size: 1rem;
`;

const ButtonEdit = styled.button`
  border: none;
  background-color: transparent;
  color: white;
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
  background-color: rgba(255, 255, 255, 0.4);
  color: white;
`;

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;

  p {
    margin: 0;
    max-width: 160px;
    overflow-wrap: break-word;
  }
`;

const StyledMapLink = styled(Link)`
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 3;
  color: white;
  padding: 5px;
  margin: 10px auto;
  width: 140px;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 5px;
`;

const StyledImage = styled.img`
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 0 auto;
  width: 80%;
`;
