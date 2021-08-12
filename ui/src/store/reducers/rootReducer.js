import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import authReducer from './authReducer';
import shoesReducer from './shoesReducer';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['auth', 'shoes'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  shoes: shoesReducer,
});

// export default persistReducer(persistConfig, rootReducer);

export default rootReducer;
