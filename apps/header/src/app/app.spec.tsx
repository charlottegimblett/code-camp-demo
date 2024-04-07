import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have the website name', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Adventure Plus/gi)).toBeTruthy();
  });
});
