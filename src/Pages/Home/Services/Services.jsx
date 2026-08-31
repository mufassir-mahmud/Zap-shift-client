import React from "react";
import servicesIcon from "../../../assets/service.png";
const Services = () => {
  return (
    <div className="bg-secondary mb-20 p-10 rounded-2xl">
      <div className="text-center text-white mb-10">
        <h2 className="text-3xl mb-5">Our Services</h2>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br />
          business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto justify-items-center">
        <div className="bg-white w-[250px] p-5 rounded-xl text-center">
          <div className="flex flex-col gap-3">
            <img src={servicesIcon} className="w-[50px] mx-auto" alt="" />
            <h2 className="font-bold">Express & Standard Delivery</h2>
            <p className="text-sm">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off. 
            </p>
          </div>
        </div>
        <div className="bg-[#CAEB66] w-[250px] p-5 rounded-xl text-center">
          <div className="flex flex-col gap-3">
            <img src={servicesIcon} className="w-[50px] mx-auto" alt="" />
            <h2 className="font-bold">Nationwide Delivery</h2>
            <p className="text-sm">
              We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.
            </p>
          </div>
        </div>
        <div className="bg-white w-[250px] p-5 rounded-xl text-center">
          <div className="flex flex-col gap-3">
            <img src={servicesIcon} className="w-[50px] mx-auto" alt="" />
            <h2 className="font-bold">Fulfillment Solution</h2>
            <p className="text-sm">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="bg-white w-[250px] p-5 rounded-xl text-center">
          <div className="flex flex-col gap-3">
            <img src={servicesIcon} className="w-[50px] mx-auto" alt="" />
            <h2 className="font-bold">Cash on Home Delivery</h2>
            <p className="text-sm">
              100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
            </p>
          </div>
        </div>
        <div className="bg-white w-[250px] p-5 rounded-xl text-center">
          <div className="flex flex-col gap-3">
            <img src={servicesIcon} className="w-[50px] mx-auto" alt="" />
            <h2 className="font-bold">Corporate Service / Contract In Logistics</h2>
            <p className="text-sm">
              Customized corporate services which includes warehouse and inventory management support.
            </p>
          </div>
        </div>

        <div className="bg-white w-[250px] p-5 rounded-xl text-center">bg-white
          <div className="flex flex-col gap-3">
            <img src={servicesIcon} className="w-[50px] mx-auto" alt="" />
            <h2 className="font-bold">Parcel Return</h2>
            <p className="text-sm">
            Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
            </p>
          </div>
        </div>

        {/* Other cards... */}
      </div>
    </div>
  );
};

export default Services;
