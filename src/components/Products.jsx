// components/Products.js

import React from 'react';
import { useCart } from '../CartContext';

const DUMMY_PRODUCTS = [
  { id: 'p1', name: 'MacBook', price: 1500 },
  { id: 'p2', name: 'iPhone', price: 1000 },
  { id: 'p3', name: 'iPad', price: 800 },
];

const Products = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product) => {
    addItem({ ...product, amount: 1 });
  };

  return (
    <div>
      <h2>商品一覧</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>
              カートへ追加
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;