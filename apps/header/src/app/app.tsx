import styled from 'styled-components';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons"

const HeaderBox = styled.div`
  display: flex;
  width: 100% - 3rem;
  height: 4rem;
  background-color: #3B5948;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;
`;

const LogoText = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
`;

const Search = styled.div`
  background-color: #fff;
  height: 2rem;
  width 14rem;
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
  return (
    <HeaderBox>
      <div>
        <LogoText>LOGO</LogoText>
      </div>
      <div>
        <Search>
          <FontAwesomeIcon icon={faMagnifyingGlass} color='#401506'/>
        </Search>
      </div>
      <AccountBox>
        <FontAwesomeIcon icon={faCartShopping} size='lg' color='#ffffff'/>
        <FontAwesomeIcon icon={faUser} size='lg' color='#ffffff' />
      </AccountBox>
    </HeaderBox>
  );
}

export default App;
