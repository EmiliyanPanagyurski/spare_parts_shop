import firebase from 'react-native-firebase';
import { GET_STORES, GET_STORES_SUCCESS, GET_STORES_FAIL, GET_USER, GET_USER_SUCCESS, GET_USER_FAIL } from './constants';

function GetStores() {
  return {
    type: GET_STORES,
    payload: {}
  };
}

function GetStoresSuccess(payload) {
  return {
    type: GET_STORES_SUCCESS,
    payload: payload
  };
}

function GetStoresFail(payload) {
  return {
    type: GET_STORES_FAIL,
    payload: payload
  };
}

function GetUser() {
  return {
    type: GET_USER,
    payload: {}
  };
}

function GetUserSuccess(payload) {
  return {
    type: GET_USER_SUCCESS,
    payload: payload
  };
}

function GetUserFail(payload) {
  return {
    type: GET_USER_FAIL,
    payload: payload
  };
}


export function FetchStores() {
  console.log('called');
  return function (dispatch) {
    dispatch(GetStores());
    var recentPostsRef = firebase.database().ref('shops/');
    recentPostsRef.once('value')
      .then(snapshot =>{
        const shops = Object.values(snapshot.val());
        dispatch(GetStoresSuccess({shops}))
      })
      .catch((err) => dispatch(GetStoresFail({available: false})));
  }
}

export function GetUserDetails() {
  return function (dispatch) {
    dispatch(GetUser());
    var recentPostsRef = firebase.database().ref('user/');
    recentPostsRef.once('value')
    .then(snapshot =>{
      const user = snapshot.val();
      dispatch(GetUserSuccess({user}))
    })
    .catch((err) => dispatch(GetUserFail({err})));
  }
}