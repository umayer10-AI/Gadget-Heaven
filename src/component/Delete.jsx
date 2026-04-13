import { Data } from '@/Context/Context';
import React, { useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Delete = ({p}) => {

    const {setA,tab,setW} = useContext(Data)

    const a = () => {
        setA(c => c.filter(v => v.id !== p.id))
    }
    const b = () => {
        setW(c => c.filter(v => v.id !== p.id))
    }

    return (
        <div>
            {
                tab === "cart" && <h2 onClick={a} className="text-xl text-red-500 border p-2 rounded-2xl lg:mr-5">
                    <RiDeleteBin6Line />
                </h2>
            }
            {
                tab === "wish" && <h2 onClick={b} className="text-xl text-red-500 border p-2 rounded-2xl lg:mr-5">
                    <RiDeleteBin6Line />
                </h2>
            }
        </div>
    );
};

export default Delete;