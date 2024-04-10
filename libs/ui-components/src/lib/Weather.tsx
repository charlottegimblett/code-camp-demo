import { faCloud, faCloudRain, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Colours } from '@code-camp-demo/design-system';

interface WeatherProps {
  weatherCode: number;
}

const WeatherBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${Colours.White};
`;

export const Weather = (props: WeatherProps) => {
  const { weatherCode } = props;

  const Icon = () => {
    if (weatherCode <= 3)
      return <FontAwesomeIcon icon={faSun} color="#F2A007" size="lg" />;
    if (weatherCode > 4 || weatherCode <= 77)
      return <FontAwesomeIcon icon={faCloud} color="#ffffff" />;

    return <FontAwesomeIcon icon={faCloudRain} color="#4589CC" />;
  };

  return (
    <WeatherBox>
      <p>Weather</p>
      <Icon />
    </WeatherBox>
  );
};
