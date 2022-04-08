import styled from 'styled-components';
import Statistics from '../components/Statistics/Statistics';
import CreateDiver from '../components/FormCreateDiver/CreateDiver';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import DiverInfo from '../components/DiverInfomation/DiverInfo';

export default function Home({ diveData }) {
  const [createDiverPageActive, setCreateDiverPageActive] = useState(false);
  const [diverInfo, setDiverInfo] = useLocalStorage('diverInfo', []);

  return (
    <Wrapper>
      {diverInfo[0]
        ? diverInfo?.map(
            ({ name, organization, date, certification, cert_nr, _id }) => (
              <DiverInfo
                key={_id}
                name={name}
                organization={organization}
                date={date}
                certification={certification}
                certnr={cert_nr}
              />
            )
          )
        : !createDiverPageActive && (
            <Header onClick={handleCreateDiverPage}>Create New diver +</Header>
          )}
      {createDiverPageActive && (
        <CreateDiver
          onClickBack={handleCreateDiverPage}
          onCreate={handleCreateDiver}
        />
      )}
      {!createDiverPageActive && <Statistics diveData={diveData} />}
    </Wrapper>
  );

  function handleCreateDiver(newdiverInfo) {
    setDiverInfo([newdiverInfo]);
    setCreateDiverPageActive(!createDiverPageActive);
  }

  function handleCreateDiverPage() {
    setCreateDiverPageActive(!createDiverPageActive);
  }
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  padding: 20px;
`;

const Header = styled.button`
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  background: transparent;
  color: white;
  border-radius: 20px;
`;
