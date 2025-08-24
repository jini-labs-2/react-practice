import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../cartSlice';

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.shopingCart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
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
  )
}

export default Cart