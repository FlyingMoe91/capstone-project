import styled from 'styled-components';
import { FaRegEdit as EditIcon } from 'react-icons/fa';
import ScreenReaderOnly from '../ScreenReaderOnly';

export default function DiverInfo({ diverInfo, onEditDiver, image }) {
  return (
    <DiverGrid>
      <div>
        <Name>{diverInfo.name}</Name>
        {diverInfo.organization ? (
          <p>
            {diverInfo.organization} -{' '}
            {diverInfo.certification ? (
              <span>{diverInfo.certification}</span>
            ) : null}
          </p>
        ) : null}

        {diverInfo.cert_nr ? <p> cert.#: {diverInfo.cert_nr}</p> : null}
      </div>
      <UploadedImage src={image} alt=""></UploadedImage>
      <ButtonEdit onClick={onEditDiver}>
        <EditIcon />
        <ScreenReaderOnly>edit diver information</ScreenReaderOnly>
      </ButtonEdit>
    </DiverGrid>
  );
}

const DiverGrid = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  position: relative;
  margin: 20px auto;
  background: teal;
  color: white;
  border-radius: 20px;
  padding: 0 5px;
  width: 90%;
  height: 25vh;

  p {
    margin: 20px 0;
  }
`;

const Name = styled.p`
  font-size: 1.5rem;
`;

const ButtonEdit = styled.button`
  width: 30px;
  padding: 0;
  position: absolute;
  top: 5%;
  right: 33%;
  border: none;
  background: transparent;
  color: white;
  font-size: 1.3rem;
`;

const UploadedImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: -40px;
  object-fit: cover;
`;
