import { useState } from "react"
import Formulario from "./Formulario"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContex } from "../../context/CartContex"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import db from "../../db/db.js"
import "./Checkout.css"
import validateForm from "../../utils/validationYup.js"
import { toast } from "react-toastify"

const Checkout = () => {

    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono:"",
        email:"",
    
    })
    const [idOrden, setIdOrden] = useState(null)
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContex)

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm= async(event)=>{
        event.preventDefault()
        
        const orden = {
            comprador: {...datosForm},
            productos: [...carrito],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal(),
        };
        try{
            const response= await validateForm(datosForm) ;
        if(response.status === "success"){
            generateOrder(orden);
        }else{
    
            toast.warning(response.message)
        }
        }catch (error){
           toast.warning(error) 
        }
        
       
    };

    const generateOrder=(orden)=>{
        const ordenesRef= collection(db, "orders")
        addDoc(ordenesRef, orden)
        .then((respuesta)=> setIdOrden(respuesta.id))
        .catch((error)=>console.log(error))
        .finally(()=> {
            //se subio la orden y se vacio el carrito
            vaciarCarrito()

        })
    };

    
    
  return (
    <div>
        {
            idOrden ? (
                <div className="success-container">

                    <h2>Orden generada con exito!</h2>
                    <p>Guarde el id de su orden:  {idOrden}</p>
                    <Link to="/"><button>Volver al inicio</button></Link>  
               </div>
            ) : (
                <Formulario datosForm={datosForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>
            )
        } 
        
    </div>
  )
}

export default Checkout