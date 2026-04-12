import Image from 'next/image';
import React from 'react';
import img from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div className='bg-[#9538E2] rounded-2xl text-center space-y-6 pt-15 pb-40 lg:pb-65 mb-50 lg:mb-70 relative'>
            <h2 className='text-3xl lg:text-5xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
            <h2 className='max-w-[80%] lg:max-w-[70%] mx-auto font-semibold'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h2>
            <div className='flex justify-center'>
                <button className='text-[#9538E2] bg-white py-1.5 px-4 rounded-full font-bold'>Shop Now</button>
            </div>
            <div className='w-[80%] rounded-2xl border p-3 bg-gray-400 absolute left-1/2 -translate-x-1/2 -bottom-30 lg:-bottom-50'>
                <Image src={img} alt='banner' className='rounded-2xl border h-60 lg:h-100 object-cover'></Image>
            </div>
        </div>
    );
};

export default Banner;