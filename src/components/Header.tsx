import { useState } from "react";
import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/onlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus:boolean  =  useOnlineStatus() ; 

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo_url}></img>
      </div>

      <div className="nav-bar">
        <ul>
          <li className="online-status">
            {
              onlineStatus ? "Online status : ✅ online" : "Online status : ❌ offline " 
            }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery Store</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
