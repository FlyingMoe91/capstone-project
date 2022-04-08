import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import Button from '../Button/Button';

export default function AddDive({ onClickBack, onCreate }) {
  const [diveData, setDiveData] = useState('');

  return (
    <>
      <ButtonBack name="back" onClick={onClickBack}>
        <ArrowBack />
      </ButtonBack>
      <Headline>log new dive</Headline>
      <FormStyled
        aria-label="log new dive"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <DivStyled>
          <label htmlFor="location">dive spot</label>
          <input
            id="location"
            name="location"
            type="text"
            onChange={handleChange}
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="city">location</label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={handleChange}
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="country">country</label>
          <input
            id="country"
            name="country"
            type="text"
            onChange={handleChange}
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="date">date</label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={handleChange}
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="buddy">buddy</label>
          <input
            id="buddy"
            name="buddy"
            type="text"
            onChange={handleChange}
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="typeOfDive">type of dive</label>
          <input
            id="typeOfDive"
            name="typeOfDive"
            type="text"
            onChange={handleChange}
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="timeIn">time in</label>
          <input
            id="timeIn"
            name="timeIn"
            type="time"
            onChange={handleChange}
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="timeOut">time out</label>
          <input
            id="timeOut"
            name="timeOut"
            type="time"
            onChange={handleChange}
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="bottomTime">bottom time</label>
          <input
            id="bottomTime"
            name="bottomTime"
            type="time"
            onChange={handleChange}
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="maxDepth">max. depth(meter)</label>
          <input
            id="maxDepth"
            name="maxDepth"
            type="number"
            step=".1"
            min="0"
            onChange={handleChange}
            maxLength="10"
            required
          />
        </DivStyled>
        <LastDivStyled>
          <label htmlFor="notes">notes</label>
          <textarea
            id="notes"
            name="notes"
            type="text"
            rows="8"
            onChange={handleChange}
            maxLength="500"
          />
        </LastDivStyled>
        <ButtonSubmit variant="submit" name="log dive">
          log dive
        </ButtonSubmit>
      </FormStyled>
    </>
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setDiveData({
      ...diveData,
      [name]: value.trim(),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onCreate({ ...diveData, _id: nanoid() });
  }
}

const Headline = styled.h1`
  text-align: center;
  margin: 0;
  padding-top: 20px;
  font-size: 2.5rem;
  color: white;
`;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 500px;
  margin: 20px;
  color: white;

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

const ButtonBack = styled(Button)`
  position: absolute;
  left: 10px;
  top: 20px;
  color: white;
  font-size: 1.8rem;
  border: none;
  background: transparent;
`;

const ButtonSubmit = styled(Button)`
  grid-column-start: 1;
  grid-column-end: 3;
`;
