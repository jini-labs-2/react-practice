import './App.css';
import { CartProvider } from './CartContext';
import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <CartProvider>
      <Header />
      <Products />
      <Cart />
    </CartProvider>
  );
}

export default App;
