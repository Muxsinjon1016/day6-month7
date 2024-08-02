import React from "react";

export const Cart = ({ img, name, price, discountPrice, id, category }) => {
  return (
    <div className="bg-blue-500 w-screen h-screen">
      <img src={img} alt="img" />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{discountPrice}</p>
      <h1>Muxsinjon</h1>
    </div>
  );
};

export default Cart;
