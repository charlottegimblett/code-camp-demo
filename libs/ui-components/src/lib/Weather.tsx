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
  gap: 1rem;
  color: ${Colours.White};
`;

export const Weather = (props: WeatherProps) => {
  const { weatherCode } = props;

  const Icon = () => {
    if (weatherCode <= 3)
      return <FontAwesomeIcon icon={faSun} color="#F2A007" size="2x" />;
    if (weatherCode > 4 || weatherCode <= 77)
      return <FontAwesomeIcon icon={faCloud} color="#ffffff" size="2x" />;

    return <FontAwesomeIcon icon={faCloudRain} color="#4589CC" size="2x" />;
  };

  return (
    <WeatherBox>
      <p>Current weather</p>
      <Icon />
    </WeatherBox>
  );
};
