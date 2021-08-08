import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import authReducer from "./authReducer"; 
import shoesReducer from "./shoesReducer"; 

const persistConfig = {
    key: 'root', 
    storage, 
    whitelist: ["auth", "shoes"]
}

const rootReducer = combineReducers({
    auth: authReducer, 
    shoes: shoesReducer
}); 

export default persistReducer(persistConfig, rootReducer);