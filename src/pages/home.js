import styled from 'styled-components';
import Statistics from '../components/Statistics/Statistics';
import CreateDiver from '../components/FormCreateDiver/CreateDiver';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import DiverInfo from '../components/DiverInfomation/DiverInfo';

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
            <Header onClick={toggleCreateDiverPage}>create new diver +</Header>
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

const Header = styled.button`
  font-size: 2.5rem;
  margin: 0 auto 20px auto;
  background: transparent;
  color: white;
  border-radius: 20px;
  padding: 0 5px;
  width: 90%;
`;
