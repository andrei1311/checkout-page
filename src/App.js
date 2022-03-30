import './App.css';
import Cart from './Cart';
import Home from './pages/Home/Home';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
   <div className='flex inline bg-gray-200 h-screen'>
     <CartProvider>
     <Home />
     <Cart />
     </CartProvider>
   </div>
  );
}

export default App;
