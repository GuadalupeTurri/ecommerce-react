import { useEffect, useState } from "react";
import getProducts from "../data/data"
import ItemCount from "./ItemCount";
import './ItemList.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemList = () => {
    const [ products, setProducts ] = useState([])
    const { idCategory } = useParams()
    
    useEffect(()=>{
        getProducts()
        .then( (respuesta) => {
            if(idCategory){
                const productsFiltrer= respuesta.filter((productRes)=> productRes.category === idCategory)
                setProducts(productsFiltrer)
            }else
           setProducts(respuesta)
        })
        .catch((error) =>{
            console.log(error)
        })
        .finally(()=>{
            console.log("finalizo la promesa")
        })
      
    },[idCategory])
   
   

  return (
    <div className="items-conteiner">
        {
            products.map((product)=>(
                <div className="items" key={product.id}>
                    <img src={product.image}  />
                    <h2>{product.name}</h2>
                    <p className="parrafo">${product.price}</p>
                    <Link className="detalle" to={`/detail/${product.id}`} > Ver detalles </Link>
                  
                    

                </div>
            ))
      }
    </div>
  )
}
export default ItemList
