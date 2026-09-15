import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import useAuth from './../../Hooks/useAuth';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const SendParcel = () => {
    const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure() 
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);
  const regionsDuplicate = serviceCenters.map(c => c.region)
  const regions = [...new Set(regionsDuplicate)]
  console.log(regions)
  const districtByregion = region => {
    const regionsDistrict = serviceCenters.filter(sc => sc.region == region)
    const district = regionsDistrict.map(d => d.district);
    return district
  }
  const senderRegion = useWatch({control,name:'senderRegion'})
  const receiverRegion = useWatch({control, name: 'receiverRegion'})
   const navigate = useNavigate()
  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === 'document';
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight)
    let cost = 0;
   
    if(isDocument){
      cost = isSameDistrict ?  60 : 80;
      
    }
    else{
        if(parcelWeight < 3){
          cost = isSameDistrict ? 110 : 150
        }
        else{
          const minCharge = isSameDistrict ? 110 : 150;
          const extraWeight = parcelWeight - 3;
          const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
          cost = minCharge + extraCharge
        }
    }
    console.log(cost)
    data.cost = cost
    Swal.fire({
  title: "Are you sure?",
  text: `You will Charge ${cost} taka . Click to Pay`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Payment"
}).then((result) => {
  if (result.isConfirmed){
    axiosSecure.post('/parcels',data)
    .then(res =>{
      // console.log(res.data)
      if(res.data.insertedId){
        navigate('/dashboard/my-parcels')
        Swal.fire({
  position: "center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
      }
    })
  };
});
  };
  return (
    <div className="my-10">
      <div>
        <h2 className="text-4xl font-bold my-5">Send A Parcel</h2>
        <p className="text-xl font-semibold">Enter your parcel details</p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-10"
      >
        {/* {document   } */}
        <div className="divider"></div>
        <div className="">
          <label className="label mr-6">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              
              className="radio radio-success"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              
              className="radio radio-success"
            />
            Non-Document
          </label>
        </div>
        {/* {Parcel name and weight} */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-6">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>
        <div className="divider"></div>
        {/* {sender and reciver info} */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          {/* {sender info} */}
          <div>
            <h4 className="font-bold mb-4">Sender Details</h4>
            <fieldset className="fieldset">
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("SenderName")}
                className="input w-full"
                placeholder="Sender Name"
              />
              <label className="label">Sender Email</label>
              <input
                type="email" defaultValue={user?.email}
                {...register("SenderEmail")}
                className="input w-full"
                placeholder="Sender Email"
              />
              <label className="label">Address</label>
              <input
                type="text"
                {...register("SenderAddress")}
                className="input w-full"
                placeholder="Address"
              />
              <label className="label">Sender Phone No</label>
              <input
                type="text"
                {...register("SenderPhoneNo")}
                className="input w-full"
                placeholder="Sender Phone No"
              />
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select {...register("senderRegion")}  className="select  w-full">
                  {regions.map(r =>( 
                    <option value={r}>{r}</option>
                  ))}
                </select>
                
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender District</legend>
                <select {...register("senderDistrict")}  className="select  w-full">
                  {districtByregion(senderRegion).map(r =>( 
                    <option value={r}>{r}</option>
                  ))}
                </select>
                
              </fieldset>
              <label className="label">Pickup Instruction</label>
              <textarea
                className="textarea w-full"
                {...register("PickupInstruction")}
                placeholder="Pickup Instruction"
              ></textarea>
            </fieldset>
          </div>
          {/* {receiver info} */}
          <div>
            <h4 className="font-bold mb-4">Receiver Details</h4>
            <fieldset className="fieldset">
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("ReceiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />
              <label className="label">Receiver Email</label>
              <input
                type="email"
                {...register("ReceiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />
              <label className="label">Receiver Address</label>
              <input
                type="text"
                {...register("ReceiverAddress")}
                className="input w-full"
                placeholder="Receiver Address"
              />
              <label className="label">Receiver Contact No</label>
              <input
                type="text"
                {...register("ReceiverPhoneNo")}
                className="input w-full"
                placeholder="Receiver Phone No"
              />
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select {...register("receiverRegion")}  className="select  w-full">
                  {regions.map(r =>( 
                    <option value={r}>{r}</option>
                  ))}
                </select>
                
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select {...register("receiverDistrict")}  className="select  w-full">
                  {districtByregion(receiverRegion).map(d => <option value={d}>{d}</option>)
                  
                  }
                </select>
                
              </fieldset>
              <label className="label">Delivery Instruction</label>
              <textarea
                className="textarea w-full"
                {...register("DeliveryInstruction")}
                placeholder="Delivery Instruction"
              ></textarea>
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          value="Send Parcel"
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default SendParcel;
