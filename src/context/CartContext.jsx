import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
    throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

const addToCart = (product, selectedSize = null, selectedColor = null) => {
    const cartId = selectedSize && selectedColor ? `${product.id}-${selectedSize}-${selectedColor}` : product.id;
    const existingItemIndex = cart.findIndex(item => 
        selectedSize && selectedColor 
        ? item.id === cartId 
        : item.id === product.id
    );

    if (existingItemIndex >= 0) {
        const newCart = [...cart];
        newCart[existingItemIndex].quantity++;
        setCart(newCart);
    } else {
        const newItem = {
            ...product,
            cartId: cartId,
            selectedSize: selectedSize,
            selectedColor: selectedColor,
            quantity: 1,
        };
        setCart([...cart, newItem]);
    }
};

const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
};

const updateQuantity = (cartId, change) => {
    setCart(cart.map(item => {
        const itemId = item.cartId || item.id;
        if (itemId === cartId) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0? {...item, quantity: newQuantity} : item;
        }
        return item;
    }));
};

const clearCart =() => {
    setCart ([]);
};

const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
};

return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
);
};

export default CartContext;

