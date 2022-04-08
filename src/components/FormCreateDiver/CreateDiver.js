import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import Button from '../Button/Button';

export default function AddDive({ onClickBack, onCreate }) {
  const [diverInfo, setDiverInfo] = useState({});

  return (
    <SectionStyled>
      <ButtonBack name="back" onClick={onClickBack}>
        <ArrowBack />
      </ButtonBack>
      <Headline>Enter your details</Headline>
      <FormStyled
        aria-label="create new diver"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <InputWrapper>
          <label htmlFor="name">name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            maxLength="50"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="certification">certification</label>
          <input
            id="certification"
            name="certification"
            type="text"
            onChange={handleChange}
            maxLength="50"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="cert_nr">cert #</label>
          <input
            id="cert_nr"
            name="cert_nr"
            type="text"
            onChange={handleChange}
            maxLength="50"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="date">date</label>
          <input id="date" name="date" type="date" onChange={handleChange} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="organization">organization</label>
          <input
            id="organization"
            name="organization"
            type="text"
            onChange={handleChange}
            maxLength="50"
          />
        </InputWrapper>

        <ButtonSubmit variant="submit" name="save details">
          save details
        </ButtonSubmit>
      </FormStyled>
    </SectionStyled>
  );

  function handleChange(event) {
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
  width: 80vw;
  margin: 0 auto;
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

const InputWrapper = styled.div`
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
