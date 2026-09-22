import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Payment = () => {
    const {parcelId} = useParams();
    const axiosSecure = useAxiosSecure()
    const {isLoading, data: parcel} = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async() =>{
           const res = await  axiosSecure.get(`/parcels/${parcelId}`)
           return res.data
        }
    })
    if(isLoading){
       return <span className="loading loading-infinity loading-xl"></span>
    }
    const handlePayment = async() =>{
        const paymentInfo = {
            cost: parcel.cost,
            parcelId : parcel._id,
            parcelName: parcel.parcelName,
            senderEmail: parcel.SenderEmail
        }
        console.log(parcel.cost)
        console.log(parcel)
        const res = await axiosSecure.post(('/create-checkout-session'),paymentInfo)
        console.log(res.data)
        window.location.href = res.data.url
    } 
    return (
        <div>
            <div className='my-4 text-center'>
                <h2 className='my-3'>Payment For {parcel.parcelName  }</h2>
            <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
            </div>
            
        </div>
    );
};

export default Payment;