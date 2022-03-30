import styled from 'styled-components';
import { useState } from 'react';

import ButtonBack from '../Button/Button';

export default function AddDive({ handleTogglePage, onCreateDive }) {
  const [diveData, setDiveData] = useState('');

  function handelOnChange(event) {
    const { name, value } = event.target;
    setDiveData({
      ...diveData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onCreateDive(diveData);
  }

  return (
    <>
      <ButtonBack onClick={handleTogglePage} />
      <Headline>log new dive</Headline>
      <FormStyled
        aria-label="log new dive"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <DivStyled>
          <label htmlFor="location">location</label>
          <input
            id="location"
            name="location"
            type="text"
            onChange={handelOnChange}
            maxLength="50"
            required
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="city">city</label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={handelOnChange}
            maxLength="50"
            required
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="country">country</label>
          <input
            id="country"
            name="country"
            type="text"
            onChange={handelOnChange}
            maxLength="50"
            required
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="date">date</label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={handelOnChange}
            maxLength="50"
            required
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="buddy">buddy</label>
          <input
            id="buddy"
            name="buddy"
            type="text"
            onChange={handelOnChange}
            maxLength="50"
            required
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="typeOfDive">type of dive</label>
          <input
            id="typeOfDive"
            name="typeOfDive"
            type="text"
            onChange={handelOnChange}
            maxLength="50"
            required
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="timeIn">time in</label>
          <input
            id="timeIn"
            name="timeIn"
            type="time"
            onChange={handelOnChange}
            maxLength="50"
            required
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="timeOut">time out</label>
          <input
            id="timeOut"
            name="timeOut"
            type="time"
            onChange={handelOnChange}
            maxLength="50"
            required
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="bottomTime">botton time</label>
          <input
            id="bottomTime"
            name="bottomTime"
            type="time"
            onChange={handelOnChange}
            maxLength="50"
            required
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="maxDepth">max. depth(meter)</label>
          <input
            id="maxDepth"
            name="maxDepth"
            type="number"
            step=".1"
            onChange={handelOnChange}
            maxLength="10"
            required
          ></input>
        </DivStyled>
        <LastDivStyled>
          <label htmlFor="notes">notes</label>
          <textarea
            id="notes"
            name="notes"
            type="text"
            rows="8"
            onChange={handelOnChange}
            maxLength="500"
          ></textarea>
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
