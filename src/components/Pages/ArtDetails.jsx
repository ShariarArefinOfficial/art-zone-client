//import React from 'react';

import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { useLoaderData, useParams } from "react-router-dom";
//import Card from "./Card";

const ArtDetails = () => {
    const craftDetails=useLoaderData()
    console.log(craftDetails)
   
    const id =useParams()
    console.log(id)
    const currentdetails=craftDetails.find((data) => data._id == id.id);
    const {name,photo,price,description}=currentdetails
    // useEffect(()=>{
    //     fetch('http://localhost:5000/crafts')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    // const filter=data.find((item) => item._id == id);
    // console.log(filter)
    return (
        <div>
 <div className="flex flex-col md:flex-row justify-center items-start gap-5 mb-10">
               <div className="p-5 flex-1">
                 <img src={photo} className="w-96 mx-auto" />
               </div>
               <div className="flex-1 p-5 border-2 rounded-xl space-y-5">
             <p className=" text-center text-2xl text-[#666]"><span className="text-black  font-bold">Name:</span>{name}</p>
               <p className=" text-center text-2xl text-[#666]">{description}</p>                         
               <div className="flex flex-col justify-center items-center gap-5 my-3">
               <p className=" text-xl rounded-xl font-medium">price:{price}</p>


             </div>
              

               </div>
             </div>
            
        </div>
    );
};

export default ArtDetails;