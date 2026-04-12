"use client"
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

const AddToCartBtn = ({p}) => {

    const {add,setA,wish,setW} = useContext(Data)
    // console.log(add)
    // console.log(wish)

    const addFind = add.find(v => v.id === p.id)
    const wishFind = wish.find(v => v.id === p.id)

    const a = () => {
        if(!addFind && !wishFind){
            setA(c => [...c,p])
        }
    }
    const b = () => {
        if(!addFind && !wishFind){
            setW(c => [...c,p])
        }
    }

    return (
        <div className='flex items-center gap-3'>
            <button onClick={a} className='btn btn-primary rounded-full'>Add To Card <FaCartPlus /></button>
            <h2 onClick={b} className='p-2 border-2 rounded-full'><FaHeart /></h2>
        </div>
    );
};

export default AddToCartBtn;