import { createSlice } from "@reduxjs/toolkit";

type AuthStateType = {
  isAuthenticated: boolean;
};

const initialAuthState: AuthStateType = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;
