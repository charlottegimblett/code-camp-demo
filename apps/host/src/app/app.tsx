import * as React from 'react';
import styled from 'styled-components';

import { Link, Route, Routes } from 'react-router-dom';

import { loadRemoteModule } from '@nx/react/mf';

const HomeBox = styled.div`  
  width: 70%;
  margin 0 auto;
`;

export function App() {
  const Header = React.lazy(() => loadRemoteModule('header', './Module'));
  const Home = React.lazy(() => loadRemoteModule('home', './Module'));
  const Footer = React.lazy(() => loadRemoteModule('footer', './Module'));
  return (
    <React.Suspense fallback={null}>
      <Header />
      <HomeBox>
        <Home />
      </HomeBox>
      <Footer/>
    </React.Suspense>
  );
}

export default App;
