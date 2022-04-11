import styled from 'styled-components';
import { FaRegEdit as EditIcon } from 'react-icons/fa';
import ScreenReaderOnly from '../ScreenReaderOnly';

export default function DiverInfo({ diverInfo, onEditDiver, image }) {
  return (
    <DiverGrid>
      <div>
        <p>{diverInfo.name}</p>
        {diverInfo.organization ? (
          <p>
            {diverInfo.organization} -{' '}
            {diverInfo.certification ? (
              <span>{diverInfo.certification}</span>
            ) : null}
          </p>
        ) : null}

        {diverInfo.cert_nr ? <p>{diverInfo.cert_nr}</p> : null}
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

  p {
    border: 1px solid white;
    border-radius: 8px;
    width: 100%;
    height: 5vh;
    margin: 5px;
    justify-self: center;
    vertical-align: middle;
    line-height: 5vh;
    font-size: 1.2rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ButtonEdit = styled.button`
  width: 30px;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  color: white;
  font-size: 1.3rem;
`;

const UploadedImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
