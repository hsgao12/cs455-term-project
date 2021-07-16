import * as types from '../types';
import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const loadShoesData = shoes => {
    return {
        type: types.GET_ALL_SHOES,
        shoes: shoes,
    };
};

export const loadShoes = () => {
    return dispatch => {
        return axios
            .get(baseURL+'/getShoes')
            .then(res => {
                dispatch(loadShoesData(res.data));
            })
            .catch(err => {
                throw err;
            });
    };
};

