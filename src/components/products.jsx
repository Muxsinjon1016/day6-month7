import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/products/productsReducer";

export const Products = ({ id, img, name, price, discountPrice, category }) => {
  const dispatch = useDispatch();

  const buyProduct = () => {
    dispatch(addToCart({ name, id, price, img, discountPrice, category }));
  };

  return (
    <>
      <div className="rounded-[24px] relative bg-[#f5f5f5] w-[300px] overflow-hidden product ">
        <div className="bg-white rounded-[24px] overflow-hidden p-[27px]">
          <img
            className="w-[200px] mx-auto h-[200px] productImg transition-all duration-300"
            src={img}
            alt="img"
          />
        </div>
        <div className="p-[27px]">
          <h3 className="text-black font-bold text-base mb-3">{name}</h3>
          {category == "discount" ? (
            <>
              <div className="flex items-center gap-4">
                <p className="text-[#f00]">{price}sum</p>
                <del className="text-[#333] text-xs">{discountPrice}sum</del>
              </div>
              <div className="absolute py-[9px] px-[18px] bg-[#f91b1b] rounded-br-[24px] top-0 left-0 text-white font-bold z-10">
                -30%
              </div>
            </>
          ) : (
            <>
              <p className="text-[#333]">{price}sum</p>
              <div className="absolute py-[9px] px-[18px] bg-green-500 rounded-br-[24px] top-0 left-0 text-white font-bold z-10">
                new
              </div>
            </>
          )}
          <div className="mt-4 ml-auto h-auto flex items-center">
            <button
              onClick={buyProduct}
              className="py-2 px-4 rounded-[12px] hover:bg-blue-600 transition duration-300 bg-blue-700 text-white text-xl font-bold"
            >
              Buy
            </button>
            <FaCartPlus
              onClick={buyProduct}
              className="w-10 hover:scale-[1.2] transition duration-300 cursor-pointer ml-auto h-auto"
            />
          </div>
          {/*  bazida bitta productni ikki marta qo'shgandek ko'rinishi mumkin
          lekin ular bitta emas, id nanoid bilan harxil bo'lgani uchun qo'shadi
          lekin datalarini va imglarini bir xil berganman */}
        </div>
      </div>
    </>
  );
};

export default Products;
