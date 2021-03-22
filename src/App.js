import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import ShoppingCart from "./components/Shopping-cart/Shopping-cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [products] = useState([
    { id: 1, name: "T-shirt ReactJs", price: 50 },
    { id: 2, name: "T-shirt AngularJs", price: 50 },
    { id: 3, name: "T-shirt VueJs", price: 50 },
    { id: 4, name: "T-shirt NodeJs", price: 50 },
  ]);

  const [shoppingCart, setShoppingCart] = useState([]);

  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="Virtual Store" age={20} />

      <h1> List of products </h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          products={products}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      ))}

      <ShoppingCart
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />

      <Footer date={date} />
    </Fragment>
  );
}

export default App;
