import styled from 'styled-components';

export default function DiverInfo({
  name,
  certification,
  certnr,
  date,
  organization,
}) {
  return (
    <DiverGrid>
      <Name>{name}</Name>
      {organization ? <p>{organization}</p> : ''}
      {certification ? <p>{certification}</p> : ''}
      {date ? <p>{date}</p> : ''}
      {certnr ? <p>{certnr}</p> : ''}
    </DiverGrid>
  );
}

const DiverGrid = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  text-align: center;
  margin-bottom: 20px;

  p {
    border: 1px solid white;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    margin: 5px;
    justify-self: center;
    vertical-align: middle;
    line-height: 30px;
    color: white;
    font-size: 1.5rem;
  }
`;

const Name = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  width: 200px;
`;
