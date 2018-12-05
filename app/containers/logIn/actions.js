import firebase from 'react-native-firebase';
import { AUTHENTICATE, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAIL } from './constants';

function Authenticate() {
  return {
    type: AUTHENTICATE,
    payload: {}
  };
}

function AuthenticateSuccess(payload) {
  return {
    type: AUTHENTICATE_SUCCESS,
    payload: payload
  };
}

function AuthenticateFail(payload) {
  return {
    type: AUTHENTICATE_FAIL,
    payload: payload
  };
}

export default function AuthenticateUser(credentials) {
  return function (dispatch) {
    dispatch(Authenticate());
    return firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => dispatch(AuthenticateSuccess({authenticate: true})))
      .catch(() => dispatch(AuthenticateFail({failedAuth: true})));
  }
}