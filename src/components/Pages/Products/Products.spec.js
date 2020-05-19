import React from 'react';
import { shallow, mount } from 'enzyme';
import Products from './Products.component';

const fetchProducts = jest.fn();
const fetchProductsAction = jest.fn();

const props = {
  fetchProducts,
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
  shallow(<Products {...props} />);
});

it('should display one product', () => {
  const wrapper = mount(
    <Products {...props}/>
  );
  expect(wrapper.find('.product-container').length).toBe(1);
});

it('should call fetch products on load', () => {
  mount(
    <Products {...props} fetchProducts={fetchProductsAction}/>
  );
  expect(fetchProductsAction.mock.calls.length).toBe(1);
});