import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const {userName}=useContext(UserContext);
  const cart=useSelector((state)=>state.cart.items);
  return (
    <div className="p-4 m-4 flex justify-between items-center bg-blue-100 shadow-lg rounded-lg">
      <Link to="/">
        <img
          className="w-20 h-auto"
          src="https://w7.pngwing.com/pngs/963/79/png-transparent-food-truck-hamburger-logo-french-fries-fast-food-truck-food-orange-truck-thumbnail.png"
          alt="Logo"
        />
      </Link>
      <ul className="flex space-x-4 my-4">
        <li className="bg-slate-300 p-2 rounded-md">
          OnlineStatus: {onlineStatus ? "💚" : "❤️"}
        </li>
        <Link to="/">
          <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">
            About
          </li>
        </Link>
        <Link to="/contact">
          <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">
            Contact
          </li>
        </Link>
        <Link to="/grocery">
          <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">
            Grocery
          </li>
        </Link>
        <Link to="/cart">
          <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">
            Cart - ({cart.length} items)
          </li>
        </Link>
        <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">
            {userName}
        </li>
      </ul>
    </div>
  );
};

export default Header;
