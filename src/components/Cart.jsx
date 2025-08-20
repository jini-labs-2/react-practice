// components/Cart.js

import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { items, totalAmount, removeItem } = useCart();

  const handleRemoveFromCart = (id) => {
    removeItem(id);
  };

  return (
    <div>
      <h2>カート</h2>
      {items.length === 0 ? (
        <p>カートは空です</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} x {item.amount} (${item.price * item.amount})
              <button onClick={() => handleRemoveFromCart(item.id)}>
                カートから削除
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>小計 ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;