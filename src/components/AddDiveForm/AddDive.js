import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import { GiPositionMarker } from 'react-icons/gi';
import Button from '../Button/Button';
import ScreenReaderOnly from '../ScreenReaderOnly';
import { Link } from 'react-router-dom';

export default function AddDive({ onClickBack, onCreate, locationInfos }) {
  return (
    <Wrapper>
      <ButtonBack name="back" onClick={onClickBack}>
        <ArrowBack />
        <ScreenReaderOnly>back to divelogs</ScreenReaderOnly>
      </ButtonBack>
      <Headline aria-labelledby="form-title" id="form-title">
        log new dive
      </Headline>
      <FormStyled
        aria-label="log new dive"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <DivStyled>
          <label htmlFor="divespot">dive spot</label>
          <input
            id="divespot"
            name="divespot"
            type="text"
            maxLength="50"
            required
          />
        </DivStyled>
        <div>
          <label htmlFor="location">location</label>
          <input
            defaultValue={locationInfos ? locationInfos[2].text : undefined}
            placeholder="click to map"
            id="location"
            name="location"
            type="text"
            maxLength="50"
            required
          />
          <MapButton to="/src/pages/Map/Map">
            <GiPositionMarker />
          </MapButton>
        </div>
        <DivStyled>
          <label htmlFor="country">country</label>
          <input
            id="country"
            name="country"
            type="text"
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="date">date</label>
          <input id="date" name="date" type="date" maxLength="50" required />
        </DivStyled>
        <DivStyled>
          <label htmlFor="buddy">buddy</label>
          <input id="buddy" name="buddy" type="text" maxLength="50" required />
        </DivStyled>
        <DivStyled>
          <label htmlFor="typeOfDive">type of dive</label>
          <input
            id="typeOfDive"
            name="typeOfDive"
            type="text"
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
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="timeOut">time out</label>
          <Input
            id="timeOut"
            name="timeOut"
            type="time"
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
            maxLength="50"
            display
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="maxDepth">max. depth(m)</label>
          <input
            id="maxDepth"
            name="maxDepth"
            type="number"
            step=".1"
            min="0"
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
            rows="7"
            maxLength="500"
          />
        </LastDivStyled>
        <ButtonSubmit variant="submit" name="log dive">
          log dive
        </ButtonSubmit>
      </FormStyled>
    </Wrapper>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const {
      divespot,
      location,
      country,
      date,
      buddy,
      typeOfDive,
      timeIn,
      timeOut,
      bottomTime,
      maxDepth,
      notes,
    } = event.target.elements;
    onCreate({
      divespot: divespot.value,
      location: location.value,
      country: country.value,
      date: date.value,
      buddy: buddy.value,
      typeOfDive: typeOfDive.value,
      timeIn: timeIn.value,
      timeOut: timeOut.value,
      bottomTime: bottomTime.value,
      maxDepth: maxDepth.value,
      notes: notes.value,
      coordinates: [locationInfos[0], locationInfos[1]],
      _id: nanoid(),
    });
  }
}

const Wrapper = styled.section`
  margin: 0 20px;
`;

const Headline = styled.h2`
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
  margin: 20px auto 0 auto;
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
  left: 5px;
  top: 10px;
  color: white;
  font-size: 1.8rem;
  border: none;
  background: transparent;
`;

const ButtonSubmit = styled(Button)`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const MapButton = styled(Link)`
  background-color: transparent;
  position: absolute;
  font-size: 1.5rem;
  color: orange;
`;

const Input = styled.input`
  appearance: none;
`;
