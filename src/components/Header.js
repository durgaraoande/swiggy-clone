import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const onlineStatus=useOnlineStatus();
  return (
                <div className="p-4 m-4 flex justify-between items-center bg-blue-100 shadow-lg rounded-lg">
          <Link to="/">
            <img className="w-20 h-auto" src="https://w7.pngwing.com/pngs/963/79/png-transparent-food-truck-hamburger-logo-french-fries-fast-food-truck-food-orange-truck-thumbnail.png" alt="Logo" />
          </Link>
          <ul className="flex space-x-4 my-4">
            <li className="bg-slate-300 p-2 rounded-md">OnlineStatus: {onlineStatus ? "💚" : "❤️"}</li>
            <Link to="/">
              <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">Home</li>
            </Link>
            <Link to="/about">
              <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">About</li>
            </Link>
            <Link to="/contact">
              <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">Contact</li>
            </Link>
            <Link to="/grocery">
              <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">Grocery</li>
            </Link>
            <Link to="">
              <li className="py-2 px-4 rounded-md hover:bg-blue-300 bg-blue-200 transition-colors duration-200">Cart</li>
            </Link>
          </ul>
        </div>

        
  );
};

export default Header;
