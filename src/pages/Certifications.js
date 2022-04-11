import styled from 'styled-components';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import { NavLink } from 'react-router-dom';

export default function Certifications() {
  return (
    <Wrapper>
      <NavLinkStyled to="/">
        <ArrowBack />
        <ScreenReaderOnly>back to homepage</ScreenReaderOnly>
      </NavLinkStyled>
      <Header>Certification</Header>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 10px;
`;

const Header = styled.h2`
  text-align: center;
  color: white;
  margin: 0;
`;

const NavLinkStyled = styled(NavLink)`
  position: absolute;
  left: 10px;
  top: 10px;
  color: white;
  font-size: 1.8rem;
`;
