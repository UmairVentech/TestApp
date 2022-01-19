import {
  userRegistartionRequest,
  userRegistartionSuccess,
  userRegistartionFaild,
} from "../registeration/registerReducer";
import axios from "axios";

const register = (username, email, password) => async (dispatch) => {
  const registerInformation = { username, email, password };
  try {
    dispatch(userRegistartionRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:8000/userInfo/",
      registerInformation,
      config
    );

    dispatch(userRegistartionSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(userRegistartionFaild("Something went wrong...!"));
  }
};

export default register;
