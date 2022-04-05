import styled from 'styled-components';

export default function Statistics() {
  return (
    <>
      <Button>Dives: 2 </Button>
      <Button>Dives: 2 </Button>
    </>
  );
}

const Button = styled.button`
  width: 80px;
  height: 80px;
  background-color: #2e5bd8;
  color: white;
  font-size: 1.3rem;
  border: 0;
  border-radius: 15px;
`;
