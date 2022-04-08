import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Button from '../Button/Button';

export default function AddDive({ onClickBack, onCreate }) {
  const [diverInfo, setDiverInfo] = useState('');

  return (
    <SectionStyled>
      <ButtonBack name="back" onClick={onClickBack}>
        <IoMdArrowRoundBack />
      </ButtonBack>
      <Headline>Enter your details</Headline>
      <FormStyled
        aria-label="log new dive"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <DivStyled>
          <label htmlFor="location">name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handelOnChange}
            maxLength="50"
            required
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="city">certification</label>
          <input
            id="certification"
            name="certification"
            type="text"
            onChange={handelOnChange}
            maxLength="50"
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="country">cert #</label>
          <input
            id="cert #"
            name="cert #"
            type="text"
            onChange={handelOnChange}
            maxLength="50"
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="cert. date">date</label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={handelOnChange}
          ></input>
        </DivStyled>
        <DivStyled>
          <label htmlFor="buddy">organization</label>
          <input
            id="organization"
            name="organization"
            type="text"
            onChange={handelOnChange}
            maxLength="50"
          ></input>
        </DivStyled>

        <ButtonSubmit variant="submit" name="save details">
          save details
        </ButtonSubmit>
      </FormStyled>
    </SectionStyled>
  );

  function handelOnChange(event) {
    const { name, value } = event.target;
    setDiverInfo({
      ...diverInfo,
      [name]: value.trim(),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onCreate({ ...diverInfo, _id: nanoid() });
  }
}

const SectionStyled = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 5;
`;

const Headline = styled.h1`
  text-align: center;
  margin: 0;
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

const ButtonBack = styled(Button)`
  position: absolute;
  left: 10px;
  top: 20px;
`;

const ButtonSubmit = styled(Button)`
  grid-column-start: 1;
  grid-column-end: 3;
`;
