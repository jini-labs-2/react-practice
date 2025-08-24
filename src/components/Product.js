// components/Products.js

import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";

const DUMMY_PRODUCTS = [
  { id: 'p1', name: 'MacBook', price: 1500 },
  { id: 'p2', name: 'iPhone', price: 1000 },
  { id: 'p3', name: 'iPad', price: 800 },
];

const Products = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
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