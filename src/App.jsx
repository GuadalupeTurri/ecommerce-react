import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemList from './components/ItemList'



function App() {
 

  return (
     <div>
    <BrowserRouter>
      <NavBar/>
    <Routes>
        <Route path="/" element={ <ItemListContainer saludo="Bienvenidos a la RawShop" /> } />
        <Route path="/category/:idCategory" element={ <ItemList/>} />  
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        
      
       
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
