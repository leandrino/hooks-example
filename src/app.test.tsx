import React from "react";
import ReactDOM from 'react-dom';
import App from './app';

describe('App container', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return { matches: true };
      })
    });
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
