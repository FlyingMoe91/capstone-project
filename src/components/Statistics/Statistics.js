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
    <>
      <NavLinkStyled to="divelog">Dives: {dives} </NavLinkStyled>
      <Button onClick={handleStatisticsToggel}>
        <p>max. depth: {depth > 0 ? depth : '0'}</p>
      </Button>
      {statisticsToggle && (
        <>
          {deepestDive?.map(
            ({
              divenumber,
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
              _id,
            }) => (
              <StatisticsModal
                onStatisticsToggle={handleStatisticsToggel}
                divenumber={divenumber}
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
                key={_id}
              />
            )
          )}
        </>
      )}
    </>
  );

  function handleStatisticsToggel() {
    setStatisticsToggle(!statisticsToggle);
  }
}

const NavLinkStyled = styled(NavLink)`
  width: 100px;
  height: 100px;
  background-color: #2e5bd8;
  color: white;
  font-size: 1.5rem;
  border: 0;
  border-radius: 15px;
  text-align: center;
  padding: 20px 10px 0 10px;
  text-decoration: none;
  line-height: 2rem;
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: #2d9ac2;
  color: white;
  font-size: 1.5rem;
  border: 0;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;

  p {
    margin: 0;
  }
`;
