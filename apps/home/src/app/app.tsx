import sunset from '../assets/sunset.jpg';
import trekking from '../assets/trekking.jpg';
import campervan from '../assets/campervan.jpg';
import hotYoga from '../assets/hot-yoga.jpg';
import { ActivitiesBox, Activity, Hero } from '@code-camp-demo/ui-components';

export function App() {
  return (
    <>
      <Hero>
        <img src={sunset} />
      </Hero>
      <ActivitiesBox>
        <Activity>
          Trekking <img src={trekking} />
        </Activity>
        <Activity>
          Campervan Hire <img src={campervan} />
        </Activity>
        <Activity>
          Hot Yoga Classes <img src={hotYoga} />
        </Activity>
      </ActivitiesBox>
    </>
  );
}

export default App;
