import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IUser from '../models/User';


const initialState = {} as IUser;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication: (state: IUser, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { setAuthentication } = authSlice.actions;

export default authSlice.reducer;
