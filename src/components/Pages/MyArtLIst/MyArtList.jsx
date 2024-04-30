// //import React from 'react';

// import { useEffect, useState } from "react";
// import useAuthHook from "../../../Hook/useAuthHook";
// import TableRow from "./TableRow";

// //import { useLoaderData } from "react-router-dom";

// const MyArtList = () => {
//     const {user}=useAuthHook();
//     const [data,setData]=useState([]);
   
   
//     useEffect(()=>{
//         fetch('http://localhost:5000/crafts')
//         .then(res=>res.json())
//         .then(data=>setData(data))
//     },[])
//     console.log(data)
//    // const filter=data.filter(item=>item.email===user.email);
//    // setUserAddedData(filter)
//    const [filteredData, setFilteredData] = useState([]);
//    useEffect(() => {
//     // Apply filtering logic
//     const filtered = data.filter(item => item.email === user.email);
//     // Update state variable with filtered data
//     setFilteredData(filtered);
//   }, [data, user.email]); 
//   console.log(filteredData)
   
//     return (
//         <div className="container mx-auto">
//             <div className="overflow-x-auto">
//   <table className="table">
//     <thead>
//       <tr>
//         <th></th>
//         <th>Images</th>
//         <th>Item Info</th>
//         <th>Update</th>
//         <th>Delete</th>
//       </tr>
//     </thead>
//     <tbody>
      
//         {filteredData.map((data,idx)=><TableRow
//         key={data._id}
//         idx={idx+1}
//         data={data}
//         setFilteredData={ setFilteredData}

//         ></TableRow>)}
     
      
   
      
     
//     </tbody>
//   </table>
// </div>
//         </div>
//     );
// };

// export default MyArtList;

import { useEffect, useState } from "react";
import useAuthHook from "../../../Hook/useAuthHook";
import TableRow from "./TableRow";

const MyArtList = () => {
    const { user } = useAuthHook();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/crafts')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setFilteredData(data.filter(item => item.email === user.email));
            })
            .catch(error => setError(error.message)); // Handle fetch error
    }, [user.email]);

    const handleItemDeletion = (deletedItemId) => {
        fetch(`http://localhost:5000/craft/${deletedItemId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(deletedItem => {
            // Update state after deletion
            setFilteredData(prevData => prevData.filter(item => item._id !== deletedItemId));
        })
        .catch(error => setError(error.message)); // Handle deletion error
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Images</th>
                            <th>Item Info</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, idx) => (
                            <TableRow
                                key={item._id}
                                idx={idx + 1}
                                data={item}
                                handleItemDeletion={handleItemDeletion}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyArtList;
