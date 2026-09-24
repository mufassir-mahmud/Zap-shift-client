import React from 'react';
import { useParams } from 'react-router';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const ParcelTrack = () => {
    const {trackingId} = useParams();
    const axiosInstace = useAxios();
    const {data : trackings = []} = useQuery({
        queryKey: ['tracking', trackingId],
        queryFn: async()=>{
            const res = await axiosInstace.get(`/trackings/${trackingId}/logs`)
            return res.data
        }
    })
    return (
        <div>
             <div className="my-4">
        <h2 className="text-3xl font-semibold text-center">
          This is Your Tracking ID {trackingId} logs so far {trackings.length}
        </h2>
      </div>
      <div className='w-8/12 mx-auto'>
<ul className="timeline">
 {
    trackings.map((log)=> <li>
    <div className="timeline-start timeline-box">{log.details}</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-primary h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    
    <hr className="bg-primary" />
  </li>)
 }
 
</ul>
      </div>
        </div>
    );
};

export default ParcelTrack;