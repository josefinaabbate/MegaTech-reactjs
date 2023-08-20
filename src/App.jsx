
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './main.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import { CartProvider } from "./context.jsx/CartContext"
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

function App() {

  return (
    <div >
      <CartProvider>
      <BrowserRouter>


      <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos/:category" element={<ItemListContainer/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>

      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
