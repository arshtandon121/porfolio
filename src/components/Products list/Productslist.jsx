import React from "react";
import "./Productslist.css";
import Products from '../Products/Products'

function Productslist() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Products</h1>
        <p className="pl-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
          tempore, perferendis laudantium quisquam id, magnam aspernatur
          veritatis voluptates natus velit optio.
        </p>

      </div>
      <div className="pl-list">
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
      </div>
    </div>
  );
}

export default Productslist;
