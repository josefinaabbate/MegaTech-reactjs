import Item from "./Item"

const ItemList = ({productos}) => {
  return (
    <div className="conatiner">
        <h2 className="main-title">Productos</h2>
        <div className="productos">
            {productos.map((prod) => {return(<Item producto={prod} key={prod.id} />);}) }
        </div>
    </div>
  );
  
}

export default ItemList
