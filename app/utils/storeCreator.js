import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from './reducerCreator';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
 };

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  pReducer,
  applyMiddleware(thunk, logger)
);

export const persistor = persistStore(store);