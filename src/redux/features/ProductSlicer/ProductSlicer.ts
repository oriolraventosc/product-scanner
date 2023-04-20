import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../types/types";

interface ProductState {
  product: Product;
  myProducts: Product[];
}

export const ProductInitialState: ProductState = {
  product: {
    name: "",
    image: "",
    ingredients: "",
    description: "",
    brand: [""],
    weight: 0,
    benefits: [""],
    ean: "",
    status: "",
  },
  myProducts: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState: ProductInitialState,
  reducers: {
    loadProduct: (initialState, action: PayloadAction<Product>) => ({
      ...initialState,
      product: { ...action.payload },
    }),
  },
});

export const ProductReducer = ProductSlice.reducer;

export const { loadProduct: loadProductActionCreator } = ProductSlice.actions;
