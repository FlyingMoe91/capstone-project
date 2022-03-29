import styled from 'styled-components';
import DiveLog from '../components/DiveLog';

export default function Logbook({
  divenumber,
  city,
  country,
  locationname,
  date,
  typeOfDive,
  timeIn,
  timeOut,
  bottomTime,
  maxDepth,
  buddyName,
  notes,
}) {
  return (
    <>
      <Headline>Dive Logs</Headline>
      <DiveLog
        divenumber={divenumber}
        city={city}
        country={country}
        locationname={locationname}
        date={date}
        typeOfDive={typeOfDive}
        timeIn={timeIn}
        timeOut={timeOut}
        bottomTime={bottomTime}
        maxDepth={maxDepth}
        buddyName={buddyName}
        notes={notes}
      />
    </>
  );
}

const Headline = styled.h1`
  text-align: center;
`;
