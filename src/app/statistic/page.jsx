import Tabbtn from '@/component/Tabbtn';
import TabCart from '@/component/TabCart';
import Total from '@/component/Total';
import React from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';

const page = () => {
    return (
        <div>
            <div className='bg-[#9538E2] rounded-2xl text-center py-10 space-y-3'>
                <h2 className='text-3xl lg:text-4xl font-bold'>Dashboard</h2>
                <h2 className='max-w-[80%] lg:max-w-[70%] mx-auto font-semibold'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h2>
                <Tabbtn></Tabbtn>
            </div>
                <div className='flex justify-between items-center max-w-[80%] mx-auto my-10'>
                    <h2 className='text-2xl font-bold'>Cart</h2>
                    <div className='flex gap-3 items-center'>
                        <Total></Total>
                        <button className='btn btn-primary btn-outline flex gap-1'>Sort by Price<GiSettingsKnobs /></button>
                        <button className='btn btn-primary'>Purchase</button>
                    </div>
                </div>
            <TabCart></TabCart>
        </div>
    );
};

export default page;