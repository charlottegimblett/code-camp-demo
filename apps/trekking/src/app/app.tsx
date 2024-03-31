import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  height: 20rem;
  width: calc(100% / 3);
  background-color: #732D14;
  justify-content: center;
  color: #fff;
  padding-top: 1rem;
  font-size: 2rem;
  font-weight: 700;
`;

export function App() {
  return (
    <StyledApp>
      Trekking
    </StyledApp>
  );
}

export default App;
