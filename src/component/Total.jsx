"use client"
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';

const Total = () => {

    const {add,wish,tab} = useContext(Data)
    const cartTotal = add.reduce((x,y) => x + y.price,0)
    const wishTotal = wish.reduce((x,y) => x + y.price,0)

    return (
        <div>
            <h2 className='font-bold text-2xl'>Total cost: ${tab ==="cart" ? cartTotal : wishTotal}</h2>
        </div>
    );
};

export default Total;