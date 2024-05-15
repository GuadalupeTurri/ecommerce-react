import { useState } from "react"
import "./ItemCount.css"


const ItemCount = ({stock}) => {
 const [count, setCount] = useState(1)

 const restar = ()=>{
  if(count > 1){
    setCount (count - 1)
  }
 }
 const sumar=()=>{
  if(count < stock) {
    setCount (count + 1)
  }
 }

 const agregarAlCarrito = ()=>{
  console.log(count)
 }


 
 
  return (
    <div className="contador">
        <button className="botones-contador" onClick={restar}>-</button>
        <p className="textoContador">{count}</p>
        <button className="botones-contador" onClick={sumar}>+</button>
        <button className="botones-contador"onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
