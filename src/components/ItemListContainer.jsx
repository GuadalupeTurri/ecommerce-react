import './ItemListContainer.css'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

 
  return (
    <>
    <div className="props">
        {props.saludo}
    </div>
   
    <div className='imgProps'>
        <img src="https://static.wixstatic.com/media/baac51_88d59da2f5a844e9850ee580ab0c8b8d~mv2_d_4000_1782_s_2.jpg/v1/fill/w_1189,h_660,al_tl,q_85,usm_0.66_1.00_0.01,enc_auto/baac51_88d59da2f5a844e9850ee580ab0c8b8d~mv2_d_4000_1782_s_2.jpg" alt="" />
    </div>

    <div className='title'>
        <h1>COLECCIÓN DE EDICIÓN LIMITADA</h1>
    </div>
   <ItemList/>
   
    
      
    </>

  )
}

export default ItemListContainer