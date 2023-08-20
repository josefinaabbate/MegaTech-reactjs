import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
    return(
        <nav className='navbar'>
           <Link to="/"className='logo'> <h1>MegaTech</h1> </Link>
           <ul className='menu'>
            <li><Link className='menu-link'to='/'>Home</Link></li>
            <li><Link className='menu-link'to='/'>Products</Link></li>
            <li><Link className='menu-link'to='/productos/ Headphones'>Headphones</Link></li>
            <li><Link className='menu-link'to='/productos/ Iphone'>Iphones</Link></li>
            <li><Link className='menu-link'to='/productos/ Smartwatch'>Smartwatchs</Link></li>
            <li><Link className='menu-link'to='/contacto'>Contact</Link></li>
            <li><CartWidget/></li>
           </ul>
        </nav>
    )
}
export default Navbar

