import styled from 'styled-components';
import Statistics from '../components/Statistics/Statistics';
import CreateDiver from '../components/FormCreateDiver/CreateDiver';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import DiverInfo from '../components/DiverInfomation/DiverInfo';
import { FaRegEdit as EditIcon } from 'react-icons/fa';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import DefaultProfilePc from '../images/DefaultProfilePic.jpg';

export default function Home({ diveData }) {
  const [createDiverPageActive, setCreateDiverPageActive] = useState(false);
  const [diverInfo, setDiverInfo] = useLocalStorage('diverInfo', ['']);
  const [image, setImage] = useLocalStorage('');
  return (
    <>
      {diverInfo[0]
        ? !createDiverPageActive && (
            <DiverInfo
              diverInfo={diverInfo[0]}
              image={image}
              onEditDiver={toggleCreateDiverPage}
            />
          )
        : !createDiverPageActive && (
            <Header>
              <p>Your Profile</p>
              <DefaultPic
                alt="default profile pic"
                src={DefaultProfilePc}
              ></DefaultPic>
              <ButtonEdit onClick={toggleCreateDiverPage}>
                <EditIcon />
                <ScreenReaderOnly>edit diver information</ScreenReaderOnly>
              </ButtonEdit>
            </Header>
          )}
      {createDiverPageActive && (
        <CreateDiver
          diverInfo={diverInfo[0]}
          onClickBack={toggleCreateDiverPage}
          onCreate={handleCreateDiver}
        />
      )}
      {!createDiverPageActive && <Statistics diveData={diveData} />}
    </>
  );

  function handleCreateDiver(newDiverInfo) {
    setDiverInfo([newDiverInfo]);
    setImage(newDiverInfo.image ? newDiverInfo.image : image);
    setCreateDiverPageActive(!createDiverPageActive);
  }

  function toggleCreateDiverPage() {
    setCreateDiverPageActive(!createDiverPageActive);
  }
}

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  background: #00687e;
  color: white;
  border-radius: 20px;
  padding: 0 5px;
  width: 90%;
  height: 25vh;
  font-size: 1.8rem;
  font-weight: bold;
`;

const ButtonEdit = styled.button`
  width: 30px;
  padding: 0;
  position: absolute;
  top: 20px;
  right: 110px;
  border: none;
  background: transparent;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
`;

const DefaultPic = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: -40px;
`;
