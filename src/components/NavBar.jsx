import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return(
        <nav className='menuTienda'>
              <Link className='menuImg' to="/" > 
                <img className='logo' src="https://images.vexels.com/media/users/3/137704/isolated/preview/87530af576941eeea98d685ae40c4d66-logotipo-de-formas-poligonales-geom-tricas.png"/>
            </Link>

            <ul>
                <Link className='lisas' to="/category/lisas">Lisas</Link>
                <Link className='estampadas' to="category/estampadas">Estampadas</Link>
               
            </ul>

             <CartWidget/>   
        </nav>
    )
}

export default NavBar