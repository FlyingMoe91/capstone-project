import styled from 'styled-components';

export default function DiveLog() {
  return (
    <>
      <Headline>Dive Logs</Headline>
      <DiveLogCard>
        <DiveNumber>1</DiveNumber>
        <span>
          <p>Miami, USA</p>
          <p>Offshore</p>
        </span>
        <p>23.06.2013</p>
      </DiveLogCard>
    </>
  );
}

const Headline = styled.h1`
  text-align: center;
`;

const DiveLogCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid black;
  border-radius: 10px;
`;

const DiveNumber = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.5rem;
  border: 2px solid grey;
  border-radius: 50%;
`;
