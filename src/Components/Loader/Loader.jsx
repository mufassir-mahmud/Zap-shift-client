import React from 'react';
import { Lottie } from "lottie-react";
import loader from '../../animations/loading.json'
const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
             <Lottie src={loader} autoplay loop className='w-56' />
        </div>
    );
};

export default Loader;