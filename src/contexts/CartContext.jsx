import React, { createContext, useState } from 'react'

export const CartContext = createContext([]);
console.log('Cart Context: ', CartContext);

const CartSupplier = ( { children } ) => {

    const [shoppingCart, setShoppingCart] = useState([])

    const clearAll = () => setShoppingCart([]);

    const prodInCart = (id) => shoppingCart.find(product => product.id === id) ? true : false;

    const removeItem = (id) => setShoppingCart(shoppingCart.filter(product => product.id !== id));

    const pushItem = (product, quantity) => {
      let newCart;
      let prod = shoppingCart.find(prod => prod.id === product.id);
        if (prod) {
          prod.quantity += quantity;
          newCart = [...shoppingCart];
        } else {
          prod = { ...product, quantity: quantity}
          newCart = [...shoppingCart, prod]
        }

      setShoppingCart(newCart)
    }
    
    /* const pushItem = (product,  /* newQuantity  ) => {
        const newCart = shoppingCart.filter(prod => prod.id !== product.id);
        newCart.push({ ...product,  /* quantity: newQuantity   });
        setShoppingCart(newCart);
    } */

    /* const increaseQuantity = (product) => {product.quantity++}
    
    
    const decreaseQuantity = (product) => {
        if (product.quantity !== 1) {
          product.quantity--
        }
    } */

    console.log('Cart: ', shoppingCart);

  return (
    <CartContext.Provider value={{ 
      clearAll, 
      prodInCart, 
      removeItem, 
      pushItem, 
      shoppingCart
      /* increaseQuantity,
      decreaseQuantity */ }}>
        { children }
    </CartContext.Provider>
  )
}

export default CartSupplier



/* import React, { useContext, useState } from 'react'
import { createContext } from 'react';
export const CartContext = createContext([]);

/* export const useCartContext = () => useContext(CartContext) 

const CartSupplier = ( {children} ) => {

    const [shoppingCart, setShoppingCart] = useState([]);    

    const clearAll = () => setShoppingCart([]);

    const prodInCart = (id) => shoppingCart.find(product => product.id === id) ? true : false;

    const removeItem = (id) => setShoppingCart(shoppingCart.filter(product => product.id !== id));

    const pushItem = (product, newQuantity) => {
        const newCart = shoppingCart.filter(prod => prod.id !== product.id);
        newCart.push({ ...product, quantity: newQuantity });
        setShoppingCart(newCart);
    }

  return (
    <CartContext.Provider value = {{ clearAll, prodInCart, removeItem, pushItem }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartSupplier */