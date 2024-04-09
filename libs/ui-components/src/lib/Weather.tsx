import { faCloud, faCloudRain, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Colours } from '@code-camp-demo/design-system';

export type WeatherType = 'sun' | 'rain' | 'cloud';

interface WeatherProps {
  weather: WeatherType;
}

const WeatherBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${Colours.White};
`;

export const Weather = (props: WeatherProps) => {
  const { weather } = props;

  const Icon = () => {
    switch (weather) {
      case 'sun':
        return <FontAwesomeIcon icon={faSun} color="#F2A007" size="lg" />;
      case 'rain':
        return <FontAwesomeIcon icon={faCloudRain} color="#ffffff" />;
      case 'cloud':
        return <FontAwesomeIcon icon={faCloud} color="#4589CC" />;
    }
  };

  return (
    <WeatherBox>
      <p>Weather</p>
      <Icon />
    </WeatherBox>
  );
};
