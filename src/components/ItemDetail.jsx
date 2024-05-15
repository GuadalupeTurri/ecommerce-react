import ItemCount from "./ItemCount"
import './ItemList.css'

const ItemDetail = ({product}) => {
  return (
    
      <div className="contenedor-detail">
        <img className="imgdetail" src={product.image} />
      <div className="contenedor-description">
        <h2>{product.name}</h2>
        <h3>{product.description}</h3>
        <p className="precio">${product.price}</p>
        <ItemCount stock={10}/>
        <button className="button-detail">Comprar</button>
      </div>
      </div>
  )
}

export default ItemDetail