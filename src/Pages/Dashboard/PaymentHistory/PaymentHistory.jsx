import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data : payments= []} = useQuery({
        queryKey: ['payments', user.email ],
        queryFn: async () =>{
         const res = await axiosSecure.get(`/payments?email=${user.email}`)
         return res.data
        }
    })
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold text-center my-6'>This is my payment history</h2>
                <p>My Total Payments {payments.length}</p>
                </div>
                <div className='w-10/12 mx-auto my-4' >
                    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Parcel Name</th>
        <th>Amount</th>
        <th>Paid Time</th>
        <th>Transaction Id</th>
        <th>Tracking Id</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        payments.map((p,i) =>  <tr>
        <th>{i+1}</th>
        <td>{p.customerEmail}</td>
        <td>{p.parcelName}</td>
        <td>{p.amount}</td>
        <td>{p.paidAt}</td>
        <td>{p.transactionId}</td>
        <td>{p.trackingId}</td>
      </tr>)
     }
      {/* row 2 */}
   
    </tbody>
  </table>
</div>
                </div>
        </div>
    );
};

export default PaymentHistory;