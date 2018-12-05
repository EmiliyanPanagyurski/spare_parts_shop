import { MAKE_FAVORITE, MAKE_FAVORITE_SUCCESS, MAKE_FAVORITE_FAIL } from './constants';

const initialState = {
  newlyAddedToFavorites: ''
};

export default ShopDetailReducer = (state=initialState, action) => {
  switch(action.type){
    case MAKE_FAVORITE:
      return {
        ...state
      };
    case MAKE_FAVORITE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case MAKE_FAVORITE_FAIL:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}