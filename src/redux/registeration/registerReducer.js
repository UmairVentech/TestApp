import { createSlice } from "@reduxjs/toolkit";

export const registerartionSlice = createSlice({
  name: "register",
  initialState: {
    userInfo: null,
    isError: false,
    isLoading: false,
  },
  reducers: {
    userRegistartionRequest: (state) => {
      state.isLoading = true;
    },

    userRegistartionSuccess: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    userRegistartionFaild: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {
  userRegistartionRequest,
  userRegistartionSuccess,
  userRegistartionFaild,
} = registerartionSlice.actions;
export default registerartionSlice.reducer;
