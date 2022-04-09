import styled from 'styled-components';

export default function DiverInfo({ diverInfo }) {
  return (
    <DiverGrid>
      <Name>{diverInfo.name}</Name>
      {diverInfo.organization ? <p>{diverInfo.organization}</p> : null}
      {diverInfo.certification ? <p>{diverInfo.certification}</p> : null}
      {diverInfo.date ? <p>{diverInfo.date}</p> : null}
      {diverInfo.cert_nr ? <p>{diverInfo.cert_nr}</p> : null}
    </DiverGrid>
  );
}

const DiverGrid = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  text-align: center;
  margin-bottom: 20px;

  p {
    border: 1px solid white;
    border-radius: 8px;
    width: 40vw;
    height: 5vh;
    margin: 5px;
    justify-self: center;
    vertical-align: middle;
    line-height: 5vh;
    font-size: 1.4rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Name = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  width: 200px;
`;
