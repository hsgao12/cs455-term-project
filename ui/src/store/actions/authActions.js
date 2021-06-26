import { ThunkAction } from 'redux-thunk';

import {
  SET_USER,
  SET_LOADING,
  SIGN_OUT,
  SET_ERROR,
  NEED_VERIFICATION,
  SET_SUCCESS,
} from '../types';

import firebase from '../../auth/firebase';

export const signup = (data, onError) => {
  return async (dispatch) => {
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      if (res.user) {
        const userData = {
          email: data.email,
          id: res.user.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        };
        await firebase
          .firestore()
          .collection('/users')
          .doc(res.user.uid)
          .set(userData);
        await res.user.sendEmailVerification();
        dispatch({
          type: NEED_VERIFICATION,
        });
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
    } catch (err) {
      console.log(err);
      onError();
      dispatch(setError(err.message));
    }
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      const user = await firebase.firestore().collection('users').doc(id).get();
      if (user.exists) {
        const userData = user.data();
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const setLoading = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: value,
    });
  };
};

export const signin = (data, onError) => {
  return async (dispatch) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
    } catch (err) {
      console.log(err);
      onError();
      dispatch(setError(err.message));
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await firebase.auth.signout();
      dispatch({
        type: SIGN_OUT,
      });
    } catch (err) {
      console.log(err);
      dispatch(setLoading(false));
    }
  };
};

export const setError = (message) => {
  return (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: message,
    });
  };
};

export const setNeedVerification = () => {
  return (dispatch) => {
    dispatch({
      type: NEED_VERIFICATION,
    });
  };
};

export const setSuccess = (message) => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS,
      payload: message,
    });
  };
};

export const sendPasswordResetEmail = (email, successMsg) => {
  return async (dispatch) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      dispatch(setSuccess(successMsg));
    } catch (err) {
      console.log(err);
      dispatch(setError(err.message));
    }
  };
};
