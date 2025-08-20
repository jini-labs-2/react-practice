// CartContext.js

import React, { createContext, useReducer, useContext } from 'react';

// 初期ステータス
const initialState = {
  items: [],
  totalAmount: 0,
};

// Reducer関数함수: ステータスとアクションから新しいステータスを返す
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // アイテムを追加
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case 'REMOVE_ITEM':
      // アイテムを削除
      const removedItemIndex = state.items.findIndex((item) => item.id === action.id);
      const removedItem = state.items[removedItemIndex];
      const newTotalAmount = state.totalAmount - removedItem.price;

      let newItems;
      if (removedItem.amount === 1) {
        newItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = { ...removedItem, amount: removedItem.amount - 1 };
        newItems = [...state.items];
        newItems[removedItemIndex] = updatedItem;
      }

      return {
        items: newItems,
        totalAmount: newTotalAmount,
      };

    default:
      return initialState;
  }
};

// Context生成
const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

// Providerコンポネント: useReducerを用いてステータスを管理
//                      contextであとのコンポネントへ提供
export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

// Contextを利用安くするためにカスタムフックに。
export const useCart = () => useContext(CartContext);
