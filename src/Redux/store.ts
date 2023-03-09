import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './slice';

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, userReducer)
  export  const store = configureStore({
  reducer: {
    user: persistedReducer ,
  },
});
export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)