import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAmount,
  removeFromCart,
} from "../redux/products/productsReducer";

export const Cart = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  const changeProductPrice = (id, type) => {
    dispatch(toggleAmount({ id, type }));
  };

  const removeProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container mt-[120px]">
      {productList.map((item) => (
        <div
          key={item.id}
          className="container mt-[45px] overflow-hidden product flex items-center justify-between bg-white rounded-[12px]"
        >
          <div className="flex items-center gap-[120px]">
            <img
              className="productImg transition duration-300"
              src={item.img}
              alt={item.name}
            />
            <div>
              <h1>{item.name}</h1>
              <b className="mt-4 mb-4">{item.userPrice} sum</b>
              <p>Available: {item.count}</p>
              <button onClick={() => changeProductPrice(item.id, "add")}>
                +
              </button>
              <strong>{item.userCount}</strong>
              {item.userCount > 1 ? (
                <button onClick={() => changeProductPrice(item.id, "remove")}>
                  -
                </button>
              ) : (
                <button onClick={() => removeProduct(item.id)}>Remove</button>
              )}
            </div>
          </div>
          <button className="py-2 px-4 bg-blue-600 mr-6 rounded-[12px] text-white font-bold text-xl">
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
