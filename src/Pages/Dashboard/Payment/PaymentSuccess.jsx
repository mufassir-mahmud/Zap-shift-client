import React from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";
const PaymentSuccess = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='text-center card w-8xl p-10  bg-[#E1F4A8] card-xl shadow-sm'>
                 <h2 className="text-2xl font-bold">Successfully Payment</h2>
    <RiVerifiedBadgeFill className="text-6xl mx-auto mt-4" />
                </div>

        </div>
    );
};

export default PaymentSuccess;