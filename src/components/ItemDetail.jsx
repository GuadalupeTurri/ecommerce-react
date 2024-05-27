import ItemCount from "./ItemCount"
import './ItemList.css'
import { useContext } from "react"
import { CartContex } from "../context/CartContex"

const ItemDetail = ({product}) => {
  const {añadirProducto } = useContext(CartContex)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }
    añadirProducto(productCart)

  }
  return (

    
      <div className="contenedor-detail">
        <img className="imgdetail" src={product.image} />
      <div className="contenedor-description">
        <h2>{product.name}</h2>
        <h3>{product.description}</h3>
        <p className="precio">${product.price}</p>
      <ItemCount stock={product.stock} addProduct={addProduct}/>
        <button className="button-detail">Comprar</button>
      </div>
      </div>
  )
}

export default ItemDetail