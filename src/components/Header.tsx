import { useState } from "react";
import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/onlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus: boolean = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-xl bg-orange-100">
      <div className="logo-container">
        <img className="w-45 ml-6 mt-2.5"  src={logo_url} ></img>
      </div>

      <div className="nav-bar ">
        <ul className="flex p-14 m-4 items-center ">
          <li className="px-8 font-extrabold ">
            Online status :
            {onlineStatus ? " ✅ online " : " ❌ offline "}
          </li>
          <li className="px-4 font-medium hover:cursor-pointer hover:text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-medium hover:cursor-pointer hover:text-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-medium hover:cursor-pointer hover:text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-medium hover:cursor-pointer hover:text-xl">
            <Link to="/Grocery">Grocery Store</Link>
          </li>
          <li className="px-4 font-medium hover:cursor-pointer hover:text-xl">Cart</li>
          <button
            className="px-8 font-bold border-2 p-4 rounded-lg bg-white hover:cursor-pointer"
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
