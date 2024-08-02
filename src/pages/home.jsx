import React from "react";
import { ProductsData } from "../data/data";
import Products from "../components/products";
import { useSelector } from "react-redux";
import Cart from "./cart";

export const Home = () => {
  const { productList } = useSelector((state) => state.productsReducer);

  return (
    <div className="mt-[120px] flex flex-wrap justify-evenly gap-6 container">
      {ProductsData.map((product) => (
        <Products key={product.id} {...product} />
      ))}
      {productList.map((item) => (
        <Cart key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Home;
