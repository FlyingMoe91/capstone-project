import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import Button from '../Button/Button';
import ScreenReaderOnly from '../ScreenReaderOnly';
import { Link } from 'react-router-dom';
import { edit } from '@cloudinary/url-gen/actions/animated';

export default function EditDive({
  onClickBack,
  onEditDive,
  locationInfos,
  editDiveInfos,
}) {
  return (
    <Wrapper>
      <ButtonBack name="back" onClick={onClickBack}>
        <ArrowBack />
        <ScreenReaderOnly>back to divelogs</ScreenReaderOnly>
      </ButtonBack>
      <Headline aria-labelledby="form-title" id="form-title">
        edit dive
      </Headline>
      <FormStyled
        aria-label="log new dive"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <DivStyled>
          <label htmlFor="divespot">dive spot</label>
          <input
            defaultValue={editDiveInfos ? editDiveInfos.divespot : undefined}
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
            defaultValue={editDiveInfos ? editDiveInfos.location : undefined}
            id="location"
            name="location"
            type="text"
            maxLength="50"
            required
          />
        </div>
        <DivStyled>
          <label htmlFor="country">country</label>
          <input
            defaultValue={editDiveInfos ? editDiveInfos.country : undefined}
            id="country"
            name="country"
            type="text"
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="date">date</label>
          <input
            defaultValue={editDiveInfos ? editDiveInfos.date : undefined}
            id="date"
            name="date"
            type="date"
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="buddy">buddy</label>
          <input
            defaultValue={editDiveInfos ? editDiveInfos.buddy : undefined}
            id="buddy"
            name="buddy"
            type="text"
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="typeOfDive">type of dive</label>
          <input
            defaultValue={editDiveInfos ? editDiveInfos.typeOfDive : undefined}
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
            defaultValue={editDiveInfos ? editDiveInfos.timeIn : undefined}
            id="timeIn"
            name="timeIn"
            type="time"
            maxLength="50"
            required
          />
        </DivStyled>
        <DivStyled>
          <label htmlFor="timeOut">time out</label>
          <input
            defaultValue={editDiveInfos ? editDiveInfos.timeOut : undefined}
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
            defaultValue={editDiveInfos ? editDiveInfos.bottomTime : undefined}
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
            defaultValue={editDiveInfos ? editDiveInfos.maxDepth : undefined}
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
            defaultValue={editDiveInfos ? editDiveInfos.notes : undefined}
            id="notes"
            name="notes"
            type="text"
            rows="7"
            maxLength="500"
          />
        </LastDivStyled>
        <ButtonSubmit variant="submit" name="log dive">
          edit dive
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
    onEditDive({
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
      coordinates: editDiveInfos.coordinates,
      _id: editDiveInfos._id,
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
