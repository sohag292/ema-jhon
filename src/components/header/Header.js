import React from 'react';
import './header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <nav className='header'>
        <img src={logo} alt="" />
        <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
        </div>
    </nav>
  )
}
