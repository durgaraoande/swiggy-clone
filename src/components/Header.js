import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src="https://w7.pngwing.com/pngs/963/79/png-transparent-food-truck-hamburger-logo-french-fries-fast-food-truck-food-orange-truck-thumbnail.png" />
      </a>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
