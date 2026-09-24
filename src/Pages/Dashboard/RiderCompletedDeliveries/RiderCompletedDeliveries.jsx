import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const RiderCompletedDeliveries = () => {
    const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcles", user.email, "driver-assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=parcel-delivered`,
      );
      return res.data;
    },
  });
    console.log("User in Rider",user, parcels);
    const calculatePayout = (parcel) =>{
        if(parcel.senderDistrict === parcel.receiverDistrict){
            return parcel.cost * 0.8
        }
        else{
            return parcel.cost * 0.6
        }
    }
    return (
        <div>
            <div className='my-4'>
                <h2 className='text-3xl font-semibold text-center'>Welcome {user?.displayName}. Your Completed Deliveries {parcels.length}</h2>
            </div>
            <div className='w-8/12 mx-auto'>
                <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Created At</th>
        <th>Pickup District </th>
        <th>Delivery District </th>
        <th>Cost</th>
        <th>Payout Cost</th>
        <th>Action </th>
      </tr>
    </thead>    
    <tbody>
      {
        parcels.map((parcel,index)=><tr>
        <th>{index + 1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.createdAt}</td>
        <td>{parcel.senderDistrict}</td>
        <td>{parcel.receiverDistrict}</td>
        <td>{parcel.cost}</td>
        <td>{calculatePayout(parcel)}</td>
        <td><button className='btn btn-primary text-black'>Cash Out</button></td>
      </tr>)
      }
      
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default RiderCompletedDeliveries;