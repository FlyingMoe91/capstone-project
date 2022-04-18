import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import StatisticsModal from '../StatisticsModal/StatisticsModal';

export default function Statistics({ diveData }) {
  const [statisticsToggle, setStatisticsToggle] = useState(false);
  const dives = diveData.length;
  const depth = Math.max.apply(
    Math,
    diveData.map(diveData => {
      return diveData.maxDepth;
    })
  );
  const deepestDive = diveData.filter(attr => {
    return attr.maxDepth > depth - 1;
  });

  return (
    <Wrapper>
      <NavLinkStyled to="/certifications">Certfi-cation</NavLinkStyled>
      <NavLinkStyled to="/divelog">Dives: {dives} </NavLinkStyled>
      <NavLinkStyled to="/src/pages/Map/Map">Map</NavLinkStyled>
      <Button onClick={handleStatisticsToggel}>
        max. depth: {depth > 0 ? depth : '0'}
      </Button>
      {statisticsToggle && (
        <>
          {deepestDive?.map(
            ({
              divenumber,
              location,
              divespot,
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
            }) => (
              <li key={_id}>
                <StatisticsModal
                  onStatisticsToggle={handleStatisticsToggel}
                  divenumber={divenumber}
                  location={location}
                  divespot={divespot}
                  country={country}
                  date={date}
                  buddy={buddy}
                  typeOfDive={typeOfDive}
                  timeIn={timeIn}
                  timeOut={timeOut}
                  bottomTime={bottomTime}
                  maxDepth={maxDepth}
                  notes={notes}
                />
              </li>
            )
          )}
        </>
      )}
    </Wrapper>
  );

  function handleStatisticsToggel() {
    setStatisticsToggle(!statisticsToggle);
  }
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  gap: 40px;
  padding: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  width: 100px;
  height: 100px;
  background-color: #2e5bd8;
  color: white;
  font-size: 1.3rem;
  border: 0;
  border-radius: 15px;
  text-decoration: none;
  line-height: 2rem;
  overflow-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: #2d9ac2;
  color: white;
  font-size: 1.3rem;
  border: 0;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;
  vertical-align: middle;
  padding: 0 5px;
`;
