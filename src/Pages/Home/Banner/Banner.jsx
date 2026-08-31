import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1  from '../../../assets/banner/banner1.png'
import bannerImg2  from '../../../assets/banner/banner2.png'
import bannerImg3  from '../../../assets/banner/banner3.png'
import { FaArrowAltCircleRight } from "react-icons/fa";
const Banner = () => {
    return (
        <Carousel autoPlay= {true}
        infiniteLoop = {true}
        
        >
                <div className="relative">
    <img src={bannerImg1} className="w-full" />

    <div className="absolute bottom-15 left-10 z-10 flex gap-3">
        <div className="flex items-center gap-2 bg-primary py-4 px-3 rounded-2xl">
            <button className='font-bold'>Take your Parcel</button>
            <FaArrowAltCircleRight className='text-xl' />
        </div>
        <button className='font-bold border-2 rounded-2xl px-4'>Be a Rider</button>
    </div>
</div>
                                <div className="relative">
    <img src={bannerImg2} className="w-full" />

    <div className="absolute bottom-15 left-10 z-10 flex gap-3">
        <div className="flex items-center gap-2 bg-primary py-4 px-3 rounded-2xl">
            <button className='font-bold'>Take your Parcel</button>
            <FaArrowAltCircleRight className='text-xl' />
        </div>
        <button className='font-bold border-2 rounded-2xl px-4'>Be a Rider</button>
    </div>
</div>
                                <div className="relative">
    <img src={bannerImg1} className="w-full" />

    <div className="absolute bottom-15 left-10 z-10 flex gap-3">
        <div className="flex items-center gap-2 bg-primary py-4 px-3 rounded-2xl">
            <button className='font-bold'>Take your Parcel</button>
            <FaArrowAltCircleRight className='text-xl' />
        </div>
        <button className='font-bold border-2 rounded-2xl px-4'>Be a Rider</button>
    </div>
</div>
            </Carousel>
    );
};

export default Banner;