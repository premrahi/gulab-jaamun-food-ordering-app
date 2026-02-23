import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import newLogo from "../assets/newLogo.png";
import user from "../assets/user.png";
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
          <li className="px2 w-28 text-center  font-medium hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold " : "text-gray-700"
              }
            >
              Contact Us
            </NavLink>
          </li>
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
          <button
            className=" font-bold border-2 p-3 ml-6 rounded-lg bg-white hover:cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4  font-bold flex m-2" ><img
              src={user}
              alt="user"
              className="w-10 p-2 bg-gray-100 rounded-2xl cursor-pointer"
            /> :{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
