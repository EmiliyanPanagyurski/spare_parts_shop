import { AUTHENTICATE, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAIL } from './constants';

const initialState = {
  authenticate: false,
  authenticating: false,
  failedAuth: false
};

export default loginReducer = (state=initialState, action) => {
  switch(action.type){
    case AUTHENTICATE:
      return {
        ...state,
        authenticating: true
      };
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        authenticating: false
      };
    case AUTHENTICATE_FAIL:
      return {
        ...state,
        ...action.payload,
        authenticating: false
      };
    default:
      return state;
  }
}