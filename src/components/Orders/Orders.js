import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import { Link, useLoaderData } from 'react-router-dom'
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
export default function Orders() {
 const  saveCart = useLoaderData();
 const [cart, setCart] = useState(saveCart)
//  console.log(cart);

const handleRemoveFromCart = (id)=>{
  // console.log(id);
  const remaning = cart.filter(product => product.id !== id);
  setCart(remaning);
  removeFromDb(id)
}

const handleClearCart = ()=>{
  setCart([]);
  
  deleteShoppingCart();
}
  return (
    <div className='shop-container'>
      <div className='review-container'>
          {
            cart.map(product => <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
            ></ReviewItem>)
          }
      </div>
      <div className='cart-container'>
        <Cart 
        cart={cart}
        handleClearCart={handleClearCart}
        
        >
            <Link className='proced-link' to="/chackout">
                  <button className='proced-checkout' >Proceed Checkout</button>
            </Link>
        </Cart>
      </div>
    </div>
  )
}
