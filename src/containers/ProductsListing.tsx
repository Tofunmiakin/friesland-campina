import React from "react";
import "../styles/index.css";
import { LeftColumn } from "../components/LeftColumn";
import { NavPopover } from "../components/NavPopover";
import dwnarrow from "../assets/dwnarrow.png";
import filter from "../assets/filter.png";
import { SingleProductList } from "../components/SingleProductList";

interface Props {}

export const ProductsListing: React.FC<Props> = () => {
  return (
    <div className="product-listing flex ml-10 space-x-6">
      <LeftColumn />

      <div className="right-side w-full pr-10">
        <div className="listing category-nav bg-white p-5">
          <div className="flex justify-between pb-5">
            <p className="font-medium text-[20px]">Bottled Beverages</p>
            <div className="flex">
              <p className="font-medium">Sort By:</p>
              <NavPopover arrow={dwnarrow} text="Popularity" />
            </div>
          </div>
          <hr />
          <div className="pt-5 flex justify-between">
            <p id="products-found">256 products found</p>
            <NavPopover arrow={filter} />
          </div>
        </div>
        <div className="product-list grid grid-cols-3 gap-4">
          <SingleProductList />
          <SingleProductList />
          <SingleProductList />
          <SingleProductList />
        </div>
      </div>
    </div>
  );
};
