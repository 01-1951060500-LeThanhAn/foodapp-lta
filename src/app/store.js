import { configureStore } from "@reduxjs/toolkit";
import  cartItemSlice  from "../redux/cartReducer/cartReducer";
import filterSlice from "../redux/filterReducer/filterReducer"
import wishlistSlice  from "../redux/wishlistReducer/WishListReducer"
export const store = configureStore({
  reducer: {
    cartItems: cartItemSlice,
    filters: filterSlice,
    wishlist: wishlistSlice
  },
});
