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
      <NavLinkStyled to="/divelog">
        Logbook: {dives} {dives === 1 ? 'dive' : 'dives'}
      </NavLinkStyled>
      <NavLinkStyled to="/certifications">Certfications</NavLinkStyled>
      <NavLinkStyled to="/src/pages/Map/Map">Map</NavLinkStyled>
      <Button onClick={handleStatisticsToggel} disabled={diveData.length === 0}>
        deepest dive: {depth > 0 ? depth : '0'}m
      </Button>
      {statisticsToggle && (
        <StatisticsModal
          onStatisticsToggle={handleStatisticsToggel}
          deepestDive={deepestDive}
        />
      )}
    </Wrapper>
  );

  function handleStatisticsToggel() {
    setStatisticsToggle(!statisticsToggle);
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  width: 90%;
  height: 10vh;
  background-color: white;
  color: #00687e;
  font-size: 1.3rem;
  font-weight: bold;
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
  width: 65%;
  height: 7vh;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 1.3rem;
  border: 0;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;
  vertical-align: middle;
  padding: 0 5px;
  cursor: pointer;
`;
