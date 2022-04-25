import styled from 'styled-components';

export default function DeleteModal({ onCancel, onDelete, message }) {
  return (
    <Background>
      <ModalGrid>
        <p>{message}</p>
        <ButtonNo onClick={onCancel}>no</ButtonNo>
        <ButtonYes onClick={onDelete}>yes</ButtonYes>
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
  width: 300px;
  height: 150px;
  background-color: darkcyan;
  color: white;
  text-align: center;
  border-radius: 20px;

  p {
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 16px 30px;
  }
`;

const ButtonYes = styled.button`
  background-color: var(--primary-color);
  width: 80px;
  margin: 10px;
  border-radius: 15px;
  border: none;
  color: white;
`;

const ButtonNo = styled.button`
  background-color: var(--secondary-color);
  color: #00687e;
  width: 80px;
  margin: 10px;
  border-radius: 15px;
  border: none;
`;
