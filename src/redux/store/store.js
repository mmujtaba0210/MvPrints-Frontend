import { configureStore } from "@reduxjs/toolkit";
import fetchProductReducer from "../slices/fetchproductSlice";

//store

import fetchCartReducer from "../slices/Cart/fetchCartSlice";
import addCartReducer from "../slices/Cart/addCartSlice";
import deleteCartItemReducer from "../slices/Cart/deleteCartItemSlice";
import clearCartReducer from "../slices/Cart/clearCartSlice";

export const store = configureStore({
  reducer: {
    fetchProduct: fetchProductReducer,

    //store

    fetchCart: fetchCartReducer,
    addCart: addCartReducer,
    deleteCartItem: deleteCartItemReducer,
    clearCart: clearCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // useful when handling non-serializable payloads
    }),
});
