import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { IoTrashBin } from "react-icons/io5"
import Swal from "sweetalert2";
const ApproveRider = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch,data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });
  const updatRiderStatus = (rider,status) =>{
    const updateInfo = {status: status, email: rider.RiderEmail};
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
    .then(res => {
      if(res.data.modifiedCount){
        refetch()     
        Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Rider Status is Set to ${status}`,
                    showConfirmButton: false,
                    timer: 1500
                  })
      }
    })
  }
  const handleApproval = (rider) =>{
    updatRiderStatus(rider, 'Approved');
  }
  const handleReject = (rider) =>{
    updatRiderStatus(rider, 'Reject');
  }
  const handleDelete = (rider) =>{
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
        axiosSecure.delete(`/riders/${rider._id}`)
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
      <div>
        <h2 className="text-2xl font-bold text-center my-4">
          Approve Rider Request
        </h2>
        <p className="text-center my-3 font-semibold text-xl">
          Rider Request {riders.length}
        </p>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                
                <th>Rider Name</th>
                <th>Email</th>
                <th>District</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {riders.map((r,i) =>
                <tr>
                <th>{i+1}</th>
                <td>{r.RiderName}</td>
                <td>{r.RiderEmail}</td>
                <td>{r.status}</td>
                <td>
                    <div className="">
                        <button className="btn btn-sm" onClick={()=> handleApproval(r)}><FaUserCheck className="text-xl" /></button>
                        <button className="btn btn-sm mx-4" onClick={()=> handleReject(r)}><IoPersonRemove className="text-xl" /></button>
                        <button className="btn btn-sm"><IoTrashBin className="text-xl"  onClick={()=> handleDelete(r)}/></button>
                    </div>
                </td>
              </tr>
              )}
              
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveRider;
