import styled from 'styled-components';
import ScreenReaderOnly from '../ScreenReaderOnly';
import { GrFormClose } from 'react-icons/gr';

export default function StatisticsModal({
  location,
  divespot,
  country,
  date,
  buddy,
  typeOfDive,
  timeIn,
  timeOut,
  bottomTime,
  maxDepth,
  notes,
  onStatisticsToggle,
}) {
  return (
    <Background>
      <Card>
        <CardHead>
          <div>
            <p>{divespot}</p>
            <p>{country}</p>
            <p>{location}</p>
          </div>
          <BoxDateDelete>
            <ButtonClose onClick={onStatisticsToggle}>
              <GrFormClose />
              <ScreenReaderOnly>close</ScreenReaderOnly>
            </ButtonClose>
            <p>{date}</p>
          </BoxDateDelete>
        </CardHead>

        <CardDetails>
          <p>time in: </p>
          <p>{timeIn}</p>
          <p>time out: </p>
          <p>{timeOut}</p>
          <p>bottom time: </p>
          <p>{bottomTime}</p>
          <p>max. depth: </p>
          <p>{maxDepth}m</p>
          <p>buddy: </p>
          <p>{buddy}</p>
          <p>type of dive</p>
          <p>{typeOfDive}</p>
          <p>notes: </p>
          <p>{notes}</p>
        </CardDetails>
      </Card>
    </Background>
  );
}
const Background = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Card = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 15vh;
  position: relative;
  border: 2px solid black;
  border-radius: 10px;
  max-width: 90vw;
  padding: 0 20px 20px 20px;
  background-color: lightblue;
`;

const CardHead = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  text-align: center;
  max-width: 90vw;
  background-color: lightblue;

  p {
    margin: 5px;
    max-width: 160px;
    overflow-wrap: break-word;
  }
`;

const BoxDateDelete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  padding: 5px;
  background-color: aliceblue;

  p {
    margin: 0;
    max-width: 160px;
    overflow-wrap: break-word;
  }
`;

const ButtonClose = styled.button`
  font-size: 2rem;
  width: 35px;
  height: 35px;
  background: transparent;
  border: 0;
`;
