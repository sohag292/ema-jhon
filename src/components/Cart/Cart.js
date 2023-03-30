import React from 'react'
import './Cart.css'

export default function Cart({cart}) {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
        quantity = quantity + product.quantity
    }

    let tax = total*7/100;
    let grandTotal = total + shipping + tax;

  return (
    <div className='cart'>
        <h1>cart summert</h1>
        <p>Selected Items:  {quantity}</p>
        <p>Total Price: ${total} </p>
        <p>Total Shipping: {shipping} </p>
        <p>Tax :${tax.toFixed(2)} </p>
        <h4>Grand Total: ${grandTotal.toFixed(2)} </h4>
    </div>
  )
}
