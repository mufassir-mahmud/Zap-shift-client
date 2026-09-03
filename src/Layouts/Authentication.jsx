import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'


const Authentication = () => {
    
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo/>
            <div className='flex flex-col md:flex-row my-10 items-center max-w-5xl mx-auto'>
                <div className='flex-1'>
       <Outlet></Outlet>
                </div>
                
                <div className='bg-[#E1F4A8]'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Authentication;