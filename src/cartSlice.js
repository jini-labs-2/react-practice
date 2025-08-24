import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'shoping_cart',
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, item) => {

    },
    removeItem: (state, id) => {

    }
  }
})

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
