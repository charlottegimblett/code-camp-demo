import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Colours, FontSize, FontWeights } from '@code-camp-demo/design-system';
import { Weather, WeatherType } from '@code-camp-demo/ui-components';

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

export function App() {
  const sun: WeatherType = "sun";
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
      <div>
      <Weather weather={sun} />
      <AccountBox>
        <FontAwesomeIcon
          icon={faCartShopping}
          size="lg"
          color={Colours.White}
        />
        <FontAwesomeIcon icon={faUser} size="lg" color={Colours.White} />
      </AccountBox>
      </div>
    </HeaderBox>
  );
}

export default App;
