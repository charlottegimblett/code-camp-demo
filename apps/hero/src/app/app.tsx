import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: #BDDEF2;
  height: 25rem;
  width: 70%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
`;

export function App() {
  return (
    <StyledApp>
      Hero Image
    </StyledApp>
  );
}

export default App;
