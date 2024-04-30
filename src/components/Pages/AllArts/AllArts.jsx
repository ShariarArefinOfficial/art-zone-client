//import React from 'react';

import { useLoaderData } from "react-router-dom";
import Arts from "./Arts";

const AllArts = () => {
    const prop=useLoaderData();
    return (
        <div>
            <div className="flex justify-center items-center">
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    prop.map(pro=><Arts
                    pro={pro}
                    key={pro._id}
                    ></Arts>)
                }
            </div>
            </div>
        </div>
    );
};

export default AllArts;