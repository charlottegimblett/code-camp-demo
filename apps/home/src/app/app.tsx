import styled from 'styled-components';
import sunset from '../assets/sunset.jpg';
import trekking from '../assets/trekking.jpg';
import campervan from '../assets/campervan.jpg';
import hotYoga from '../assets/hot-yoga.jpg';

const Hero = styled.div`
  height: 25rem;
  width: 100%;
  margin: 1rem auto;
  background-color: #401506;

  > img {
    width: 100%; /* width of container */
    height: 25rem; /* height of container */
    object-fit: cover;
    // margin: -5rem 0;  
  }
`;

const ActivitiesBox = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Activity = styled.div`
  display: flex;
  width: 100%;
  background-color: #3B5948;
  color: #fff;
  font-size: 2rem;
  font-weight 700;
  align-items: center;
  padding-top: 1rem;
  height: 20rem;
  flex-direction: column;
  justify-content: space-between;
  
  > img {
    height: 17rem;
    width: 100%;
  }

`;

export function App() {
  return (
    <>
    <Hero>
      <img src={sunset}/>
    </Hero>
    <ActivitiesBox>
      <Activity>Trekking <img src={trekking}/></Activity>
      <Activity>Campervan Hire <img src={campervan}/></Activity>
      <Activity>Hot Yoga Classes <img src={hotYoga}/></Activity>
    </ActivitiesBox>
    </>
  );
}

export default App;
