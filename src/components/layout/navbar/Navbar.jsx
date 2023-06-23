import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>Pet Shop</h4>
      <ul className="containerCategories">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
