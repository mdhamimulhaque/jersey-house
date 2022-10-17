import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

// ---> context
export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

const Main = () => {
    const [cart, setCart] = useState([])
    const products = useLoaderData();
    return (
        <ProductsContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <Header />
                <Outlet />
                <Footer />
            </CartContext.Provider>
        </ProductsContext.Provider>
    );
};

export default Main;