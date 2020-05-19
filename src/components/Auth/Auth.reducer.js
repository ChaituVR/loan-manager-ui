import { GET_USER_REQUEST_SUCCESS, GET_USER_REQUEST_FAIL } from './Auth.constants';

const initialState = {
  user: [],
  status: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_USER_REQUEST_SUCCESS:
    return Object.assign({}, state, {
      status: 'success',
      user: action.payload,
    });
  case GET_USER_REQUEST_FAIL:
    return Object.assign({}, state, {
      status: 'failed',
      user: [],
    });
  default:
    return state;
  };
};