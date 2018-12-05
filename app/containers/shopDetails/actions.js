import firebase from 'react-native-firebase';
import { MAKE_FAVORITE, MAKE_FAVORITE_SUCCESS, MAKE_FAVORITE_FAIL } from './constants';

function MakeFaforite() {
  return {
    type: MAKE_FAVORITE,
    payload: {}
  };
}

function MakeFaforiteSuccess() {
  return {
    type: MAKE_FAVORITE_SUCCESS,
    payload: {}
  };
}

function MakeFaforiteFail(payload) {
  return {
    type: MAKE_FAVORITE_FAIL,
    payload: payload
  };
}

export default function MakeStoreFavorite(shop) {
  return function (dispatch) {
    dispatch(MakeFaforite());
    var recentPostsRef = firebase.database().ref('user/favorites');
    recentPostsRef.push(shop)
      .then(data =>{
        console.log(data);
        dispatch(MakeFaforiteSuccess())
      })
      .catch((err) => dispatch(MakeFaforiteFail({error: err})));
  }
}