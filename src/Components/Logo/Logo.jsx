import React from 'react';
import logo from '../../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex items-end'>
            <img className='' src={logo} alt="" />
            <span className='text-3xl  font-bold -ms-2.5   '>ZapShift</span>
        </div>
    );
};

export default Logo;