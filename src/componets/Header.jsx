import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className='header'>
            <Link className='title-header' to='/'><h1>Tienda</h1></Link>
            
            <nav className='nav-header'>
                <Link to='/productos' className='link-header'>Productos</Link>
                <Link to='/pedidos' className='link-header'>Pedidos</Link>
                <Link className='link-header'>Ganancias</Link>
            </nav>
        </header>
     );
}
 
export default Header