import React from 'react';
import { GiCancel } from "react-icons/gi";
import { Link } from 'react-router';
const PaymentCancelled = () => {
    return (
       <div className='min-h-screen flex items-center justify-center'>
                   <div className='text-center'>
                        <h2 className="text-2xl font-bold"> Payment Cancelled</h2>
           <GiCancel className="text-6xl mx-auto my-4 mt-4" />  
           <Link to={'/dashboard/my-parcels'} className='my-4'>
           <button className='btn btn-primary text-black'>Please Try Again</button>
           </Link>
                       </div>
       
               </div>
    );
};

export default PaymentCancelled;