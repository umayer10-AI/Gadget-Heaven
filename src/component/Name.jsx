"use client"
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';

const Name = () => {
    const {tab,add,wish} = useContext(Data)
    return (
        <div>
            <h2 className='text-2xl font-bold'>{tab ==="cart" ? "Cart" : 'Wish'}({tab === "cart" ? add.length : wish.length})</h2>
        </div>
    );
};

export default Name;