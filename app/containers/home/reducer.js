import { GET_STORES, GET_STORES_SUCCESS, GET_STORES_FAIL, GET_USER, GET_USER_SUCCESS, GET_USER_FAIL } from './constants';

const initialState = {
  shops: [],
  available: false,
  user: {}
};

export default HomeReducer = (state=initialState, action) => {
  switch(action.type){
    case GET_STORES:
      return {
        ...state
      };
    case GET_STORES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        available: true
      };
    case GET_STORES_FAIL:
      return {
        ...state,
        ...action.payload,
        available: false
      };
    case GET_USER:
      return {
        ...state
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}