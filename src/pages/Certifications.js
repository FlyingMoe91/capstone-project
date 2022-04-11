import styled from 'styled-components';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import ModalCertification from '../components/ModalCertification.ja/ModalCertification';
import { useLocalStorage } from 'usehooks-ts';

export default function Certifications() {
  const [certModalActive, setCertModalActive] = useState(false);
  const [images, setImages] = useState([]);

  return (
    <Wrapper>
      <NavLinkStyled to="/">
        <ArrowBack />
        <ScreenReaderOnly>back to homepage</ScreenReaderOnly>
      </NavLinkStyled>
      <Header>Certification</Header>
      <StyledList role="list">
        {images?.map(image => (
          <li key={image._id}>
            <UploadedImage src={image[0]} alt=""></UploadedImage>
            <UploadedImage src={image[1]} alt=""></UploadedImage>
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

  function handleCreateCert(newImages) {
    setImages([...images, { ...newImages, _id: nanoid() }]);
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
    border: 2px solid white;
    border-radius: 10px;
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
