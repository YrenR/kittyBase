import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import authReducer from '../screens/auth/reduce/auth.slice';
import api from './middleware/api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
