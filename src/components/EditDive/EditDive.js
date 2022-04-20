import styled from 'styled-components';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import { GiCancel as Remove } from 'react-icons/gi';
import Button from '../Button/Button';
import ScreenReaderOnly from '../ScreenReaderOnly';
import axios from 'axios';
import { useState } from 'react';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function EditDive({ onClickBack, onEditDive, editDiveInfos }) {
  const [image, setImage] = useState(editDiveInfos.image);
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState(0);
  console.log(editDiveInfos);
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
        <ImageUpload>
          {image ? (
            <>
              <img src={image} alt="undefined" />
              <button onClick={handleRemovePic}>
                <Remove />
              </button>
            </>
          ) : (
            <>
              <label>upload picture</label>
              <input
                type="file"
                name="file"
                aria-label="picture-upload"
                onChange={upload}
              />
              {loading && <div>Uploading Image...{process}%</div>}
            </>
          )}
        </ImageUpload>
        <ButtonSubmit variant="submit" name="log dive">
          edit dive
        </ButtonSubmit>
      </FormStyled>
    </Wrapper>
  );

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          setLoading(true);
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProcess(percent);
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
  }

  function handleRemovePic() {
    setImage('');
    setProcess(0);
    setLoading(false);
  }

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
      image: image,
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

const ImageUpload = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  border-radius: 50%;
  width: 50%;
  img {
    border-radius: 10px;
    width: 100%;
  }

  button {
    position: absolute;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: white;
    background-color: transparent;
  }
`;
