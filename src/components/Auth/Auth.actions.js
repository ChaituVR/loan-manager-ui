import { GET_USER_REQUEST_SUCCESS, GET_USER_REQUEST_FAIL } from './Auth.constants';

export const userLoggedIn = (user) => {
  return {
    type: GET_USER_REQUEST_SUCCESS,
    payload: user,
  };
};
  
export const userSignedOut = () => {
  return {
    type: GET_USER_REQUEST_FAIL,
  };
};