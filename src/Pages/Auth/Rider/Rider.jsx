import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import riderImg from '../../../assets/agent-pending.png'
import Swal from 'sweetalert2';
const Rider = () => {
    const {user} = useAuth()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
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
  const RiderRegion = useWatch({control,name:'RiderRegion'})
    const handleRider = (data) =>{
      console.log(data)
      axiosSecure.post('/riders', data)
      .then(res => {
        if(res.data.insertedId){
                  Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Application has been Submitted. We Will reach to in 7 working days",
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
      return (
        <div className='p-6'>
            <div>
        <h2 className="text-4xl font-bold my-5">Be a Rider</h2>
        <p className="text-sm font-semibold">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit(handleRider)}
        className="mt-10"
      >
        {/* {document   } */}
        <div className="divider"></div>
        
        {/* {Parcel name and weight} */}

   
        
        {/* {Rider and reciver info} */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center justify-center my-10  ">
          {/* {Rider info} */}
          <div>
            <h4 className="font-bold mb-4 text-xl">Tell us about yourself</h4>
            <fieldset className="fieldset">
              <label className="label">Rider Name</label>
              <input
                type="text"
                {...register("RiderName")}
                className="input w-full"
                placeholder="Rider Name"
              />
              <label className="label">Driving License Number</label>
              <input
                type="number"
                {...register("DrivingLicenseNumber")}
                className="input w-full"
                placeholder="Driving License Number"
              />
              <label className="label">Rider Email</label>
              <input
                type="email" defaultValue={user?.email}
                {...register("RiderEmail")}
                className="input w-full"
                placeholder="Rider Email"
              />
              
              <label className="label">Rider Phone No</label>
              <input
                type="text"
                {...register("RiderPhoneNo")}
                className="input w-full"
                placeholder="Rider Phone No"
              />
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Rider Regions</legend>
                <select {...register("RiderRegion")}  className="select  w-full">
                  {regions.map(r =>( 
                    <option value={r}>{r}</option>
                  ))}
                </select>
                
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Rider District</legend>
                <select {...register("RiderDistrict")}  className="select  w-full">
                  {districtByregion(RiderRegion).map(r =>( 
                    <option value={r}>{r}</option>
                  ))}
                </select>
                
              </fieldset>
              <label className="label">NID No</label>
              <input
                type="number"
                {...register("NIDNo")}
                className="input w-full"
                placeholder="NID Nor"
              />
              <label className="label">Bike Brend Model And Year</label>
              <input
                type="text"
                {...register("BikeModelYeal")}
                className="input w-full"
                placeholder="Bike Brend Model And Year"
              />
              
              <label className="label">Bike Registration Number</label>
              <input
                type="text"
                {...register("BikeRegNo")}
                className="input w-full"
                placeholder="Bike Registration Number"
              />
              
              <label className="label">Tell Us About Yourself</label>
              <textarea
                className="textarea w-full"
                {...register("AboutRider")}
                placeholder="Tell Us About Yourself"
              ></textarea>
            </fieldset>
          </div>
          {/* {receiver info} */}
          <div>
            
            <img src={riderImg} alt="" />
          </div>
        </div>
        <input
          type="submit"
          value="Apply As A Rider"
          className="btn btn-primary text-black mb-6"
        />
      </form>
        </div>
    );
};

export default Rider;