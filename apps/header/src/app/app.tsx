import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Colours, FontSize, FontWeights } from '@code-camp-demo/design-system';
import { Weather } from '@code-camp-demo/ui-components';
import { trpc, useGetWeather } from '@code-camp-demo/header-bff';
import { useEffect, useState } from 'react';

const HeaderBox = styled.div`
  display: flex;
  width: 100% - 3rem;
  height: 4rem;
  background-color: ${Colours.Green};
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;
`;

const LogoText = styled.div`
  color: ${Colours.White};
  font-weight: ${FontWeights.Bold};
  font-size: ${FontSize.large};
`;

const Search = styled.div`
  background-color: ${Colours.White};
  height: 2rem;
  width: 14rem;
  border-radius: 4px;
  align-items: center;
  display: flex;
  justify-content: end;
  padding: 0 0.5rem;
`;

const AccountBox = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const RightActionsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export function App() {
  const [weatherCode, setWeatherCode] = useState<number>();

  useEffect(() => {
    const getWeather = async () => {
      const response = await trpc.getWeather.query();
      setWeatherCode(response.current.weatherCode);
    };

    getWeather();
  }, []);

  return (
    <HeaderBox>
      <div>
        <LogoText>Adventure Plus</LogoText>
      </div>
      <div>
        <Search>
          <FontAwesomeIcon icon={faMagnifyingGlass} color={Colours.Red} />
        </Search>
      </div>
      <RightActionsBox>
        {weatherCode && <Weather weatherCode={weatherCode} />}
        <AccountBox>
          <FontAwesomeIcon
            icon={faCartShopping}
            size="lg"
            color={Colours.White}
          />
          <FontAwesomeIcon icon={faUser} size="lg" color={Colours.White} />
        </AccountBox>
      </RightActionsBox>
    </HeaderBox>
  );
}

export default App;
