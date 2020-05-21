import React from 'react';
import { shallow } from 'enzyme';
import App from './App.component';

it('renders without crashing', () => {
  shallow(<App />);
});

it('check endpoint is up and running', async () => {
  // TODO: ADD test case to check endpoint is working
  // const res = await fetch('http://localhost:8081/api/products');
  // expect(res.status).toBe(200);
});