import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // console.log(products);
    //if cart data is in database,you have to use async await
    const storeCart = getShoppingCart();
    const saveCart = [];
    // console.log(storeCart);
    for(const id in storeCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storeCart[id]
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);

        }
    }
    return saveCart;
}
export default cartProductsLoader;