import styled from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import DiveLog from '../components/DiveLog/DiveLog';
import EditDive from '../components/Forms/FormEditDive/EditDive';
import ScreenReaderOnly from '../components/Utilities/ScreenReaderOnly';

export default function Logbook({
  diveData,
  onDelete,
  onHandleEditDive,
  locationInfos,
  setView,
}) {
  const [editFormActive, setEditFormActive] = useState(false);
  const [editDiverInfos, setEditDiverInfos] = useState([]);
  return (
    <Wrapper>
      {!editFormActive && (
        <>
          <NavLinkStyled to="/">
            <ArrowBack />
            <ScreenReaderOnly>back to homepage</ScreenReaderOnly>
          </NavLinkStyled>
          <Headline>Logbook</Headline>
          <AddDiveLink to="/NewDiveForm">add new dive +</AddDiveLink>

          <Grid role="list">
            {diveData?.map(
              (
                {
                  divespot,
                  location,
                  country,
                  date,
                  buddy,
                  typeOfDive,
                  timeIn,
                  timeOut,
                  bottomTime,
                  maxDepth,
                  notes,
                  _id,
                  coordinates,
                  image,
                },
                index
              ) => (
                <li key={_id}>
                  <DiveLog
                    divespot={divespot}
                    location={location}
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
                    image={image}
                    _id={_id}
                    onDelete={onDelete}
                    coordinates={coordinates}
                    setView={setView}
                    onEditDiverInfo={handleEditDiverInfo}
                  />
                </li>
              )
            )}
          </Grid>
        </>
      )}
      {editFormActive && (
        <EditDive
          onClickBack={handleToggleEditForm}
          onEditDive={handleEditDive}
          locationInfos={locationInfos}
          editDiveInfos={editDiverInfos}
        />
      )}
    </Wrapper>
  );

  function handleEditDiverInfo(infos) {
    setEditDiverInfos(infos);
    setEditFormActive(!editFormActive);
  }

  function handleToggleEditForm() {
    setEditFormActive(!editFormActive);
  }

  function handleEditDive(newData) {
    onHandleEditDive(newData);
    setEditFormActive(!editFormActive);
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const NavLinkStyled = styled(NavLink)`
  position: absolute;
  left: 10px;
  top: 10px;
  color: white;
  font-size: 1.8rem;
`;

const Headline = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 2.5rem;
  color: white;
`;

const AddDiveLink = styled(NavLink)`
  text-decoration: none;
  font-size: 2.5rem;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  border: 2px solid white;
  border-radius: 20px;
  width: 80%;
  padding: 5px 10px;
  margin: 10px auto;
  text-align: center;
`;

const Grid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column-reverse;
`;
