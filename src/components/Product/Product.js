import React, { Fragment } from "react";

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
        <button type="button" onClick={() => handleSelectProduct(id)}>
          Purchase
        </button>
      ) : (
        <button type="button" onClick={() => handleRemoveProduct(id)}>
          Remove
        </button>
      )}
    </Fragment>
  );
};

export default Product;
