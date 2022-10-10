import React from 'react';
import ErrorImg from "../../img/error.jpg";

const Error = () => {

    return (
        <div className='h-screen'>
            <button className='m-5 px-8 py-3 font-semibold rounded bg-pink-500 text-white'>Go Back To Home</button>
            <div className="img_box flex items-center justify-center ">
                <img className='w-full lg:w-9/12 lg:m-auto' src={ErrorImg} alt="" />
            </div>
        </div>
    );
};

export default Error;