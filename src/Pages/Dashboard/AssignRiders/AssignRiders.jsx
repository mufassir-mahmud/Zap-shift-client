import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AssignRiders = () => {
    const [selectedParcel, setSelectedParcel] = useState(null)
  const riderModelRef = useRef()
    const axiosSecure = useAxiosSecure();
  const { data: parcels = [] , refetch: parcelRefetch} = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup",
      );
      return res.data;
    },
  });
    const openRiderAssignModal = (parcel) => {
  console.log("FULL PARCEL:", parcel);
  console.log("DISTRICT:", parcel.senderDistrict);  

  setSelectedParcel(parcel);
  riderModelRef.current.showModal();
};
const { data: riders = [] } = useQuery({
  queryKey: ["riders", selectedParcel?.senderDistrict, "available"],

  enabled: !!selectedParcel?.senderDistrict,

  queryFn: async () => {
    const district = selectedParcel.senderDistrict;

    const url = `/riders?status=approved&district=${encodeURIComponent(
      district
    )}&workStatus=available`;

    console.log("REQUEST URL:", url);

    const res = await axiosSecure.get(url);

    console.log("Riders found:", res.data);

    return res.data;
  },
});
 const handleAssignRider = rider =>{
    const riderAssignInfo = {
        riderId : rider._id,
        riderName : rider.RiderName,
        riderEmail : rider.RiderEmail,
        parcelId: selectedParcel._id
    }
    axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
    .then(res => {
        if(res.data.modifiedCount){
            riderModelRef.current.close();
            parcelRefetch()
            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Rider Assign ${status}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
        }
    })
 }
  return (
    <div>
      <div className="my-6">
        <h2 className="text-3xl font-semi-bold text-center">
          Assign Riders For Pending Pickup {parcels.length}
        </h2>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Parcel Cost</th>
                <th>Created At</th>
                <th>Pickup District</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              parcels.map((parcel,index)=><tr>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.createdAt}</td>
                <td>{parcel.senderDistrict}</td>
                <td><button className="btn btn-primary text-black" onClick={() => openRiderAssignModal(parcel)}>Assign</button></td>
              </tr>)
              }
              
              
             
            </tbody>
          </table>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog ref={riderModelRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Riders Available In This Area {riders.length}</h3>
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {riders.map((rider,index)=> <tr>
        <th>{index + 1}</th>
        <td>{rider.RiderName}</td>
        <td>{rider.RiderEmail}</td>
        <td><button onClick={()=>handleAssignRider(rider)} className="btn btn-primary text-black">Find Rider</button></td>
      </tr>)}
     
     
    </tbody>
  </table>
</div>
    <div className="modal-action flex justify-center items-center">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn ">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </div>
      <div></div>
    </div>
  );
};

export default AssignRiders;
