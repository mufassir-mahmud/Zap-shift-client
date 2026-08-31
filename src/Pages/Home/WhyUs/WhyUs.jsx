import React from 'react';
import liveTracking from '../../../assets/live-tracking.png';
import safeDelivery from '../../../assets/safe-delivery.png';
const WhyUs = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className='my-5'>
                <div className='flex flex-col md:flex-row items-center p-5'>
                    <div>
                        <img src={liveTracking} alt="" />
                    </div>
                     <div className="divider divider-horizontal w-[200px]"></div>
                     <div className=''>
                        <h2 className='font-semibold'>Live Parcel Tracking</h2>
                        <p className='text-sm'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                     </div>
                </div>
                <div className='flex  flex-col md:flex-row items-center p-5'>
                    <div>
                        <img src={liveTracking} alt="" />
                    </div>
                     <div className="divider divider-horizontal w-[200px]"></div>
                     <div className=''>
                        <h2 className='font-semibold'>Live Parcel Tracking</h2>
                        <p className='text-sm'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                     </div>
                </div>
                <div className='flex  flex-col md:flex-row items-center p-5'>
                    <div>
                        <img src={liveTracking} alt="" />
                    </div>
                     <div className="divider divider-horizontal w-[200px]"></div>
                     <div className=''>
                        <h2 className='font-semibold'>Live Parcel Tracking</h2>
                        <p className='text-sm'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                     </div>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default WhyUs;