import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have activities', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Trekking/gi)).toBeTruthy();
    expect(getByText(/Campervan Hire/gi)).toBeTruthy();
    expect(getByText(/Hot Yoga Classes/gi)).toBeTruthy();
  });
});
