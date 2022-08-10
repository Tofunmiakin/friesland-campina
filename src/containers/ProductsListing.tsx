import React from "react";
import { MySlider } from "../components/MySlider";
import "../styles/index.css";
import fivestars from "../assets/fivestars.png";
import fourstars from "../assets/fourstars.png";
import threestars from "../assets/threestars.png";
import twostars from "../assets/twostars.png";
import onestar from "../assets/onestar.png";

interface Props {}

export const ProductsListing: React.FC<Props> = () => {
  return (
    <div className="product-listing ml-10">
      <div className="left-side">
        <div className="listing category bg-white space-y-1 p-5">
          <p className="font-medium">CATEGORY</p>
          <p className="font-medium">Bottled Beverages</p>
          <p className="">Drink Mixes</p>
          <p className="">Goat Milk</p>
          <p className="">Flavored Milk</p>
          <p className="">Goat Milk</p>
          <p className="">Light Cream</p>
        </div>

        <div className="listing brand bg-white p-5">
          <p className="font-medium">BRAND</p>
          <input type="checkbox" className="mt-2" checked />
          <label className="ml-1">Peak</label>
          <br />
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">Coaster</label>
          <br />
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">Peak 256</label>
          <br />
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">Olympic</label>
          <br />
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">Three Crowns</label>
          <br />
        </div>

        <div className="listing price bg-white p-5">
          <div className="flex space-x-36">
            <p className="font-medium">PRICE (₦)</p>
            <p className="apply">APPLY</p>
          </div>
          <MySlider />
          <div className="flex mt-5">
            <input className="border w-28 h-10 rounded-md" />
            <input className="border w-28 ml-8 rounded-md" />
          </div>
        </div>

        <div className="listing product-rating bg-white p-5">
          <p className="font-medium">PRODUCT RATING</p>
          <div className="flex">
            <input type="radio" name="coolradio" value="one" />
            <img src={fivestars} className="ml-1" />
          </div>
          <div className="flex">
            <input type="radio" name="coolradio" value="two" />
            <img src={fourstars} className="ml-1" />
          </div>
          <div className="flex">
            <input type="radio" name="coolradio" value="three" />
            <img src={threestars} className="ml-1" />
          </div>
          <div className="flex">
            <input type="radio" name="coolradio" value="four" />
            <img src={twostars} className="ml-1" />
          </div>
          <div className="flex">
            <input type="radio" name="coolradio" value="five" />
            <img src={onestar} className="ml-1" />
          </div>
        </div>

        <div className="listing discount-percentage bg-white p-5">
          <p className="font-medium">DISCOUNT PERCENTAGE</p>
          <div className="flex">
            <input type="radio" name="coolradioo" value="one" />

            <p className="ml-1">50% or more</p>
          </div>
          <div className="flex">
            <input type="radio" name="coolradioo" value="two" />

            <p className="ml-1">40% or more</p>
          </div>
          <div className="flex">
            <input type="radio" name="coolradioo" value="three" />

            <p className="ml-1">30% or more</p>
          </div>
          <div className="flex">
            <input type="radio" name="coolradioo" value="four" />
            <p className="ml-1">20% or more</p>
          </div>
          <div className="flex">
            <input type="radio" name="coolradioo" value="five" />

            <p className="ml-1">10% or more</p>
          </div>
        </div>

        <div className="listing shipped-from bg-white p-5">
          <p className="font-medium">SHIPPED FROM</p>
          <input type="checkbox" className="mt-2" checked />
          <label className="ml-1">Shipped from Nigeria</label>
          <br />
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">Shipped from Abroad</label>
          <br />
        </div>

        <div className="listing product-type bg-white p-5">
          <p className="font-medium">PRODUCT TYPE</p>
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">Plastic Bottle</label>
          <br />
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">Pack</label>
          <br />
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">Sachet</label>
          <br />
          <input type="checkbox" className="mt-2" checked />
          <label className="ml-1">Tin Can</label>
          <br />
        </div>

        <div className="listing product-size bg-white p-5">
          <p className="font-medium">PRODUCT SIZE</p>
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">more than 5kg</label>
          <br />
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">3kg to 5kg</label>
          <br />
          <input type="checkbox" className="mt-2" checked />
          <label className="ml-1">1kg to 3kg</label>
          <br />
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">300g to 1kg</label>
          <br />
          <input type="checkbox" className="mt-2" />
          <label className="ml-1">less than 300g</label>
          <br />
        </div>
      </div>

      <div className="right-side">
        <div className="category-nav"></div>
        <div className="product-list"></div>
      </div>
    </div>
  );
};
