"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

const Navbar = () => {
    const p = usePathname()
    return (
        <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center py-4 px-10'>
            <h2 className='text-2xl font-bold'>Gadget Heaven</h2>
            <div className='flex items-center font-semibold list-none gap-7'>
                <Link href={'/'} className={p=== '/' ? "btn btn-accent btn-outline" : "btn"}>Home</Link>
                <Link href={'/statistic'} className={p=== '/statistic' ? "btn btn-accent btn-outline" : "btn"}>Statistic</Link>
                <Link href={'/dashboard'} className={p=== '/dashboard' ? "btn btn-accent btn-outline" : "btn"}>Dashboard</Link>
                
            </div>
            <div className='flex items-center gap-5'>
                <h2 className='p-2 border-2 rounded-full'><FaCartPlus /></h2>
                <h2 className='p-2 border-2 rounded-full'><FaHeart /></h2>
            </div>
        </div>
    );
};

export default Navbar;