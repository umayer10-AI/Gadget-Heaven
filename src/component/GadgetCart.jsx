import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GadgetCart = ({p}) => {
    return (
        <div className='border p-5 rounded-2xl space-y-2 h-full'>
            <Image width={100} height={100} src={p.product_image} alt='logo' className='rounded-2xl object-cover w-full h-40'></Image>
            <h2 className='text-xl font-bold'>{p.product_title}</h2>
            <h2 className='text-gray-400'>Price: {p.price}k</h2>
            <Link href={`/${id}`} className='btn btn-primary btn-outline rounded-full'>View Details</Link>
        </div>
    );
};

export default GadgetCart;