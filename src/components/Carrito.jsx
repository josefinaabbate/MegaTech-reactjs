import React, { useContext } from 'react'
import { CartContext } from '../context.jsx/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

const handleVaciar = ()  => {
 vaciarCarrito ();
}

  return (
    <div className='container'>
    <h1 className='main-title'>Carrito</h1>
    <div>{
        carrito.map((prod)=>(
            <div className="carritoitem" key={prod.id}>
            <h3>{prod.title}</h3> 
             <img className="imagen-carrito" src= {prod.imagen} alt={prod.title}/>
            <p>Precio por unidad:${prod.price }</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio total:$ { prod.cantidad* prod.price}</p>
            
          
            </div>

        ))
    }</div>
    

{
    carrito.length > 0 ?
    <>
    <h2> Precio total: $ {precioTotal()}</h2>
    <button onClick={handleVaciar} className='enviar'>Vaciar</button>
    <Link to= "/checkout" className='finalizar'>Finalizar compra</Link>
    </>  :
    <h2>El carrito esta vacío</h2>
}

    
    </div>
  )
}

export default Carrito