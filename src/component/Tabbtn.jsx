"use client"
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';

const Tabbtn = () => {

    const {tab,setTab} = useContext(Data)


    return (
        <div className='flex justify-center items-center gap-2'>
            <button onClick={() => setTab("cart")} className={`btn ${tab === 'cart'? "" : "btn-primary btn-outline bg-white"} rounded-full`}>Cart</button>
            <button onClick={() => setTab("wish")} className={`btn ${tab === 'wish'? "" : "btn-primary btn-outline bg-white"} rounded-full`}>Wishlist</button>
        </div>
    );
};

export default Tabbtn;