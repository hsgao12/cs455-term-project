import {
  SET_USER,
  SET_LOADING,
  SIGN_OUT,
  SET_ERROR,
  NEED_VERIFICATION,
  SET_SUCCESS,
  SET_SHIPPING,
} from '../types';

const initialState = {
  user: null,
  authenticated: false,
  loading: false,
  error: '',
  needVerification: false,
  success: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        authenticated: false,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case NEED_VERIFICATION:
      return {
        ...state,
        needVerification: true,
      };
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    case SET_SHIPPING:
      return {
        ...state,
        user: {
          ...state.user,
          address: action.payload.address,
          city: action.payload.city,
          country: action.payload.country,
        },
      };
    default:
      return state;
  }
};
