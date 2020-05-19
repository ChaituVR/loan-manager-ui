import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from './Products.constants';
const response = { 
  items: [ { name: 'Socks',
    id: '11.058612379939659',
    color: 'White',
    price: '5.99' },
  { name: 'Shoes',
    id: '801.5079263869567',
    color: 'Green',
    price: '33.33' },        
  { name: 'Bulbs',
    id: '691.9383410682989',
    color: 'Red',
    price: '2.99' },
  { name: 'Basket Ball',    
    id: '13.414901371048948',
    color: 'Brown',
    price: '39.99' },
  { name: 'Soccer Ball',
    id: '994.7400499081875',
    color: 'White',
    price: '39.99' } ],
};

export const addProducts = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};

export const addProductsSuccess = (response) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: response.items,
  };
};

export const fetchProducts = (dispatch) => {
  dispatch(addProducts());
  setTimeout(() => {
    dispatch(addProductsSuccess(response));
  }, 3000);
  //   Example fetch
  //   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //     .then(response => response.json())
  //     .then(json => dispatch(receivePosts(subreddit, json)))
};