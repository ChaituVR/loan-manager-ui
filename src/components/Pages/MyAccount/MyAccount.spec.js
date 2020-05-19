import React from 'react';
import { shallow } from 'enzyme';
import MyAccount from './MyAccount.component';

it('renders without crashing', () => {
  shallow(<MyAccount />);
});