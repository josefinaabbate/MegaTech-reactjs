
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './main.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";



function App() {
  return (
    <div >
      <BrowserRouter>


      <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos/:category" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
