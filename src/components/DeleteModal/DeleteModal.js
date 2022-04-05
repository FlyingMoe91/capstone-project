import styled from 'styled-components';
import Button from '../Button/Button';

export default function DeleteModal({ onCancel, onDelete }) {
  return (
    <Background>
      <ModalGrid>
        <p>Are you sure you want to delete this divelog?</p>
        <Button onClick={onCancel}>no</Button>
        <Button onClick={onDelete}>yes</Button>
      </ModalGrid>
    </Background>
  );
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

const ModalGrid = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.7fr;
  justify-items: center;
  max-width: 250px;
  background-color: lightgrey;
  color: black;
  text-align: center;
  border-radius: 20px;

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
