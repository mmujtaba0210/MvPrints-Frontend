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

//compare

import fetchCompareProductsSlice from "../slices/Compare/fetchCompareProductsSlice";
import postCompareProductsReducer from "../slices/Compare/CompareProductsSlice";

//meagamenu
import megaMenuReducer from "../slices/MegaMenu/fetchMegaMenuSlice";

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

    //compare

    compareProducts: fetchCompareProductsSlice,
    postCompareProducts: postCompareProductsReducer,

    //megamanu

    megaMenu: megaMenuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
