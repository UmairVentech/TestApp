import { createSlice } from "@reduxjs/toolkit";

const loginInfoLocalStorage = localStorage.getItem("loginInformation")
  ? JSON.parse(localStorage.getItem("loginInformation"))
  : null;

export const loginSlice = createSlice({
  name: "loginInfo",
  initialState: {
    userInfo: loginInfoLocalStorage,
    isLoading: false,
    isError: "",
  },
  reducers: {
    userLoginRequest: (state) => {
      state.isLoading = true;
    },
    userLoginSuccess: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      state.isError = "";
    },
    userLoginError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    userLogout: (state) => {
      state.isLoading = false;
      state.userInfo = null;
    },
  },
});

export const {
  userLoginError,
  userLoginRequest,
  userLoginSuccess,
  userLogout,
} = loginSlice.actions;
export default loginSlice.reducer;
