import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'shopingCart',
  initialState: {
    items: [], 
    totalAmount: 0
  },
  reducers: {
    addItem: (state, action) => {
      // アイテムを追加
      const updatedTotalAmount = state.totalAmount + Number(action.payload?.price || 0);
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: Number(existingCartItem.amount) + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, {...action.payload, amount: 1}];
      }

      state.items = [...updatedItems];
      state.totalAmount = updatedTotalAmount;
    },
    removeItem: (state, action) => {
            // アイテムを削除
      const removedItemIndex = state.items.findIndex((item) => item.id === action.payload);
      const removedItem = state.items[removedItemIndex];
      const newTotalAmount = state.totalAmount - removedItem.price;

      let newItems;
      if (removedItem.amount === 1) {
        newItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = { ...removedItem, amount: removedItem.amount - 1 };
        newItems = [...state.items];
        newItems[removedItemIndex] = updatedItem;
      }

      return {
        items: newItems,
        totalAmount: newTotalAmount,
      };

    }
  }
})

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
