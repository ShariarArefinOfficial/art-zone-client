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
    fetch("https://shariar-craft.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data.filter((item) => item.email === user.email));
      })
      .catch((error) => setError(error.message)); // Handle fetch error
  }, [user.email]);

  const handleItemDeletion = (deletedItemId) => {
    fetch(`https://shariar-craft.vercel.app/craft/${deletedItemId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedItem) => {
        // Update state after deletion
        setFilteredData((prevData) =>
          prevData.filter((item) => item._id !== deletedItemId)
        );
      })
      .catch((error) => setError(error.message)); // Handle deletion error
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleSort = (str) => {
    let sortedData;
    if (str === 'yes') {
      sortedData = [...filteredData].sort((a, b) => {
        // Sort by the 'customization' field in ascending order
        const first=a.customization.toLowerCase();
        const second=b.customization.toLowerCase();

        //console.log(a.customization,b.customization)
        return first.localeCompare(second);
      });
    } else if (str === 'no') {
      sortedData = [...filteredData].sort((a, b) => {
        const first=a.customization.toLowerCase();
        const second=b.customization.toLowerCase();
        // Sort by the 'customization' field in descending order
        return second.localeCompare(first);

    });
    } else {
      // Default sorting logic if str is not 'yes' or 'no'
      sortedData = filteredData;
    }
    setFilteredData(sortedData);
  };
  

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <details className="dropdown">
          <summary className="m-1 btn">Sort By Customization</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={()=>handleSort('yes')}>Yes</button>
            </li>
            <li>
            <button onClick={()=>handleSort('no')}>No</button>
            </li>
          </ul>
        </details>
      </div>
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
