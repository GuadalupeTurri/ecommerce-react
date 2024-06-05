
import React, {useState, useEffect } from "react"
import db from "../db/db.js"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProduct } = useParams()

    const getProduct=()=>{
      const productRef= doc(db,"products", idProduct)
      getDoc(productRef)
      .then((productDb)=>{
        //formateamos producto
        const data= {id:productDb.id, ...productDb.data()}
        setProduct(data)
      })
    }
    useEffect(() => {
     getProduct()
    }, [idProduct]);
  
    return (
      <ItemDetail product={product} />
    );
  };
  export default ItemDetailContainer;