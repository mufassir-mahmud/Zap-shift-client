import React from 'react';
import bookingIcon from '../../../assets/bookingIcon.png'
const Works = () => {
    return (
        <div className='my-20 '>
            <h2 className='my-10 font-semibold text-3xl text-center'>How To Works</h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
             <div className='bg-[#E1F4A8] w-[250px] p-5 rounded-xl'>
                <div className='flex flex-col gap-3'>
                 <img src={bookingIcon} className='w-[50px] ' alt="" />
                <h2>Booking Pick & Drop</h2>
                <p>From personal packages to business shipments — we deliver on time, every time.</p>   
                </div>
                
            </div>   
             <div className='bg-[#E1F4A8] w-[250px] p-5 rounded-xl'>
                <div className='flex flex-col gap-3'>
                 <img src={bookingIcon} className='w-[50px] ' alt="" />
                <h2>Booking Pick & Drop</h2>
                <p>From personal packages to business shipments — we deliver on time, every time.</p>   
                </div>
                
            </div>   
             <div className='bg-[#E1F4A8] w-[250px] p-5 rounded-xl'>
                <div className='flex flex-col gap-3'>
                 <img src={bookingIcon} className='w-[50px] ' alt="" />
                <h2>Booking Pick & Drop</h2>
                <p>From personal packages to business shipments — we deliver on time, every time.</p>   
                </div>
                
            </div>   
             <div className='bg-[#E1F4A8] w-[250px] p-5 rounded-xl'>
                <div className='flex flex-col gap-3'>
                 <img src={bookingIcon} className='w-[50px] ' alt="" />
                <h2>Booking Pick & Drop</h2>
                <p>From personal packages to business shipments — we deliver on time, every time.</p>   
                </div>
                
            </div>   
            </div>
            
        </div>
    );
};

export default Works;