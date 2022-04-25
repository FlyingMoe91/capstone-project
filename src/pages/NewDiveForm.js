import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import { GiCancel as Remove } from 'react-icons/gi';
import { MdOutlineCloudUpload as UploadIcon } from 'react-icons/md';
import { GiPositionMarker } from 'react-icons/gi';
import Button from '../components/Button/Button';
import ScreenReaderOnly from '../components/Utilities/ScreenReaderOnly';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function AddDive({ onCreate, locationInfos }) {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState(0);

  return (
    <Wrapper>
      <ButtonBack to="/divelog" name="back">
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
            id="location"
            name="location"
            type="text"
            maxLength="50"
            required
          />
          <MapButton to="/src/pages/Map/Map">
            <MapIcon />
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
          <input
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
        <ImageUpload>
          {image ? (
            <ImageWrapper>
              <Image src={image} alt="undefined" />
              <Button onClick={handleRemovePic}>
                <Remove />
              </Button>
            </ImageWrapper>
          ) : (
            <>
              <input
                type="file"
                name="file"
                aria-label="picture-upload"
                onChange={upload}
                id="files"
              />
              <label htmlFor="files">
                image upload
                <ScreenReaderOnly>Upload your image</ScreenReaderOnly>
                <UploadIcon size={25} />
              </label>
              {loading && <div>Uploading Image...{process}%</div>}
            </>
          )}
        </ImageUpload>
        <ButtonSubmit variant="submit" name="log dive">
          log dive
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
      image: image,
      _id: nanoid(),
    });
    navigate('/divelog');
  }
}

const MapIcon = styled(GiPositionMarker)`
  color: #00687e;
`;

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

const ButtonBack = styled(NavLink)`
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
  background-color: rgba(0, 0, 0, 0.3);
`;

const MapButton = styled(NavLink)`
  background-color: transparent;
  position: absolute;
  font-size: 1.5rem;
  color: orange;
`;

const ImageWrapper = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 70%;
  position: relative;
`;

const ImageUpload = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  input[type='file'] {
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: -1px;
    left: 0;
    width: 0.1px;
    height: 0.1px;
  }
  label[for='files'] {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
    padding: 10px 5px;
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    background-color: var(--color-gray);
    color: var(--color-light-gray);
    width: 180px;
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
