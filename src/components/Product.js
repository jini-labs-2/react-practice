import React from 'react'
import { useSetRecoilState } from 'recoil';
import { cartState } from '../atom';

const DUMMY_PRODUCTS = [
  { id: 'p1', name: 'MacBook', price: 1500 },
  { id: 'p2', name: 'iPhone', price: 1000 },
  { id: 'p3', name: 'iPad', price: 800 },
];

const Product = () => {
  const setCartState = useSetRecoilState(cartState);

  const handleAddToCart = (product) => {
    setCartState((prevCartItems) => {
      console.log('setCartState:', prevCartItems);
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) => 
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCartItems, {...product, amount: 1 }];
      }
    })

  }

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>
              add cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product