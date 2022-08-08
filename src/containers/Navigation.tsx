import React from "react";
import Logo from "../assets/Logo.png";
import user from "../assets/user.png";
import dwnarrow from "../assets/dwnarrow.png";
import helpCircle from "../assets/help-circle.png";
import shoppingCart from "../assets/shopping-cart.png";
import { NavPopover } from "../components/NavPopover";

interface Props {}

export const Navigation: React.FC<Props> = () => {
  return (
    <div className="flex justify-between">
      <img src={Logo} alt="Logo" />

      <form>
        <input
          className="search-bar"
          placeholder="Search products, brand and categories"
        ></input>
        <button>SEARCH</button>
      </form>

      <NavPopover popImg={user} arrow={dwnarrow} text={"Account"} />
      <NavPopover popImg={helpCircle} arrow={dwnarrow} text={"Help"} />
      <NavPopover popImg={shoppingCart} arrow={dwnarrow} text={"Cart"} />
    </div>
  );
};
