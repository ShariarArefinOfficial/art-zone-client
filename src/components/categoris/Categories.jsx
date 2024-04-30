//import React from 'react';
//import React from 'react';

import Arts from "./Arts";


const Categories = ({prop}) => {
    return (
        <div>
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
        </div>
    );
};

export default Categories;