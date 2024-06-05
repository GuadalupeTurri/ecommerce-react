import ItemCount from "./ItemCount"
import './ItemList.css'
import { useContext, useState } from "react"
import { CartContex } from "../context/CartContex"
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {
  const {añadirProducto } = useContext(CartContex);
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }
    añadirProducto(productCart)
    setAgregadoAlCarrito(true);

  }
  return (

    
      <div className="contenedor-detail">
        <img className="imgdetail" src={product.image} />
      <div className="contenedor-description">
        <h2>{product.name}</h2>
        <h3>{product.description}</h3>
        <p className="precio">${product.price}</p>
        {agregadoAlCarrito ? (
         <Link to="/cart"><button className="button-detail">Terminar Compra</button></Link> 
        ):(
          <ItemCount stock={product.stock} addProduct={addProduct}/>
        )};
      </div>
      </div>
  )
}

export default ItemDetail