//import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableRow = ({data,idx, setFilteredData}) => {
    const{photo,customization,stock,name,price,rating,_id}=data;
    const craft=data;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/craft/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = craft.filter(craf => craf._id !== _id);
                        setFilteredData(remaining);
                    })

            }
        })
    }
    return (
        <tr>
           
        <th>{idx}</th>
        <td >
            <img src={photo} alt="" className="w-[50px] h-[50px]" />
        </td>
        <td>
            <div>
                <p><span className="font-semibold">name:</span>{name}</p>
                <p><span className="font-semibold">Price:</span>{price}</p>
                <p><span className="font-semibold">Rating:</span>{rating}</p>
                <p><span className="font-semibold">Customization:</span>{customization}</p>
                <p><span className="font-semibold">Stock Status:</span>{stock}</p>
            </div>
        </td>
       
        <td>
            <Link to={`/updateCraft/${_id}`}>
            <button className="btn btn-primary">Update</button>
            </Link>
        </td>
        <td>
            <button  onClick={() => handleDelete(_id)} className="btn btn-ghost">Delete</button>
        </td>
       
        </tr>
    );
};

export default TableRow;