import React, { useContext } from 'react';
import { productsContext } from '../../layout/Main';
import Product from '../Product/Product';

const Shop = () => {
    const products = useContext(productsContext);
    return (
        <section className='shop_container'>
            <div className="product_container p-5 bg-gray-200 flex flex-wrap gap-5 justify-center">
                {products.map(product =>
                    <Product
                        product={product}
                        key={product.id}
                    />)}
            </div>
        </section>
    );
};

export default Shop;