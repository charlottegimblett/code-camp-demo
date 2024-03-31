import styled from 'styled-components';

const Hero = styled.div`
  background-color: #BDDEF2;
  height: 25rem;
  width: 100%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
`;

const ActivitiesBox = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Trekking = styled.div`
  display: flex;
  width: 100%;
  background-color: #401506;
  color: #fff;
  font-size: 2rem;
  font-weight 700;
  justify-content: center;
  padding-top: 1rem;
  height: 20rem;
`;

export function App() {
  return (
    <>
    <Hero>
      Hero Image
    </Hero>
    <ActivitiesBox>
      <Trekking>Trekking</Trekking>
      <Trekking>Campervan Hire</Trekking>
      <Trekking>Hot Yoga Classes</Trekking>
    </ActivitiesBox>
    </>
  );
}

export default App;
