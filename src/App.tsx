import React from "react";
import { Navigation } from "./components/Navigation";
import { ProductsListing } from "./containers/ProductsListing";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <ProductsListing />
    </div>
  );
};

export default App;
