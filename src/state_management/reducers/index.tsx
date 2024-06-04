import { createStore, applyMiddleware, combineReducers , Reducer, Middleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  {authReducers}  from './authReducers';
import { thunk } from 'redux-thunk';
import logger from "redux-logger";

const appReducer =combineReducers({
    authReducers
})
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,  appReducer as Reducer<unknown, never>);

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk as Middleware, logger as Middleware )
);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof appReducer>;
