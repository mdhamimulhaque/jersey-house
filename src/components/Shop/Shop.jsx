import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { ProductsContext } from '../../layout/Main';
import { addToDb } from '../../utilities/localStorage';
import Product from '../Product/Product';

const Shop = () => {
    const products = useContext(ProductsContext);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(
            exProduct => exProduct.id === product.id
        )

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(
                exProduct => exProduct.id !== product.id
            )
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(product.id);
        toast.success("Product added successfully", { autoClose: 500 })
    }

    return (
        <section className='shop_container'>
            <div className="product_container p-5 bg-gray-200 flex flex-wrap gap-5 justify-center">
                {products.map(product =>
                    <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    />)}
            </div>
        </section>
    );
};

export default Shop;