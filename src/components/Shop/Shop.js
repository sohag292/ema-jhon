import React, { useEffect, useState } from 'react'
import { addToDb, getShoppingCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

export default function Shop() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data=> setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
       const savedCart =[];
        //step 1: get id
         for(const id in storedCart){
            // step 2: get the product by using id
            const addProduct = products.find(product => product.id === id);
           if(addProduct){
             //step 3: get quantity of the product
             const quantity = storedCart[id]
             addProduct.quantity = quantity;
             //step 4: add the addedProduct to the saved cart
             savedCart.push(addProduct)
            // step 5: set the cart
            setCart(savedCart);
           }

         }
    }, [products])

    const handleAddToCart= (product)=>{
        // console.log(product);
        const newCart = [...cart, product]
        // console.log(newCart);
        setCart(newCart)
        addToDb(product.id)
    }

  return (
    <div className='shop-container'>
        <div className="products-container">
            {
                products.map(product => <Product 
                     key={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}
                     ></Product>)
            }
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
    </div>
  )
}
