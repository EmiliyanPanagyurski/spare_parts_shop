import { combineReducers } from 'redux';
import LoginReducer from '../containers/logIn/reducer';
import HomeReducer from '../containers/home/reducer';
import ShopDetailReducer from '../containers/shopDetails/reducer';

export default rootReducer = combineReducers({
  LoginReducer,
  HomeReducer,
  ShopDetailReducer
});