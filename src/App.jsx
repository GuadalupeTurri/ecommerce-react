import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemList from './components/ItemList'
import { CartProvider } from './context/CartContex'
import Cart from './components/Cart'

function App() {
 

  return (
     
      
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
    <Routes>
        <Route path="/" element={ <ItemListContainer saludo="Bienvenidos a la RawShop" /> } />
        <Route path="/category/:idCategory" element={ <ItemList/>} />  
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path='/cart'element={<Cart/>}/>
        
      
       
    </Routes>
    </CartProvider>
    </BrowserRouter>
    
  )
}

export default App
