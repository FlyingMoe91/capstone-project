import styled from 'styled-components';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';

import ScreenReaderOnly from '../components/Utilities/ScreenReaderOnly';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import CertificationModal from '../components/Modal/CertificationModal/CertificationModal';
import { useLocalStorage } from 'usehooks-ts';
import DeleteModal from '../components/Modal/DeleteModal/DeleteModal';

export default function Certifications() {
  const [certModalActive, setCertModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [certificates, setCertificates] = useLocalStorage('certificates', []);
  const [certId, setCertId] = useState('');

  return (
    <Wrapper>
      <NavLinkStyled to="/">
        <ArrowBack />
        <ScreenReaderOnly>back to homepage</ScreenReaderOnly>
      </NavLinkStyled>
      <Header>Certification</Header>
      <ButtonAddCert onClick={handleCertModal}>
        add new certificate +
      </ButtonAddCert>
      {certModalActive && (
        <CertificationModal
          onCertModal={handleCertModal}
          onCreate={handleCreateCert}
        />
      )}
      <StyledList role="list">
        {certificates?.map(certificateImages => (
          <li key={certificateImages._id}>
            <CertBox>
              <UploadedImage src={certificateImages[0]} alt="" />
              <UploadedImage src={certificateImages[1]} alt="" />
            </CertBox>
            <ButtonDelete
              onClick={() => toggleDeleteModal(certificateImages._id)}
            >
              <FaTrash />
              <ScreenReaderOnly>delete</ScreenReaderOnly>
            </ButtonDelete>
            {deleteModalActive && (
              <DeleteModal
                onCancel={toggleDeleteModal}
                onDelete={() => handleDeleteCertificate(certId)}
                message="Are your sure you want to delete this certificate?"
              />
            )}
          </li>
        ))}
      </StyledList>
    </Wrapper>
  );

  function handleCertModal() {
    setCertModalActive(!certModalActive);
  }

  function handleCreateCert(newCertificates) {
    setCertificates([...certificates, { ...newCertificates, _id: nanoid() }]);
    setCertModalActive(!certModalActive);
  }

  function toggleDeleteModal(id) {
    setDeleteModalActive(!deleteModalActive);
    setCertId(id);
  }

  function handleDeleteCertificate(Id) {
    setCertificates(certificates.filter(certificate => certificate._id !== Id));
    setDeleteModalActive(!deleteModalActive);
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
  margin: 0 0 10px 0;
`;

const NavLinkStyled = styled(NavLink)`
  position: absolute;
  left: 10px;
  top: 10px;
  color: white;
  font-size: 1.8rem;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 30px auto 20px auto;

  li {
    position: relative;
    border: 2px solid white;
    border-radius: 10px;
  }
`;

const CertBox = styled.div`
  overflow: hidden;
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
`;

const ButtonAddCert = styled.button`
  font-size: 2.5rem;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  border: 2px solid white;
  border-radius: 20px;
  padding: 0 5px;
  width: 90%;
`;

const UploadedImage = styled.img`
  border-radius: 10px;
  width: 315px;
`;

const ButtonDelete = styled.button`
  position: absolute;
  right: -30px;
  bottom: 0;
  border: none;
  color: white;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
`;
