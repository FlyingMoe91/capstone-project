import styled from 'styled-components';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import ModalCertification from '../components/ModalCertification/ModalCertification';
import { useLocalStorage } from 'usehooks-ts';

export default function Certifications() {
  const [certModalActive, setCertModalActive] = useState(false);
  const [certificates, setCertificates] = useLocalStorage('certificates', []);

  return (
    <Wrapper>
      <NavLinkStyled to="/">
        <ArrowBack />
        <ScreenReaderOnly>back to homepage</ScreenReaderOnly>
      </NavLinkStyled>
      <Header>Certification</Header>
      <StyledList role="list">
        {certificates?.map(certificateImages => (
          <li key={certificateImages._id}>
            <UploadedImage src={certificateImages[0]} alt="" />
            <UploadedImage src={certificateImages[1]} alt="" />
          </li>
        ))}
      </StyledList>
      <ButtonAddCert onClick={handleCertModal}>
        + add new certificate
      </ButtonAddCert>
      {certModalActive && (
        <ModalCertification
          onCertModal={handleCertModal}
          onCreate={handleCreateCert}
        />
      )}
    </Wrapper>
  );

  function handleCertModal() {
    setCertModalActive(!certModalActive);
  }

  function handleCreateCert(newCertificates) {
    setCertificates([...certificates, { ...newCertificates, _id: nanoid() }]);
    setCertModalActive(!certModalActive);
  }
}

const Wrapper = styled.section`
  padding: 10px;
  text-align: center;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: white;
  margin: 0 0 20px 0;
`;

const NavLinkStyled = styled(NavLink)`
  position: absolute;
  left: 10px;
  top: 10px;
  color: white;
  font-size: 1.8rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto 20px auto;

  li {
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    justify-content: space-between;
    border: 2px solid white;
    border-radius: 10px;
    margin-bottom: 30px;
  }
`;

const ButtonAddCert = styled.button`
  font-size: 2.5rem;
  background: transparent;
  color: white;
  border-radius: 20px;
  padding: 0 5px;
  width: 90%;
`;

const UploadedImage = styled.img`
  border-radius: 10px;
  width: 315px;
`;
