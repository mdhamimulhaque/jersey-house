import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const productsContext = createContext([]);

const Main = () => {
    const products = useLoaderData();
    return (
        <productsContext.Provider value={products}>
            <Header />
            <Outlet />
            <Footer />
        </productsContext.Provider>
    );
};

export default Main;