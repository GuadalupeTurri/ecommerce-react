import { useEffect, useState } from "react";
import getProducts from "../data/data";
import './ItemList.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemList = () => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading] = useState(false)
    const { idCategory } = useParams()
    

    useEffect(()=>{
        setLoading(true)
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
            setLoading(false)
        })
      
    },[idCategory])
   
   

    return (
        <div className="items-container">
            {loading ? ( // Si está cargando, muestra "Cargando..."
                <div>Cargando...</div>
            ) : (
                // Si no está cargando, muestra la lista de productos
                <div className="items-container">
                    {products.map((product) => (
                        <div className="items" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p className="parrafo">${product.price}</p>
                            <Link className="detalle" to={`/detail/${product.id}`}>Ver detalles</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemList;