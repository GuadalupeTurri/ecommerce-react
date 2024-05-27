import { useState } from "react"
import "./ItemCount.css"


const ItemCount = ({stock, addProduct}) => {
 const [count, setCount] = useState(1)

 const handleClickDecrement = ()=>{
  if(count > 1){
    setCount (count - 1)
  }
 }
 const handleClickIncrement=()=>{
  if(count < stock) {
    setCount (count + 1)
  }
 }

 const handleClickAddToCart = ()=>{
  addProduct(count)
 }


 
 
  return (
    <div className="contador">
      
        <button className="botones-contador" onClick={handleClickDecrement}>-</button>
        <p className="textoContador">{count}</p>
        <button className="botones-contador" onClick={handleClickIncrement}>+</button>
       
        <button className="botones-contador"onClick={handleClickAddToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
