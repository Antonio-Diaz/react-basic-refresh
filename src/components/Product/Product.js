import React, { Fragment } from "react";
import  CustomButton  from "../Custom-button/Custom-button";

const Product = ({ product, products, shoppingCart, setShoppingCart }) => {
  const { id, name, price } = product;

  // Add product to shopping cart
  const handleSelectProduct = (id) => {
    const product = products.filter((product) => product.id === id)[0];
    setShoppingCart([...shoppingCart, product]);
  };

  const handleRemoveProduct = (id) => {
      const product = shoppingCart.filter(product => product.id !== id);
      setShoppingCart(product);
  };

  return (
    <Fragment>
      <h2>{name}</h2>
      <p>{price}</p>
      {products ? (
        <CustomButton type="button" onClick={() => handleSelectProduct(id)}>
          Purchase
        </CustomButton>
      ) : (
        <CustomButton type="button" onClick={() => handleRemoveProduct(id)}>
          Remove
        </CustomButton>
      )}
    </Fragment>
  );
};

export default Product;
