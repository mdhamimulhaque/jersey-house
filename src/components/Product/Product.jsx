import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, picture, price, category, details } = product;
    return (
        <div className='product_box my-5'>
            <div className="card sm:w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full ' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge bg-pink-500 px-4 py-3 border-none">{category}</div>
                    </h2>
                    <p>{details}</p>
                    <div className="card-actions justify-between items-center mt-5">
                        <div className="font-bold">Price : ${price}</div>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to="/shop" rel="noopener noreferrer" className="px-6 py-2 text-md font-semibold rounded  bg-pink-500 hover:bg-pink-400 text-white ">BUY NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;