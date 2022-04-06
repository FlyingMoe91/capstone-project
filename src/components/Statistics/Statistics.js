import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Statistics(diveData) {
  const dives = diveData.diveData.length;
  const depth = Math.max.apply(
    Math,
    diveData.diveData.map(function (diveData) {
      return diveData.maxDepth;
    })
  );

  return (
    <>
      <NavLinkStyled to="divelog">Dives: {dives} </NavLinkStyled>
      <Button>max. depth: {depth}</Button>
    </>
  );
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
  font-size: 1rem;
  border: 0;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;
`;
