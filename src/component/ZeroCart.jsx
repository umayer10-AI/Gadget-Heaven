"use client"
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';
import { FaReact } from 'react-icons/fa';

const ZeroCart = () => {

    const {tab} = useContext(Data)
    const name = tab === "cart" ? "Cart" : "Wish"

    return (
        <div className='max-w-[80%] mx-auto text-center space-y-2 border rounded-2xl py-7'>
            <h2 className='flex justify-center text-4xl'><FaReact /></h2>
            <h2 className='text-2xl font-bold'>Do not {name} Available</h2>
            <h2 className='text-gray-400'>Please Choose a {name}</h2>
        </div>
    );
};

export default ZeroCart;