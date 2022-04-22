import styled from 'styled-components';
import { GiCancel as Remove } from 'react-icons/gi';
import { MdOutlineCloudUpload as UploadIcon } from 'react-icons/md';
import axios from 'axios';
import { useState } from 'react';
import ScreenReaderOnly from '../ScreenReaderOnly';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ModalCertification({ onCertModal, onCreate }) {
  const [certificateImages, setCertificateImages] = useState([]);
  const [process, setProcess] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <Background>
      <Modal>
        {loading && <div>Uploading Image...{process}%</div>}
        <Text>Cardfront</Text>
        <ImageUpload>
          {certificateImages[0] ? (
            <ImageWrapper>
              <Image src={certificateImages[0]} alt={''} />
              <Button onClick={handleRemovePic}>
                <Remove />
                <ScreenReaderOnly>remove front picture</ScreenReaderOnly>
              </Button>
            </ImageWrapper>
          ) : (
            <>
              <input
                type="file"
                name="file"
                label="front-picture-upload"
                onChange={upload}
                id="files"
              />
              <label htmlFor="files">
                image upload
                <ScreenReaderOnly>Upload your image</ScreenReaderOnly>
                <UploadIcon size={25} />
              </label>
            </>
          )}
        </ImageUpload>
        <Text>Cardback</Text>
        <ImageUpload>
          {certificateImages[1] ? (
            <ImageWrapper>
              <Image src={certificateImages[1]} alt={''} />
              <Button onClick={handleRemovePic}>
                <Remove />
                <ScreenReaderOnly>remove back picture</ScreenReaderOnly>
              </Button>
            </ImageWrapper>
          ) : (
            <>
              <input
                type="file"
                name="file"
                label="back-picture-upload"
                onChange={upload}
                id="files"
              />
              <label htmlFor="files">
                image upload
                <ScreenReaderOnly>Upload your image</ScreenReaderOnly>
                <UploadIcon size={25} />
              </label>
            </>
          )}
        </ImageUpload>
        <div>
          <ButtonCancel onClick={onCertModal}>cancel</ButtonCancel>
          <ButtonSafe onClick={handleSaveCert}>save</ButtonSafe>
        </div>
      </Modal>
    </Background>
  );

  function handleSaveCert() {
    onCreate(certificateImages);
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
    setCertificateImages([...certificateImages, response.data.url]);
    setLoading(false);
  }

  function handleRemovePic() {
    setCertificateImages('');
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

const ButtonSafe = styled.button`
  background-color: #00687e;
  color: white;
  width: 80px;
  padding: 5px;
  margin: 10px;
  border-radius: 15px;
  border: none;
`;

const ButtonCancel = styled.button`
  background-color: #e0cdbf;
  color: #00687e;
  width: 80px;
  margin: 10px;
  border-radius: 15px;
  border: none;
`;

const Button = styled.button`
  position: absolute;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: white;
  background-color: transparent;
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

const Text = styled.p`
  margin: 10px 0 5px 0;
`;
