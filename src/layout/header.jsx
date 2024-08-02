import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";

export const Header = () => {
  return (
    <div className="container z-50 fixed top-0 left-0 right-0">
      <div className="flex items-center my-2 p-1 bg-[#ccc] rounded-xl justify-between">
        <Link to={"/"}>
          <img
            className="w-[60px] bg-black py-3 px-2 rounded-xl h-auto"
            src="/logo.png"
            alt="logo"
          />
        </Link>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold rounded-[12px] text-xl py-[11px] px-[22px] bg-[#b3b3b3]"
                : "text-black font-semibold text-xl py-[11px] px-[22px]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold rounded-[12px] text-xl py-[11px] px-[22px] bg-[#b3b3b3]"
                : "text-black font-semibold text-xl py-[11px] px-[22px]"
            }
          >
            Cart
          </NavLink>
        </div>
        <div className="mr-6 flex items-center gap-6">
          <div>
            <LuUser2 className="w-[40px] h-auto bg-[#ccc]" />
          </div>
          <Link to={"/cart"}>
            <div className="relative border-l-2 pl-4">
              <FaRegHeart className="w-[40px] h-auto bg-[#ccc]" />
              <p className="absolute p-[2px] w-[25px] h-[25px] font-bold flex items-center justify-center right-[7px] text-xl text-red-600 rounded-[100%] top-[8px]">
                0
              </p>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="relative border-l-2 pl-4">
              <RiShoppingBag3Fill className="w-[40px] h-auto bg-[#ccc]" />
              <p className="absolute p-[2px] w-[25px] h-[25px] text-white font-bold flex items-center justify-center -right-[5px] bg-red-600 rounded-[100%] -top-[10px]">
                0
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
