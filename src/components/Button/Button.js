import styled, { css } from 'styled-components';

export default styled.button`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #2e5bd8;
  color: white;

  ${props =>
    props.variant === 'round' &&
    css`
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background-color: #2e5bd8;
      color: white;
    `}

  ${props =>
    props.variant === 'submit' &&
    css`
      background-color: #2e5bd8;
      color: white;
      width: 200px;
      height: 50px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 10px;
      font-size: 1.3rem;
    `}
`;

// import { IoMdArrowRoundBack } from 'react-icons/io';
// <IoMdArrowRoundBack />
