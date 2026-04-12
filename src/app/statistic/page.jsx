import React from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';

const page = () => {
    return (
        <div>
            <div className='bg-[#9538E2] rounded-2xl text-center py-10 space-y-3'>
                <h2 className='text-3xl lg:text-4xl font-bold'>Dashboard</h2>
                <h2 className='max-w-[80%] lg:max-w-[70%] mx-auto font-semibold'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h2>
                <div className='flex justify-center items-center gap-2'>
                    <button className='btn btn-primary btn-outline bg-white rounded-full'>Cart</button>
                    <button className='btn rounded-full'>Wishlist</button>
                </div>
            </div>
                <div className='flex justify-between items-center max-w-[80%] mx-auto my-5'>
                    <h2 className='text-2xl font-bold'>Cart</h2>
                    <div className='flex gap-2 items-center'>
                        <h2 className='font-bold text-2xl'>Total cost: 999.99</h2>
                        <button className='btn btn-primary btn-outline flex gap-1'>Sort by Price<GiSettingsKnobs /></button>
                        <button className='btn btn-primary'>Purchase</button>
                    </div>
                </div>
        </div>
    );
};

export default page;