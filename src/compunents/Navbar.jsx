import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/login/loginAction";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <div className="d-flex justify-content-evenly align-items-center w-100">
        <ul className="navItems">
          <li className="navItem">
            <Link to="/" className="navLinks">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/blogs" className="navLinks">
              Blogs
            </Link>
          </li>
          <li className="navItem">
            <Link to="/services" className="navLinks">
              Services
            </Link>
          </li>
          <li className="navItem">
            <Link to="/products" className="navLinks">
              Products
            </Link>
          </li>
        </ul>
        <div>
          <h3 className="text-danger">
            <Link to="/" className="navLinks">
              Task
            </Link>
          </h3>
        </div>
        <ul className="navItems">
          <li className="navItem">
            <Link to="/pictures" className="navLinks">
              Pictures
            </Link>
          </li>
          <li className="navItem">
            <Link to="/design" className="navLinks">
              Design
            </Link>
          </li>
          <li className="navItem">
            <Link to="/production" className="navLinks">
              Production
            </Link>
          </li>
          {userInfo ? (
            <li className="navItem">
              <Link
                to="#"
                onClick={logoutHandler}
                className="navLinks loginBtn"
              >
                Logout
              </Link>
            </li>
          ) : (
            <li className="navItem">
              <Link to="/login" className="navLinks loginBtn">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
