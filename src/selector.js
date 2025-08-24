import { selector } from "recoil"
import { cartState } from "./atom"

export const cartTotalSelector = selector({
  key: 'totalAmount',
  get: ({ get }) => {
    const items = get(cartState);
    return items.reduce((total, item) => total + item.price * item.amount, 0);
  }
})
