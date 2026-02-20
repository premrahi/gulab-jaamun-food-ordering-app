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

  //Subscribing to the store using a selector
  const cartItems = useSelector((store: any) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-white h-22 ">
      <div className="ml-14 justify-center">
        <NavLink to="/">
          <img className="w-54 ml-6 mt-0.5" src={newLogo} alt="Logo" />
        </NavLink>
      </div>

      <div className=" flex justify-between mr-20">
        <ul className="flex m-4 justify-center items-center mx-auto">
          <li className=" font-medium text-gray-500  p-2 px-3 rounded-full   bg-gray-100">
            status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="pl-6 w-28  font-medium text-center hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold " : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-2 w-28  font-medium text-center hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold " : "text-gray-700"
              }
            >
              Profile
            </NavLink>
          </li>
          {/* <li className="px2 w-28 text-center  font-medium hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link to="/contact">Contact Us</Link>
          </li> */}
          {/* <li className="px-2 w-40 text-center  font-medium hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link to="/Grocery">Grocery Store</Link>
          </li> */}
          <li className="px-2 w-28 font-medium hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold " : "text-gray-700"
              }
            >
              <span className="bg-yellow-300 rounded-full p-1 m-1 ">
                ({cartItems.length})
              </span>
              Cart
            </NavLink>
          </li>
          <li>
            <img
              src={user}
              alt="user"
              className="w-10 p-2 bg-gray-100 rounded-2xl cursor-pointer"
            />
          </li>
          {/* <button
            className="px-6 font-bold border-2 py-4 rounded-lg bg-white hover:cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4  font-bold">USER : {loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
