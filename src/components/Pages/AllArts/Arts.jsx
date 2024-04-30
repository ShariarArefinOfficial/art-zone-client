//import React from 'react';

import { Link } from "react-router-dom";

const Arts = ({pro}) => {
    const {name,photo,description,price,_id}=pro;
    return (
        <div className="mr-0 md:mr-5">
            <div className=" p-4 bg-white border-2  w-96  image-full rounded-xl animate__animated  animate__fadeInUp">
        <figure >
          <img
           src={photo} 
           alt={name}
           className="w-full h-[250px] rounded-xl"
           />
        </figure>
        <div className="bg-blue-500  p-4 rounded-xl mt-5  w-full ">
            <h3 className="text-center font-bold text-2xl">{name}</h3>
            <p className="text-center font-semibold text-xl">{description}</p>
            <p className="text-center font-semibold text-xl text-white">Price : {price}</p>

        </div>
        <div className="flex justify-center items-center mt-3">
          <Link to={`/craft/${_id}`}>
          <button className="bg-[#666] text-white font-medium p-4 rounded-xl ">View Details</button>
          </Link>
        </div>
         
      </div>
        </div>
    );
};

export default Arts;