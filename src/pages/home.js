import styled from 'styled-components';
import BackgroundImage from '../images/Background.jpg';
import Statistics from '../components/Statistics/Statistics';

export default function Home() {
  return (
    <Wrapper>
      <Headline>logbuddy</Headline>
      <Statistics />;
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: url(${BackgroundImage}) center no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
`;

const Headline = styled.h2`
  grid-column-start: 1;
  grid-column-end: 3;
  padding-top: 20px;
  margin: 0;
  text-align: center;
  font-size: 2.5rem;
  color: white;
`;
