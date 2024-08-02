import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  totalPrice: 0,
  totalCount: 0,
};

const ProductReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        totalCount: state.totalCount + 1,
        productList: [...state.productList, action.payload],
      };
    },
  },
});

export default ProductReducer.reducer;

export const { addToCart } = ProductReducer.actions;
