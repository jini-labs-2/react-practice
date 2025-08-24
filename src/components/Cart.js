import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { cartState } from '../atom'
import { cartTotalSelector } from '../selector';

const Cart = () => {
  const items = useRecoilValue(cartState);
  const totalAmount = useRecoilValue(cartTotalSelector);
  const setCartState = useSetRecoilState(cartState);

  const handleRemoveFromCart = (id) => {
    setCartState((prevCartItems) => {
      const existingItem = items.find((item) => item.id === id);
      if (existingItem && existingItem.amount > 1) {
        return prevCartItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1} : item);
      } else {
        return prevCartItems.filter(item => item.id !== id);
      }
    })
  }

  return (
    <div>
      <h2>CART</h2>
      {items.length === 0 ? (
        <p>空です。</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} x {item.amount} (${item.price * item.amount})
              <button onClick={() => handleRemoveFromCart(item.id)}>
                remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>총액: ${totalAmount.toFixed(2)}</h3>
    </div>
  )
}

export default Cart