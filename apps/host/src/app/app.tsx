import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import { loadRemoteModule } from '@nx/react/mf';

export function App() {
  const Header = React.lazy(() => loadRemoteModule('header', './Module'));
  return (
    <React.Suspense fallback={null}>
      <Header />
      Hello from the host app
    </React.Suspense>
  );
}

export default App;
