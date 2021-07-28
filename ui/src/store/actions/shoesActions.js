import * as types from '../types';
import axios from 'axios';

export const loadShoesData = (shoes) => {
  return {
    type: types.GET_ALL_SHOES,
    shoes: shoes,
  };
};

export const loadShoes = () => {
  return (dispatch) => {
    return axios
      .get('/getShoes')
      .then((res) => {
        dispatch(loadShoesData(res.data));
      })
      .catch((err) => {
        throw err;
      });
  };
};
