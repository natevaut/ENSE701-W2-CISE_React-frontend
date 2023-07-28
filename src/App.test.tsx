import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('Addition', () => {
  it('knows 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  })
})