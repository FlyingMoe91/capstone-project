import styled from 'styled-components';
import { GiCancel as Remove } from 'react-icons/gi';
import axios from 'axios';
import { useState } from 'react';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ModalCertification({ onCertModal, onCreate }) {
  const [image, setImage] = useState('');
  const [process, setProcess] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <Background>
      <Modal>
        {loading && <div>Uploading Image...{process}%</div>}
        <p>Cardfront</p>
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
        <p>Cardback</p>
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
          <ButtonCancel onClick={onCertModal}>cancel</ButtonCancel>
          <ButtonSafe onClick={handleSaveCert}>safe</ButtonSafe>
        </div>
      </Modal>
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
        onUploadProgress: progressEvent => {
          setLoading(true);
          let percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProcess(percent);
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage([...image, response.data.url]);
    setLoading(false);
  }

  function handleRemovePic() {
    setImage('');
    setProcess(0);
    setLoading(false);
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

const Modal = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  padding: 10px;
  max-width: 300px;
  background-color: darkcyan;
  color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
  }
`;

const ImageUpload = styled.div`
  border-radius: 50%;
  width: 90%;

  img {
    border-radius: 10px;
    width: 50%;
    margin: 0 auto;
    padding: 5px;
    border: 2px solid black;
    border-radius: 10px;
  }

  input {
    padding: 10px;
    border: 2px solid black;
    border-radius: 10px;
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

const ButtonSafe = styled.button`
  background-color: lightgreen;
  width: 80px;
  padding: 5px;
  margin: 10px;
  border-radius: 15px;
`;

const ButtonCancel = styled.button`
  background-color: lightcoral;
  width: 80px;
  margin: 10px;
  border-radius: 15px;
`;
