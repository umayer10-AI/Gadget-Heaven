'use client'
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';
import TabCartsDetails from './TabCartsDetails';

const TabCart = () => {

    const {add,tab,wish} = useContext(Data)

    return (
        <div className='max-w-[80%] mx-auto'>
            <div className='flex flex-col gap-4'>
                {
                    tab === "cart" && add.map(v => <TabCartsDetails key={v.id} p={v}></TabCartsDetails>)
                }
            </div>
            <div className='flex flex-col gap-4'>
                {
                    tab === "wish" && wish.map(v => <TabCartsDetails key={v.id} p={v}></TabCartsDetails>)
                }
            </div>
        </div>
    );
};

export default TabCart;