import styled from 'styled-components';
import { GiCancel as Remove } from 'react-icons/gi';
import axios from 'axios';
import { useState } from 'react';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ModalCertification({ onCertModal, onCreate }) {
  const [image, setImage] = useState('');

  return (
    <Background>
      <Wrapper>
        <p>Choose a front picture</p>
        <ImageUpload>
          {image[0] ? (
            <>
              <img src={image[0]} alt={''} />
              <button onClick={handleRemovePic}>
                <Remove />
              </button>
            </>
          ) : (
            <input
              type="file"
              name="file"
              aria-label="picture-upload"
              onChange={upload}
            />
          )}
        </ImageUpload>
        <p>Choose a back picture</p>
        <ImageUpload>
          {image[1] ? (
            <>
              <img src={image[1]} alt={''} />
              <button onClick={handleRemovePic}>
                <Remove />
              </button>
            </>
          ) : (
            <input
              type="file"
              name="file"
              aria-label="picture-upload"
              onChange={upload}
            />
          )}
        </ImageUpload>
        <div>
          <button onClick={onCertModal}>cancel</button>

          <button onClick={handleSaveCert}>safe</button>
        </div>
      </Wrapper>
    </Background>
  );

  function handleSaveCert() {
    onCreate(image);
  }

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
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage([...image, response.data.url]);
  }

  function handleRemovePic() {
    setImage('');
  }
}

const Background = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
`;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20vh;
  padding: 10px;
  max-width: 250px;
  background-color: lightgrey;
  color: black;
  text-align: center;
  border-radius: 20px;

  div {
    display: flex;
    justify-content: space-evenly;
  }
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
    left: 50vw;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: white;
    background-color: transparent;
  }
`;
