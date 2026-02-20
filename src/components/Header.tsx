import { useState, useContext } from "react";
// import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
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
       <Link to="/"><img className="w-54 ml-6 mt-0.5" src={newLogo} alt="Logo" /></Link>
      </div>

      <div className="justify-center mr-20 mt-3">
        <ul className="flex m-4 items-center ">
          <li className=" font-medium text-gray-500  p-2 px-3 rounded-full   bg-gray-100">
            status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="pl-6 w-28  font-medium text-center hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 w-28  font-medium text-center hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link to="/about">Profile</Link>
          </li>
          {/* <li className="px2 w-28 text-center  font-medium hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link to="/contact">Contact Us</Link>
          </li> */}
          {/* <li className="px-2 w-40 text-center  font-medium hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link to="/Grocery">Grocery Store</Link>
          </li> */}
          <li className="px-2 w-28 font-medium hover:cursor-pointer hover:text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Link to="/cart">
              <span className="bg-yellow-300 rounded-full p-1 m-1 ">
                ({cartItems.length})
              </span>
              Cart
            </Link>
          </li>
          <li>
            <img src={user} alt="user" className="w-10 p-2 bg-gray-100 rounded-2xl cursor-pointer" />
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
