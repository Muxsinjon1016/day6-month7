import React from "react";
import { products } from "../data/data";
import Products from "../components/products";

const Home = () => {
  return (
    <div className="mt-[120px] flex flex-wrap justify-evenly gap-6 container">
      {products.map((product) => (
        <Products key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
