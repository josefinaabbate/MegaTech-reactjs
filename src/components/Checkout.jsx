import React, { useContext, useState } from 'react'
import { CartContext } from '../context.jsx/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
const Checkout = () => {

const[pedidoId, setPedidoId] = useState ("");

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const {register, handleSubmit} = useForm();

    const comprar = (data) =>{
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
        .then((doc) =>{
            setPedidoId(doc.id);
            vaciarCarrito();
        } )
    }

if(pedidoId) {
return (
    <div className="container">
        <h1 className='maint-title'>Muchas gracias por tu compra!</h1>
        <h3>Tu numero de pedido es: {pedidoId}</h3>
    </div>
)

}

  return (
    <div className='container'>
    <h1 className='main-title'>Finalizar compra</h1>

    <form className='formulario' onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='Ingrese su nombre' {...register("nombre")} />
        <input type="email" placeholder='Ingrese su email' {...register("email")} />
        <input type="phone" placeholder='Ingrese su telefono' {...register("telefono")} />

        <button className='enviar' type='submit'>Comprar</button>
    </form>
</div>
  )
}

export default Checkout