import styled from 'styled-components';
import Statistics from '../components/Statistics/Statistics';
import CreateDiver from '../components/FormCreateDiver/CreateDiver';
import { useState } from 'react';

export default function Home({ diveData }) {
  const [createDiverActive, setCreateDiverActive] = useState(false);
  return (
    <Wrapper>
      {!createDiverActive && (
        <Header onClick={handleCreateDiverToggle}>Create New diver +</Header>
      )}
      {createDiverActive && (
        <CreateDiver onCreateDiverToggle={handleCreateDiverToggle} />
      )}
      {!createDiverActive && <Statistics diveData={diveData} />}
    </Wrapper>
  );

  function handleCreateDiverToggle() {
    setCreateDiverActive(!createDiverActive);
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
