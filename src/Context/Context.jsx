"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [add, setA] = useState([])
    const [wish, setW] = useState([])
    const [tab, setTab] = useState('cart')

    return (
        <Data.Provider value={{add,setA,wish,setW,tab,setTab}}>
            {children}
        </Data.Provider>
    );
};

export default Context;