import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleAmount,
  removeFromCart,
} from "../redux/products/productsReducer";
import { useSelector } from "react-redux";

export const Cart = ({ userPrice, img, userCount, count, id, name }) => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  const changeProductPrice = (type = undefined) => {
    dispatch(toggleAmount({ id, type }));
  };
  return (
    <div className="container mt-[120px]">
      {productList.map((item) => (
        <div className="container mt-[45px] overflow-hidden product flex items-center justify-between bg-white rounded-[12px]">
          <div className="flex items-center gap-[120px]">
            <img
              className="productImg transition duration-300"
              src={item.img}
              alt="img"
            />
            <div>
              <h1>{item.name}</h1>
              <b className="mt-4 mb-4">{item.userPrice} sum</b>
              <p>{item.count}</p>
              <button onClick={() => changeProductPrice("add")}>+</button>
              <strong>{item.userCount}</strong>
              {item.userCount > 1 ? (
                <button onClick={() => changeProductPrice("remove")}>-</button>
              ) : (
                <button onClick={() => dispatch(removeFromCart(id))}>
                  Remove
                </button>
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
