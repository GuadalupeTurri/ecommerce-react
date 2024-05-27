import { createContext, useState } from "react";

//creamos un contexto de react llamado cartContex
const CartContex = createContext()

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
     
    const añadirProducto=(nuevoProducto)=>{
        const condicion = estaEnElCarrito(nuevoProducto.id)
        if(condicion) {
            const productosModificados= carrito.map((productoCarrito)=>{
                if(productoCarrito.id === nuevoProducto.id){
                    return { ...productoCarrito, quantity: productoCarrito.quantity + nuevoProducto.quantity }
                }else{
                    return productoCarrito
                }
            })
            setCarrito(productosModificados)
        }else{
            setCarrito([...carrito, nuevoProducto]) 
        }

        
       
    }

    const cantidadTotal = ()=> {
        const cantidadTotalProduct= carrito.reduce( (total, producto)=>  total + producto.quantity, 0)
        return cantidadTotalProduct
    }

    const precioTotal=()=> {
        const totalCompra = carrito.reduce((total, productoCarrito)=>  total + ( productoCarrito.price * productoCarrito.quantity), 0)
        return totalCompra
    }
    const vaciarCarrito=()=>{
        setCarrito([])
    }
    const estaEnElCarrito = (idProducto) => {
        const condicion = carrito.some( (productoCarrito)=> productoCarrito.id === idProducto )
        return condicion
    }
    const borrarProductoPorId=(idProducto)=>{
        const productosFiltrados= carrito.filter( (productoCarrito) => productoCarrito.id !== idProducto )
        setCarrito(productosFiltrados)
    }

    return(
        <CartContex.Provider value={{ carrito, añadirProducto, cantidadTotal, vaciarCarrito, borrarProductoPorId, precioTotal}}>
            {children}
        </CartContex.Provider>
    )
}

export { CartContex, CartProvider}