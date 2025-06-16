import { createContext, useState } from "react";
import {products} from "../assets/assets.js";

export const myCart = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, selectedSize) => {
        // Проверяем существует ли товар с таким же ID и размером в корзине
        const existingProduct = cartItems.find((item) =>
            item._id === product._id && item.size === selectedSize
        );

        if(existingProduct){
            // Если товар уже есть - увеличиваем количество
            const updatedCart = cartItems.map((item) =>
                item._id === product._id && item.size === selectedSize
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCartItems(updatedCart);
        }
        else {
            // Если товара нет - добавляем новый
            setCartItems([
                ...cartItems,
                { ...product, size: selectedSize, quantity: 1 }
            ]);
        }
    };

    const removeFromCart = (productId, size) => {
        const updatedCart = cartItems.filter(
            (item) => !(item._id === productId && item.size === size)
        );
        setCartItems(updatedCart);
    };

    // Функция для обновления количества товара
    const updateQuantity = (productId, size, newQuantity) => {
        if (newQuantity <= 0) {
            // Если количество 0 или меньше - удаляем товар
            removeFromCart(productId, size);
            return;
        }

        const updatedCart = cartItems.map((item) =>
            item._id === productId && item.size === size
                ? { ...item, quantity: newQuantity }
                : item
        );
        setCartItems(updatedCart);
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Функция для подсчета общей стоимости
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalQuantity,
        getTotalPrice,
    };

    return (
        <myCart.Provider value={value}>
            {children}
        </myCart.Provider>
    );
};