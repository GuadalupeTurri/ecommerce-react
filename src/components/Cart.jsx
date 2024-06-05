import { useContext } from "react"
import { CartContex } from "../context/CartContex"
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import "./Cart.css"

const Cart = () => {
    const {carrito, vaciarCarrito, borrarProductoPorId, precioTotal }= useContext(CartContex)
    
    if(carrito.length === 0) {
        return(
            <div className="cart-vacio">
                <h1>El carrito esta vacio😢 </h1>
               <Link className="carrito-vacio" to="/"> <IoArrowBackCircle color="black" size={40}/></Link>
            </div>
        )

    } 
    return (
    <div>
        {
            carrito.map( (productoCarrito)=> (
                <div key={productoCarrito.id} className="product-cart">
                    <img src={productoCarrito.image} />
                    <h3>{productoCarrito.name}</h3>
                    <h3>Cantidad: {productoCarrito.quantity}</h3>
                    <h3>Precio unitario: ${productoCarrito.price}</h3>
                    <h3>Precio parcial: ${productoCarrito.price * productoCarrito.quantity}</h3>
                   <TiDelete onClick={()=>borrarProductoPorId(productoCarrito.id)} size={50} color={"#FAAC44"}/>
                </div>
            ))
        }
        <div className="cart-summary">
            <h2>Total: ${precioTotal()} </h2>
            <Link to="/checkout">Continuar con mi compra</Link>
            <button className="button-cart" onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    </div>
  )
}

export default Cart
