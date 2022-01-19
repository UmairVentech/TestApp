import React, { useState, useEffect } from "react";
import "../styles/loginPage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import login from "../redux/login/loginAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { userInfo, isLoading, isError } = useSelector((state) => state.login);

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  });

  const loginFormHandler = (e) => {
    e.preventDefault();
    if (!loginInfo.email || !loginInfo.password) {
      console.log("Error");
    } else {
      dispatch(login(loginInfo.email, loginInfo.password));
    }
  };

  return (
    <div className="loginPage container">
      <div className="loginForm">
        <h2>Login</h2>
        <form className="form" onSubmit={loginFormHandler}>
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
          <input type="submit" className="btn btn-danger mb-2" value="Login" />
        </form>
        <Link to="/registration">Create an Account</Link>
      </div>
    </div>
  );
};

export default Login;
