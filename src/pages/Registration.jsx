import React, { useEffect, useState } from "react";
import "../styles/loginPage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import register from "../redux/registeration/registerAction";

const Registration = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    username: "",
    password: "",
    repassword: "",
  });

  const dispatch = useDispatch();
  const { userInfo, isLoading, isError } = useSelector(
    (state) => state.register
  );

  const loginFormHandler = (e) => {
    e.preventDefault();
    const email = loginInfo.email;
    const username = loginInfo.username;
    const password = loginInfo.password;

    if (password !== loginInfo.repassword) {
      console.log("Password is Not Match...!");
    } else {
      if (!password || !username || !email) {
        console.log("Please Fill All Fields");
      } else {
        dispatch(register(username, email, password));
      }
    }
  };

  return (
    <div className="loginPage container">
      <div className="loginForm">
        <h2>Registration</h2>
        <form className="form" onSubmit={loginFormHandler}>
          <input
            name="username"
            value={loginInfo.username}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, username: e.target.value })
            }
            type="text"
            className="form-control"
            placeholder="Username"
          />
          <br />
          <input
            name="email"
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
            type="email"
            className="form-control"
            placeholder="Email"
          />
          <br />
          <input
            name="password"
            value={loginInfo.password}
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
          <br />
          <input
            name="repassword"
            value={loginInfo.repassword}
            type="password"
            className="form-control"
            placeholder="Enter Again Password"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, repassword: e.target.value })
            }
          />
          <br />
          <input
            type="submit"
            className="btn btn-danger mb-2"
            value="Register"
          />
        </form>
        <Link to="/login">Already have an account</Link>
      </div>
    </div>
  );
};

export default Registration;
