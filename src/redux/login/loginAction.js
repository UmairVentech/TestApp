import {
  userLoginError,
  userLoginRequest,
  userLoginSuccess,
  userLogout,
} from "./loginReducer";
import axios from "axios";

const login = (email, password) => async (dispath) => {
  try {
    dispath(userLoginRequest());

    const { data } = await axios.get("http://localhost:8000/userInfo");
    const existUser = data.filter(
      (user) => user.email === email && user.password === password
    );
    dispath(userLoginSuccess(existUser[0]));
    localStorage.setItem("loginInformation", JSON.stringify(existUser[0]));
  } catch (err) {
    dispath(userLoginError("Email or Password is invalid...!"));
  }
};

export const logout = () => (dispath) => {
  localStorage.removeItem("loginInformation");
  dispath(userLogout());
};

export default login;
