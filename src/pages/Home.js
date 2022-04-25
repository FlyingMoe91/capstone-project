import styled from 'styled-components';
import Menu from '../components/Menu/Menu';
import CreateDiver from '../components/Forms/FormCreateDiver/CreateDiver';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import DiverInfo from '../components/DiverInfo/DiverInfo';
import { FaRegEdit as EditIcon } from 'react-icons/fa';
import ScreenReaderOnly from '../components/Utilities/ScreenReaderOnly';
import DefaultProfilePc from '../images/DefaultProfilePic.jpg';
import StatisticsModal from '../components/Modal/StatisticsModal/StatisticsModal';

export default function Home({ diveData }) {
  const [createDiverPageActive, setCreateDiverPageActive] = useState(false);
  const [diverInfo, setDiverInfo] = useLocalStorage('diverInfo', ['']);
  const [image, setImage] = useLocalStorage('');
  const [statisticsToggle, setStatisticsToggle] = useState(false);

  const depth = Math.max.apply(
    Math,
    diveData.map(diveData => {
      return diveData.maxDepth;
    })
  );
  const deepestDive = diveData.filter(attr => {
    return attr.maxDepth > depth - 1;
  });
  return (
    <Wrapper>
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
      {!createDiverPageActive && <Menu diveData={diveData} />}
      <ButtonStatistic
        onClick={handleStatisticsToggel}
        disabled={diveData.length === 0}
      >
        deepest dive: {depth > 0 ? depth : '0'}m
      </ButtonStatistic>
      {statisticsToggle && (
        <StatisticsModal
          onStatisticsToggle={handleStatisticsToggel}
          deepestDive={deepestDive}
        />
      )}
    </Wrapper>
  );

  function handleCreateDiver(newDiverInfo) {
    setDiverInfo([newDiverInfo]);
    setImage(newDiverInfo.image ? newDiverInfo.image : image);
    setCreateDiverPageActive(!createDiverPageActive);
  }

  function toggleCreateDiverPage() {
    setCreateDiverPageActive(!createDiverPageActive);
  }

  function handleStatisticsToggel() {
    setStatisticsToggle(!statisticsToggle);
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const ButtonStatistic = styled.button`
  width: 70%;
  height: 7vh;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 1.3rem;
  border: 0;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;
  vertical-align: middle;
  padding: 0 5px;
  cursor: pointer;
`;
