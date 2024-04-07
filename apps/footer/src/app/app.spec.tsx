import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have footer text', () => {
    const { getByText } = render(<App />);
    expect(
      getByText(
        /Come chat to Charlotte and Malin about our adventures today! Or micro frontends too!/gi
      )
    ).toBeTruthy();
  });
});
