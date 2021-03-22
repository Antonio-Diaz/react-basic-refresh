import React from "react";
import Product from "../Product/Product";
import "./Shopping-cart.css";

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
  return (
    <div className="shoppingCart">
      <h2>Your shopping cart</h2>
      {shoppingCart.length === 0 ? (
        <p>your shopping cart is empty</p>
      ) : (
        shoppingCart.map((product) => (
          <Product
            key={product.id}
            product={product}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        ))
      )}
    </div>
  );
};

export default ShoppingCart;
