import styled from 'styled-components';

export default function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button``;
