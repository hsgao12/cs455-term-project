import * as types from '../types';


const initialState = {
    shoes: []
};

const executeLoadShoes = action => {
    return action.shoes;
};

const executeLoadBrandShoes = action => {
    return action.shoes;
};



const shoesReducer = (state = initialState.shoes, action) => {
    switch (action.type) {
        case types.GET_ALL_SHOES:
            return executeLoadShoes(action);
        case types.GET_BRAND_SHOES:
            return executeLoadBrandShoes(action);
        default:
            return state;
    }
}

export default shoesReducer;