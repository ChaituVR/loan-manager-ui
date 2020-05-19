import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.component';

it('renders without crashing', () => {
  shallow(<Header />);
});