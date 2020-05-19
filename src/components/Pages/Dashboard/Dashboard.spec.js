import React from 'react';
import { shallow, mount } from 'enzyme';
import Dashboard from './Dashboard.component';

const fetchDashboard = jest.fn();
const fetchDashboardAction = jest.fn();

const props = {
  fetchDashboard,
  products: [
    { name: 'Socks',
      id: '11.058612379939659',
      color: 'White',
      price: '5.99', 
    },
  ],
  loaded: true,
};

it('renders without crashing', () => {
  shallow(<Dashboard {...props} />);
});

it('should display one product', () => {
  const wrapper = mount(
    <Dashboard {...props}/>
  );
  expect(wrapper.find('.product-container').length).toBe(1);
});

it('should call fetch products on load', () => {
  mount(
    <Dashboard {...props} fetchDashboard={fetchDashboardAction}/>
  );
  expect(fetchDashboardAction.mock.calls.length).toBe(1);
});