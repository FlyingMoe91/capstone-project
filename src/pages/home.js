import styled from 'styled-components';
import Statistics from '../components/Statistics/Statistics';
import CreateDiver from '../components/FormCreateDiver/CreateDiver';
import { useState } from 'react';

export default function Home({ diveData }) {
  const [createDiverPageActive, setCreateDiverPageActive] = useState(false);
  const [diverInfo, setDiverInfo] = useState([]);

  return (
    <Wrapper>
      {!createDiverPageActive && (
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
  }

  function handleCreateDiverPage() {
    setCreateDiverPageActive(!createDiverPageActive);
  }
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
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
