import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  value: items,
  
};

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      const dupicate = state.value.filter((e) => e.id === newItem.id);
      if (dupicate.length > 0) {
        state.value = state.value.filter((e) => e.id !== newItem.id);
        state.value = [
          ...state.value,
          {
            id: dupicate[0].id,
            price: newItem.price,
            quantity: newItem.quantity + dupicate[0].quantity,
            img: newItem.img,
            name: newItem.name,
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
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },

    updateCart: (state, action) => {
      const newItem = action.payload;
      const dupicate = state.value.filter((e) => e.id === newItem.id);
      if (dupicate.length > 0) {
        state.value = state.value.filter((e) => e.id !== newItem.id);
        state.value = [
          ...state.value,
          {
            ...action.payload,
            id: dupicate[0].id,
          },
        ];
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },

    removeCart: (state, action) => {
      const item = action.payload;
      state.value = state.value.filter((e) => e.id !== item.id);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },

    setFoodItem: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { addCart, removeCart, updateCart, setFoodItem } =
  cartItemSlice.actions;
export default cartItemSlice.reducer;
