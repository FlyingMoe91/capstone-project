import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Statistics(diveData) {
  const dives = diveData.diveData.length;

  return (
    <>
      <NavLinkStyled to="divelog">Dives: {dives} </NavLinkStyled>
    </>
  );
}

const NavLinkStyled = styled(NavLink)`
  width: 80px;
  height: 80px;
  background-color: #2e5bd8;
  color: white;
  font-size: 1.4rem;
  border: 0;
  border-radius: 15px;
  text-align: center;
  padding-top: 15px;
  text-decoration: none;
  line-height: 1.8rem;
`;
