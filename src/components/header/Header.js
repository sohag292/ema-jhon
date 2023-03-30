import React from 'react';
import './header.css';
import logo from '../../images/Logo.svg'
export default function Header() {
  return (
    <nav className='header'>
        <img src={logo} alt="" />
        <div>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
        </div>
    </nav>
  )
}