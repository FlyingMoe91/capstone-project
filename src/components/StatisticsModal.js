import styled from 'styled-components';

export default function StatisticsModal({
  location,
  city,
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
      <DiveLogDetailsCard>
        <DiveLogCard onClick={onStatisticsToggle}>
          <div>
            <p>{city}</p>
            <p>{country}</p>
            <p>{location}</p>
          </div>
          <p>{date}</p>
        </DiveLogCard>

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
      </DiveLogDetailsCard>
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
  z-index: 2;
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

const DiveLogDetailsCard = styled.div`
  position: relative;
  border: 2px solid black;
  border-radius: 10px;
  max-width: 90vw;
  margin: 10px auto;
  padding: 0 20px 20px 20px;
  background-color: lightblue;
`;

const DiveLogCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  text-align: center;
  max-width: 90vw;
  background-color: lightblue;

  p {
    margin: 5px;
    max-width: 160px;
    overflow-wrap: break-word;
  }
`;
