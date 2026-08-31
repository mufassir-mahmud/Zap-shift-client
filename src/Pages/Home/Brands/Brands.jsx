import React from 'react';

import brand1 from '../../../assets/brands/amazon.png';
import brand2 from '../../../assets/brands/casio.png';
import brand3 from '../../../assets/brands/moonstar.png';
import brand4 from '../../../assets/brands/randstad.png';
import brand5 from '../../../assets/brands/star.png';

import MarqueeModule from 'react-fast-marquee';

const Marquee = MarqueeModule.default;

const Brands = () => {
    return (
        <div className="my-10">

            <h2 className="text-center text-2xl font-semibold my-5">
                We've Helped Thousands of Sales Team
            </h2>

            <Marquee autoFill={true} pauseOnHover={true} speed={50}>
                <div className="flex items-center gap-10 mx-5">

                    <img
                        src={brand1}
                        alt="Amazon"
                    />

                    <img
                        src={brand2}
                        alt="Casio"
                    />

                    <img
                        src={brand3}
                        alt="Moonstar"
                    />

                    <img
                        src={brand4}
                        alt="Randstad"
                    />

                    <img
                        src={brand5}
                        alt="Star"
                    />

                </div>
            </Marquee>

        </div>
    );
};

export default Brands;