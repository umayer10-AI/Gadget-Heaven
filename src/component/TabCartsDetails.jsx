import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Delete from "./Delete";

const TabCartsDetails = ({p}) => {
  return (
    <div className="flex justify-between items-center border rounded-2xl bg-gray-900 p-4">
      <div className="flex gap-5 items-center">
        <div>
          <Image
            height={100}
            width={100}
            className="rounded-2xl h-20 w-30 object-cover"
            src={p.product_image}
            alt="logo"
          ></Image>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-bold">{p.product_title}</h2>
          <h2 className="text-gray-400 font-semibold line-clamp-1">
            {p.description}
          </h2>
          <h2 className="text-xl font-bold">Price: ${p.price}</h2>
        </div>
      </div>
      <Delete p={p}></Delete>
    </div>
  );
};

export default TabCartsDetails;
