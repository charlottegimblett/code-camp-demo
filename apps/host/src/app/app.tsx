import * as React from 'react';
import styled from 'styled-components';

import { Link, Route, Routes } from 'react-router-dom';

import { loadRemoteModule } from '@nx/react/mf';

const ActivityBox = styled.div`
  background-color: #BDDEF2;
  width: 70%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export function App() {
  const Header = React.lazy(() => loadRemoteModule('header', './Module'));
  const Hero = React.lazy(() => loadRemoteModule('hero', './Module'));
  const Trekking = React.lazy(() => loadRemoteModule('trekking', './Module'));
  return (
    <React.Suspense fallback={null}>
      <Header />
      <Hero />
      <ActivityBox>
        <Trekking/>
      </ActivityBox>
    </React.Suspense>
  );
}

export default App;
