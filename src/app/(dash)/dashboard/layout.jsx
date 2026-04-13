"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const layout = ({children}) => {
    const p = usePathname()
    return (
        <div className='flex gap-4'>
            <div className='flex flex-col w-50 p-3 bg-base-100 h-screen'>
                <Link href={'/dashboard'} className={p === "/dashboard" ? "btn btn-info btn-outline" : "btn"}>Chart</Link>
                <Link href={'/dashboard/profile'} className={p === "/dashboard/profile" ? "btn btn-info btn-outline" : "btn"}>Profile</Link>
                <Link href={'/dashboard/dash'} className={p === "/dashboard/dash" ? "btn btn-info btn-outline" : "btn"}>Dash</Link>
                <Link href={'/'} className="btn btn-info">Home</Link>
            </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default layout;