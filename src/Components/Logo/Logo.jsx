import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to={"/"}>
        <div className='flex items-end'>
            <img className='' src={logo} alt="" />
            <span className='text-3xl  font-bold -ms-2.5   '>ZapShift</span>
        </div>
        </Link>
        
    );
};

export default Logo;