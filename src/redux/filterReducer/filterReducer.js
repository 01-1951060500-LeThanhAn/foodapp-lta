import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    selectedCategory: "all",
    selectedRate:3,
  },
  reducers: {
    filterProducts: (state, action) => {
      state.selectedCategory = action.payload;
    },
    filterRate: (state, action) => {
      state.selectedRate = action.payload;
    }
  },
});

export const getSelectedCategory = (state) => state.filters.selectedCategory;
export const getSelectedRate = (state) => state.filters.selectedRate;
export const { filterProducts, filterRate } = filterSlice.actions;

export default filterSlice.reducer;
