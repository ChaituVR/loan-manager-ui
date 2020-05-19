import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from './Dashboard.constants';

const initialState = {
  loading: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_PRODUCTS_REQUEST:
    return {
      data: [],
      loading: true,
    };
  case GET_PRODUCTS_SUCCESS:
    return {
      data: action.payload,
      loading: false,
    };
    
  default:
    return state;
  };
};