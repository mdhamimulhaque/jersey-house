import React from 'react';
import ErrorImg from "../../img/error.jpg";

const Error = () => {

    return (
        <div className='flex items-center justify-center h-screen'>
            <img className='w-full lg:w-9/12 lg:m-auto' src={ErrorImg} alt="" />
        </div>
    );
};

export default Error;