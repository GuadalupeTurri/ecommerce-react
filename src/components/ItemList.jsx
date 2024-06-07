import { useEffect, useState } from "react";
import './ItemList.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { collection, getDocs,query,where} from "firebase/firestore";
import db from "../db/db";

const ItemList = () => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading] = useState(false)
    const { idCategory } = useParams()

    const getProducts =() => {
        const productsRef= collection( db, "products")
        getDocs(productsRef)
        .then((productsDb)=>{
          const data=  productsDb.docs.map((product )=>{
                return{id:product.id,...product.data()}
            })
            
            setProducts(data)
        })
        .finally(()=> setLoading(false))
    }
   
  
    const getProductsByCategory = () => {
      setLoading(true)
  
      const productsRef = collection(db, "products")
      const q = query(productsRef, where("category", "==", idCategory) )
      getDocs(q)
        .then((productsDb)=> {
  
          //formateamos correctamente la data recibida de la db
          const data = productsDb.docs.map( (product)=> {
            return { id: product.id, ...product.data() }
          })
  
          setProducts(data)
        })
        .finally(()=> setLoading(false))
        
       
    }
  
    useEffect(() => {
      if(idCategory){
        getProductsByCategory()
      }else{
        getProducts()
      }
    }, [idCategory]);
   

    return (
        <div className="items-container">
            {loading ? ( // Si está cargando, muestra "Cargando..." 
                <div className="loader"></div>
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