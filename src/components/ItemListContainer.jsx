import { useEffect, useState } from "react";
import pedirDatos  from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const  ItemListContainer = () => {

const [productos, setProductos] =  useState([]);
const [titulo, setTitulo] = useState ("Productos")
const category = useParams().category;

useEffect(() => {
    pedirDatos().then((res) => {
        if (category){
            setProductos(res.filter((prod) =>prod.category === category) );
            setTitulo(category);
        } else{
            setProductos (res);
        }
    })
}, [category])
console.log(productos);
return (
    <ItemList productos={productos} />
)

}  
export default ItemListContainer
