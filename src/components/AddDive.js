import styled from 'styled-components';
import ButtonBack from './Button';

export default function AddDive({ handleTogglePage }) {
  return (
    <>
      <ButtonBack onClick={handleTogglePage} />
      <Headline>log new dive</Headline>
      <FormStyled>
        <DivStyled>
          <label htmlFor="location">location</label>
          <input id="location"></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="city">city</label>
          <input id="city"></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="country">country</label>
          <input id="country"></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="date">date</label>
          <input id="date"></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="buddy">buddy</label>
          <input id="buddy"></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="typeOfDive">type of dive</label>
          <input id="typeOfDive"></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="timeIn">time in</label>
          <input id="timeIn"></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="timeOut">time out</label>
          <input id="timeOut"></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="bottomTime">botton time</label>
          <input id="bottomTime"></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="maxDepth">max. depth</label>
          <input id="maxDepth"></input>
        </DivStyled>
        <LastDivStyled>
          <label htmlFor="notes">notes</label>
          <textarea id="notes" type="text" rows="8"></textarea>
        </LastDivStyled>
        <Button>log dive</Button>
      </FormStyled>
    </>
  );
}

const Headline = styled.h1`
  text-align: center;
`;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 500px;
  margin: 20px;

  input {
    width: 100%;
    border-radius: 5px;
  }
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const LastDivStyled = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  grid-column-start: 1;
  grid-column-end: 3;
  background-color: #97e6e4;
  width: 200px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`;
