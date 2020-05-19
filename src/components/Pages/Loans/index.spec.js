import React from 'react';
import { shallow, mount } from 'enzyme';
import Customers from './index.component';

const fetchCustomers = jest.fn();
const fetchCustomersAction = jest.fn();

const props = {
  fetchCustomers,
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
  shallow(<Customers {...props} />);
});

it('should display one product', () => {
  const wrapper = mount(
    <Customers {...props}/>
  );
  expect(wrapper.find('.product-container').length).toBe(1);
});

it('should call fetch products on load', () => {
  mount(
    <Customers {...props} fetchCustomers={fetchCustomersAction}/>
  );
  expect(fetchCustomersAction.mock.calls.length).toBe(1);
});