import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import newLogo from "url:../assets/newLogo.png";
import user from "url:../assets/user.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus: boolean = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store: any) => store.cart.cartItems);

  return (
    <div className="flex flex-col md:flex-row md:h-20 h-2/6 items-center justify-between shadow-lg w-full bg-white px-4 py-3">
      
      {/* Logo */}
      <div className="flex items-center -mt-6 md:mt-3">
        <NavLink to="/">
          <img className="w-48 md:w-52" src={newLogo} alt="Logo" />
        </NavLink>
      </div>

      {/* Navigation */}
      <div className="-mt-8 md:mt-0 ">
        <ul className="flex items-center gap-3 md:gap-6 md:text-lg text-sm flex-wrap md:mr-5">

          {/* Online Status */}
          <li className="font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {onlineStatus ? "🟢" : "🔴"}
          </li>

          {/* Home */}
          <li className="font-medium  hover:scale-105 transition">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>

          {/* Profile */}
          <li className="font-medium hover:scale-105 transition">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold" : "text-gray-700"
              }
            >
              Profile
            </NavLink>
          </li>

          {/* Contact */}
          <li className="font-medium hover:scale-105 transition">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold" : "text-gray-700"
              }
            >
              Contact Us
            </NavLink>
          </li>

          {/* Cart */}
          <li className="font-medium hover:scale-105 transition">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold" : "text-gray-700"
              }
            >
              <span className="bg-yellow-300 rounded-full px-2 py-1 mr-1">
                ({cartItems.length})
              </span>
              Cart
            </NavLink>
          </li>
              
          {/* Login Button */}
          {/* <button
            className="font-semibold shadow-md px-4 py-1 bg-pink-300 rounded-full hover:cursor-pointer"
            onClick={() =>
              btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login")
            }
          >
            {btnName}
          </button> */}

          {/* User Icon */}
          <li>
            <img
              src={user}
              alt="user"
              className="md:w-10 w-8 p-2 bg-gray-100 rounded-2xl cursor-pointer"
            />
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;