import React from 'react';
import data from "../../public/data.json"
import GadgetCart from './GadgetCart';

const Gadget = async () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-10'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex gap-5'>
                <div className='bg-gray-900 flex flex-col gap-4 p-4 rounded-2xl h-fit w-60'>
                    <button className='btn btn-primary rounded-full'>All Product</button>
                    <button className='btn btn-info btn-outline rounded-full'>Laptops</button>
                    <button className='btn btn-info btn-outline rounded-full'>Phones</button>
                    <button className='btn btn-info btn-outline rounded-full'>Accessories</button>
                    <button className='btn btn-info btn-outline rounded-full'>Smart Watches</button>
                    <button className='btn btn-info btn-outline rounded-full'>MacBook</button>
                    <button className='btn btn-info btn-outline rounded-full'>Iphone</button>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {
                        data.map(v => <GadgetCart key={v.id} p={v}></GadgetCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadget;