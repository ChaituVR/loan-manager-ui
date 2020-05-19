import { combineReducers } from 'redux';
import products from '../components/Pages/Products/Products.reducers';
import auth from '../components/Auth/Auth.reducer';

export default combineReducers({
  products,
  auth,
  // All all reducers here..
});