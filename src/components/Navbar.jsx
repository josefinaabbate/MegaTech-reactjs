import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='navbar'>
           <Link to="/"className='logo'> <h1>MegaTech</h1> </Link>
           <ul className='menu'>
            <li><Link className='menu-link'to='/'>Home</Link></li>
            <li><Link className='menu-link'to='/'>Products</Link></li>
            <li><Link className='menu-link'to='/productos/ Headphones'>Headphones</Link></li>
            <li><Link className='menu-link'to='/productos/ Iphone'>Iphone</Link></li>
            <li><Link className='menu-link'to='/productos/ Smartwatch'>Smartwatchs</Link></li>
            <li><Link className='menu-link'to='/cart'>Cart</Link></li>
           </ul>
        </nav>
    )
}
export default Navbar

