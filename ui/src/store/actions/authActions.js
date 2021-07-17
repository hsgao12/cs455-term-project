import { ThunkAction } from "redux-thunk";
import axios from "axios";

import {
  SET_USER,
  SET_LOADING,
  SIGN_OUT,
  SET_ERROR,
  NEED_VERIFICATION,
  SET_SUCCESS,
  SET_SHIPPING,
} from "../types";

import firebase from "../../auth/firebase";
var userIDValue = { userID: "" };
export default userIDValue;

export const signup = (data, onError, setRegisterFormOpen) => {
  return async (dispatch) => {
    try {
      if (data.firstName === "" || data.lastName === "") {
        throw new Error("Please include your full name");
      }
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      if (res.user) {
        const userData = {
          email: data.email,
          id: res.user.uid,
          firstName: data.firstName,
          lastName: data.lastName,
        };
        await axios.post("http://localhost:3000/users/addUser", userData);
        await res.user.sendEmailVerification();
        dispatch({
          type: NEED_VERIFICATION,
        });
        dispatch({
          type: SET_USER,
          payload: userData,
        });
        setRegisterFormOpen(false);
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
      const res = await axios.get(`http://localhost:3000/users/getUser/${id}`);
      if (res != null) {
        const userData = res.data.user;
        console.log(userData);
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

export const signin = (data, onError, setLoginFormOpen) => {
  return async (dispatch) => {
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      // TODO: use proper way to get uid
      userIDValue.userID = res.user.uid;
      console.log(userIDValue.userID);
      dispatch(getUserById(res.user.uid));
      dispatch(setLoading(false));
      setLoginFormOpen(false);
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
      await firebase.auth().signOut();
      dispatch({
        type: SIGN_OUT,
      });
    } catch (err) {
      console.log(err);
      dispatch(setLoading(false));
    }
  };
};

export const editShipping = (id, newAddress, setModal) => {
  return async (dispatch) => {
    try {
      if (
        newAddress.address === "" ||
        newAddress.country === "" ||
        newAddress.city === ""
      ) {
        throw new Error("You must fill in all fields!");
      }
      dispatch(setLoading(true));
      const res = await axios.put(
        `http://localhost:3000/users/setUserAddress/${id}`,
        newAddress
      );
      const user = res.data.user;
      dispatch({
        type: SET_SHIPPING,
        payload: {
          address: user.address,
          city: user.city,
          country: user.country,
        },
      });
      dispatch(setLoading(false));
      setModal(false);
    } catch (err) {
      dispatch(setError(err.message));
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
