import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userSlice.js';
import {FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST} from 'redux-persist';


const rootReducer = combineReducers({
    user:userReducer
});

const persistConfigue = {
    key:'root',
    storage,
    version:1
}
const persistedReducer = persistReducer(persistConfigue, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);