import { configureStore } from "@reduxjs/toolkit";
import fetchProductReducer from "../slices/fetchproductSlice";

//store

import fetchCartReducer from "../slices/Cart/fetchCartSlice";
import addCartReducer from "../slices/Cart/addCartSlice";
import deleteCartItemReducer from "../slices/Cart/deleteCartItemSlice";
import clearCartReducer from "../slices/Cart/clearCartSlice";

//wishlist

import fetchWishlistReducer from "../slices/Wishlist/fetchWishlistSlice";
import createWishlistReducer from "../slices/Wishlist/createWishlistSlice";
import deleteWishlistReducer from "../slices/Wishlist/deleteWishlistSlice";
import clearAllWishlistReducer from "../slices/Wishlist/clearAllWishlistSlice";

export const store = configureStore({
  reducer: {
    fetchProduct: fetchProductReducer,

    //store

    fetchCart: fetchCartReducer,
    addCart: addCartReducer,
    deleteCartItem: deleteCartItemReducer,
    clearCart: clearCartReducer,

    //wishlist

    fetchWishlist: fetchWishlistReducer,
    createWishlist: createWishlistReducer,
    deleteWishlist: deleteWishlistReducer,
    clearAllWishlist: clearAllWishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // useful when handling non-serializable payloads
    }),
});
