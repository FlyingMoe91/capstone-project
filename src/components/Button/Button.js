import styled from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function Button({ onClick, text }) {
  return (
    <ButtonStyled onClick={onClick}>
      {text}
      <IoMdArrowRoundBack />
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  position: absolute;
  left: 10px;
  top: 10px;
  background-color: #2e5bd8;
  color: white;
`;
