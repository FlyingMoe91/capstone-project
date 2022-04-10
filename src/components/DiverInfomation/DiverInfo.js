import styled from 'styled-components';
import { FaRegEdit as EditIcon } from 'react-icons/fa';
import ScreenReaderOnly from '../ScreenReaderOnly';
export default function DiverInfo({ diverInfo, onEditDiver }) {
  return (
    <DiverGrid>
      <Name>{diverInfo.name}</Name>
      {diverInfo.organization ? <p>{diverInfo.organization}</p> : null}
      {diverInfo.certification ? <p>{diverInfo.certification}</p> : null}
      {diverInfo.date ? <p>{diverInfo.date}</p> : null}
      {diverInfo.cert_nr ? <p>{diverInfo.cert_nr}</p> : null}
      <UploadedImage src={diverInfo.image} alt=""></UploadedImage>
      <ButtonEdit onClick={onEditDiver}>
        <EditIcon />
        <ScreenReaderOnly>edit diver information</ScreenReaderOnly>
      </ButtonEdit>
    </DiverGrid>
  );
}

const DiverGrid = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;

  p {
    border: 1px solid white;
    border-radius: 8px;
    width: 75%;
    height: 5vh;
    margin: 5px;
    justify-self: center;
    vertical-align: middle;
    line-height: 5vh;
    font-size: 1.4rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Name = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  width: 200px;
`;

const ButtonEdit = styled.button`
  width: 30px;
  padding: 0;
  position: absolute;
  top: 0;
  border: 0;
  background: transparent;
  color: white;
  font-size: 1.3rem;
`;

const UploadedImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 3px 3px 3px;
  margin-left: -1px;
`;
