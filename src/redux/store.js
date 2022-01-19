import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registeration/registerReducer";
import loginReducer from "./login/loginReducer";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});

export default store;
