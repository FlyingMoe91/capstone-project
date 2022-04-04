import styled from 'styled-components';
import Button from '../Button/Button';

export default function DeleteModal({ onKeepConfirm, onDeleteConfirm }) {
  return (
    <ModalGrid>
      <p>Are you sure you want to delete this divelog?</p>
      <Button onClick={onKeepConfirm}>No</Button>
      <Button onClick={onDeleteConfirm}>Yes</Button>
    </ModalGrid>
  );
}

const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.7fr;
  justify-items: center;
  max-width: 250px;
  background-color: lightgrey;
  color: black;
  text-align: center;
  border-radius: 20px;
  position: absolute;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;

  p {
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 16px 30px;
  }

  Button {
    width: 40px;
    height: 40px;
  }
`;
