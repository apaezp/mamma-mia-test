import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useContext } from "react";
import PizzasContext from "../PizzasContext";
import { formatNumber } from "../helpers";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "undefined");

  const { shoppingCart } = useContext(PizzasContext);
  const total = shoppingCart.reduce(
    (a, { count, price }) => a + price * count,
    0
  );

  return (
    <div className="navbar d-flex padding 2%">
      <div>
        <NavLink className={setActiveClass} to="/">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/samsung/128/slice-of-pizza_1f355.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />{" "}
          Pizzeria Mamma Mía!
        </NavLink>
      </div>
      <div className="shoppingCart">
        <NavLink className={setActiveClass} to="/shoppingCart">
          <h4 className="mb-0">
            {" "}
            &#128722; {""} Cart: ${formatNumber(total)}
          </h4>
        </NavLink>
      </div>
    </div>
  );
}
