import React, { useEffect } from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure()
    console.log(sessionId);
    useEffect(()=>{
        if(sessionId){
        axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
        .then(res=>{
            console.log(res.data)
        })
        }
    },[sessionId,axiosSecure])
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