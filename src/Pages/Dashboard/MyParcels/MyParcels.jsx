import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import Swal from 'sweetalert2'
import { Link } from 'react-router';
const MyParcels = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()
    const {data : parcels = [], refetch} = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data
        }
    })
    const handleDelete = (id) =>{
      console.log(id)
      const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    axiosSecure.delete(`/parcels/${id}`)
    .then(res => {
      console.log(res.data)
      if(res.data.deletedCount == 1){
        refetch()
        swalWithBootstrapButtons.fire({
    
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  }); 
      }
    })
   
  } 
  else if (result.dismiss === Swal.DismissReason.cancel)
 /* Read more about handling dismissals below */
  swalWithBootstrapButtons.fire({
    title: "Cancelled",
    text: "Your imaginary file is safe :)",
    icon: "error"
  });
});
    }
    return (
        <div>
            <h2 className='text-center text-2xl my-6 font-semibold'>My Parcels {parcels.length}</h2>
            <div>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Cost</th>
        <th>Payment</th>
        <th>Track Parcel</th>
        <th>Delivery Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        parcels.map((parcel,index) =>  <tr key={parcel._id}>
        <th>{index + 1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.cost}</td>
        <td>{
          parcel.paymentStatus === 'paid' ? <button className="btn btn-sm text-black btn-primary">Paid</button> : <Link to={`/dashboard/payment/${parcel._id}`}><button className="btn btn-sm text-black btn-primary">Pay</button></Link>
          }
          </td>
        <td>
          <Link to={`/parcel-track/${parcel.trackingId}`}>{parcel.trackingId}
          </Link>
          </td>
        <td>{parcel.deliveryStatus}</td>
        
        <td className=''>
            
            <button className='btn btn-square hover:bg-primary not-first:mx-2'><FaEye  /></button>
            <button className='btn btn-square mx-2  hover:bg-primary'><AiFillEdit /></button>
            <button onClick={() => handleDelete(parcel._id)} className='btn btn-square  hover:bg-primary'><MdDelete /></button>
        </td>
      </tr>)
      }
     
     
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default MyParcels;