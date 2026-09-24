import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcles", user.email, "driver-assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=driver-assigned`,
      );
      return res.data;
    },
  });
  console.log(parcels);
  const handleStatusUpdate = (parcel, status) => {
    const statusInfo = { deliveryStatus: status , riderId : parcel.riderId, trackingId: parcel.trackingId};
    let message = `Parcel Status is Update with ${status.split("-").join(" ")}`
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="my-4">
        <h2 className="text-3xl font-semibold text-center">
          My Assined Delivery {parcels.length}
        </h2>
      </div>
      <div className="my-4 w-6/12 mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Parcel Name</th>
                <th>Sender Address</th>
                <th>Receiver Address</th>
                <th>Actions</th>
                <th>Delivery Actions</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{parcel.parcelName}</td>
                  <td>{parcel.senderDistrict}</td>
                  <td>{parcel.receiverDistrict}</td>
                  <td>
                    {parcel.deliveryStatus === "driver-assigned" ? (
                      <>
                        <button
                          onClick={() => handleStatusUpdate(parcel, 'rider-arriving')}
                          className="btn btn-primary text-black"
                        >
                          Accept
                        </button>
                        <button className="btn btn-error mx-3">Reject</button>
                      </>
                    ) : (
                      <button className="btn-primary text-black">
                        Accepted
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                          onClick={() => handleStatusUpdate(parcel, 'parcel-picked-up')}
                          className="btn btn-primary text-black"
                        >
                          Picked Up
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(parcel, 'parcel-delivered')}
                          className="btn btn-primary mx-3 text-black"
                        >
                          Deliverd
                        </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
