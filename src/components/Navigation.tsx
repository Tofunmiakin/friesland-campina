import React from "react";
import Logo from "../assets/Logo.png";
import user from "../assets/user.png";
import dwnarrow from "../assets/dwnarrow.png";
import helpCircle from "../assets/help-circle.png";
import shoppingCart from "../assets/shopping-cart.png";
import { NavPopover } from "./NavPopover";

interface Props {}

export const Navigation: React.FC<Props> = () => {
  return (
    <div className="Navigation flex justify-between p-10">
      <img src={Logo} alt="Logo" className="Logo" />

      <div className="my-auto ">
        <form className="">
          <input
            className="search-bar border pl-12"
            placeholder="Search products, brand and categories"
          ></input>
          <button className="search-button">SEARCH</button>
        </form>
      </div>

      <div className="flex my-auto space-x-5">
        <NavPopover popImg={user} arrow={dwnarrow} text={"Account"} />
        <NavPopover popImg={helpCircle} arrow={dwnarrow} text={"Help"} />
        <NavPopover popImg={shoppingCart} arrow={dwnarrow} text={"Cart"} />
      </div>
    </div>
  );
};
