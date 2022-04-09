import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import Button from '../Button/Button';
import ScreenReaderOnly from '../ScreenReaderOnly';

export default function AddDive({ diverInfo, onClickBack, onCreate }) {
  return (
    <SectionStyled>
      <ButtonBack name="back" onClick={onClickBack}>
        <ArrowBack />
        <ScreenReaderOnly>back to homepage</ScreenReaderOnly>
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
            maxLength="10"
            defaultValue={diverInfo.name ? diverInfo.name : undefined}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="certification">certification</label>
          <input
            id="certification"
            name="certification"
            type="text"
            maxLength="10"
            defaultValue={
              diverInfo.certification ? diverInfo.certification : undefined
            }
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="cert_nr">cert #</label>
          <input
            id="cert_nr"
            name="cert_nr"
            type="text"
            maxLength="10"
            defaultValue={diverInfo.cert_nr ? diverInfo.cert_nr : undefined}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="date">date</label>
          <input
            id="date"
            name="date"
            type="date"
            defaultValue={diverInfo.date ? diverInfo.date : undefined}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="organization">organization</label>
          <input
            id="organization"
            name="organization"
            type="text"
            maxLength="10"
            defaultValue={
              diverInfo.organization ? diverInfo.organization : undefined
            }
          />
        </InputWrapper>

        <ButtonSubmit variant="submit" name="save details">
          save details
        </ButtonSubmit>
      </FormStyled>
    </SectionStyled>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const { name, certification, cert_nr, date, organization } =
      event.target.elements;

    onCreate({
      name: name.value,
      certification: certification.value,
      cert_nr: cert_nr.value,
      date: date.value,
      organization: organization.value,
      _id: nanoid(),
    });
  }
}

const SectionStyled = styled.section`
  position: relative;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 5;
  width: 100%;
`;

const Headline = styled.h1`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  font-size: 2.5rem;
  color: white;
`;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 500px;
  margin: 20px auto;
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
  left: 0px;
  top: 0px;
  color: white;
  font-size: 1.8rem;
  border: none;
  background: transparent;
`;

const ButtonSubmit = styled(Button)`
  grid-column-start: 1;
  grid-column-end: 3;
`;
