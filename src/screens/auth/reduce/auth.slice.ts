import {createSlice} from '@reduxjs/toolkit';
import {apiCallBegan} from '../../../store/api';
import {RootState} from '../../../store/store';
import {AuthResponse} from '../type/auth.type';

export interface authState {
  status: 'idle' | 'loading' | 'failed';
  loading: boolean;
  error?: string | undefined;
  data?: AuthResponse;
}

const initialState: authState = {
  loading: false,
  status: 'idle',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequested: status => {
      status.loading = true;
      status.status = 'loading';
      status.error = undefined;
    },

    authReceived: (status, action) => {
      status.loading = false;
      status.status = 'idle';
      status.data = action.payload;
    },

    authRequestFailed: (status, action) => {
      status.loading = false;
      status.status = 'failed';
      status.error = action.payload;
    },
  },
});

export const {authRequested, authReceived, authRequestFailed} = authSlice.actions;
export const auth = (state: RootState): authState => state.auth;

export default authSlice.reducer;

const url = '/posts';
export const loadposts = () => (dispatch: any) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: authRequested.type,
      onSuccess: authReceived.type,
      onError: authRequestFailed.type,
    }),
  );
};
