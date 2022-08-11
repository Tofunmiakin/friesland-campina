import React from "react";
import tinmilk from "../assets/tinmilk.png";
import "../styles/index.css";

interface Props {}

export const SingleProductList: React.FC<Props> = () => {
  return (
    <div className="single-product">
      <img src={tinmilk} />
    </div>
  );
};
