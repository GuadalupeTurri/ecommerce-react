import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <div className='menuTienda'>
            <div className='menuImg'>
                <img className='logo' src="https://images.vexels.com/media/users/3/137704/isolated/preview/87530af576941eeea98d685ae40c4d66-logotipo-de-formas-poligonales-geom-tricas.png"/>
            </div>   

            <ul>
                <li>Tienda</li>
                <li>Contacto</li>
                <li>Nosotros</li>
            </ul>

             <CartWidget/>   
        </div>
    )
}

export default NavBar