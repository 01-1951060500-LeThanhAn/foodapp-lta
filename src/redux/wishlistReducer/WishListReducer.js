import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: items,
  },
  reducers: {
    addWishList: (state, action) => {
      const dupicate = state.value.filter((e) => e.id === action.payload.id);
      if (dupicate.length > 0) {
        state.value.filter((e) => e.id === action.payload.id);
        state.value = [
          ...state.value,
          {
            id: dupicate[0].id,
            price: dupicate.price,
            img: dupicate.img,
            name: dupicate.name,
            dsc: dupicate.dsc,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...action.payload,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },

    removeWishList: (state, action) => {
      state.value = state.value.filter((e) => e.id !== action.payload.id);
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { addWishList, removeWishList } = wishlistSlice.actions;
export const getWishList = state => state.wishlist.value;
export default wishlistSlice.reducer;
