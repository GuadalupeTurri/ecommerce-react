import { BsMinecartLoaded } from "react-icons/bs";
import { useContext } from "react";
import { CartContex } from "../context/CartContex";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal} = useContext(CartContex)

  let cantidad= cantidadTotal()

  return (
    <Link to="/cart" className="Cart">
        <BsMinecartLoaded color={"#000000"} size={30}/>
        <p className="numberCart" >{cantidad >=1 && cantidad} </p>
    </Link>
  )
}

export default CartWidget