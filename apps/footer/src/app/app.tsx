import styled from 'styled-components';

const FooterBox = styled.div`
  display: flex;
  width: 100% - 3rem;
  height: 5.25rem;
  background-color: #3B5948;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: center;
  color: white;
`;

export function App() {
  return (
    <FooterBox>
      ✨
      Come chat to Charlotte and Malin about our adventures today! Or micro frontends too!
      ✨
    </FooterBox>
  );
}

export default App;
