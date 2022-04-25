import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Menu({ diveData }) {
  const dives = diveData.length;

  return (
    <Wrapper>
      <NavLinkStyled to="/divelog">
        Logbook: {dives} {dives === 1 ? 'dive' : 'dives'}
      </NavLinkStyled>
      <NavLinkStyled to="/certifications">Certfications</NavLinkStyled>
      <NavLinkStyled to="/src/pages/Map/Map">Map</NavLinkStyled>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  width: 100%;
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
