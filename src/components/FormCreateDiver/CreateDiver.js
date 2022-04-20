import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import Button from '../Button/Button';
import ScreenReaderOnly from '../ScreenReaderOnly';
import { GiCancel as Remove } from 'react-icons/gi';
import { FaCloudUploadAlt as Upload } from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function AddDive({ diverInfo, onClickBack, onCreate }) {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState(0);
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
            maxLength="20"
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
            maxLength="20"
            placeholder="owd, aowd..."
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
            placeholder="123456"
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
            maxLength="20"
            placeholder="e.g. Padi, SSI..."
            defaultValue={
              diverInfo.organization ? diverInfo.organization : undefined
            }
          />
        </InputWrapper>
        <ImageUpload>
          {image ? (
            <>
              <img
                src={image}
                alt={diverInfo.image ? diverInfo.image : undefined}
              />
              <button onClick={handleRemovePic}>
                <Remove />
              </button>
            </>
          ) : (
            <>
              <input
                type="file"
                name="file"
                aria-label="picture-upload"
                onChange={upload}
              />
              <label>
                upload profile picture <UploadIcon />
              </label>

              {loading && <div>Uploading Image...{process}%</div>}
            </>
          )}
        </ImageUpload>
        <ButtonSubmit variant="submit" name="save details">
          save details
        </ButtonSubmit>
      </FormStyled>
    </SectionStyled>
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
      image: image,
    });
    setLoading(false);
  }

  function handleRemovePic() {
    setImage('');
    setProcess(0);
    setLoading(false);
  }
}

const SectionStyled = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 5;
  width: 100%;
  text-align: left;
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
  left: 10px;
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
  width: 100%;
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

const UploadIcon = styled(Upload)``;
