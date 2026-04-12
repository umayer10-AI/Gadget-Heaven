import React from 'react';
import data from "../../../public/data.json"
import Image from 'next/image';
import { FaRegStar, FaStar } from 'react-icons/fa';
import AddToCartBtn from '@/component/AddToCartBtn';

const page = async ({params}) => {

    const {id} = await params
    const p = data.find(v => v.id === Number(id))
    // console.log(p)

    return (
        <div>
            <div className='bg-[#9538E2] rounded-2xl text-center pt-10 pb-40 lg:pb-65 space-y-3 relative mb-80'>
                <h2 className='text-3xl lg:text-4xl font-bold'>Product Details</h2>
                <h2 className='max-w-[80%] lg:max-w-[70%] mx-auto font-semibold'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h2>
            </div>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 bg-black/50 shadow-2xl backdrop-blur-xl absolute -bottom-130 lg:-bottom-15 left-1/2 -translate-x-1/2 gap-6 p-5 rounded-2xl'>
                <div>
                    <Image width={100} height={100} src={p.product_image} alt='logo' className='rounded-2xl object-cover w-full h-full'></Image>
                </div>
                <div className='space-y-2 col-span-2'>
                    <h2 className='text-2xl font-bold'>{p.product_title}</h2>
                    <h2 className='text-xl font-semibold text-gray-400'>Price: ${p.price}</h2>
                    <button className='btn btn-accent btn-outline rounded-full'>In Stock</button>
                    <p className='text-xl font-semibold text-gray-400'>{p.description}</p>
                    <h2 className='text-xl font-bold'>{p.category}</h2>
                    <ol>
                        {
                            p.Specification.map((v,i) => <li key={i} className='text-gray-400 font-semibold'>{v}</li>)
                        }
                    </ol>
                    <h2 className='text-xl font-bold'>Rating ⭐</h2>
                    <div className='flex items-center gap-5'>
                        <div className='text-yellow-400 text-xl flex items-center gap-2'>
                            <h2><FaStar /></h2>
                            <h2><FaStar /></h2>
                            <h2><FaStar /></h2>
                            <h2><FaStar /></h2>
                            <h2><FaRegStar /></h2>
                        </div>
                        <button className='btn btn-info rounded-full'>4.8</button>
                    </div>
                    <AddToCartBtn p={p}></AddToCartBtn>
                </div>
            </div>
        </div>
    );
};

export default page;