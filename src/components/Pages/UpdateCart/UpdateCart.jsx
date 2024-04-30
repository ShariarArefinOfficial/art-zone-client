//import React from 'react';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuthHook from "../../../Hook/useAuthHook";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const UpdateCart = () => {
    const data=useLoaderData();
    const {
        name,
        price,
        rating,      
        description,
        customization,
        time,
        stock,
        photo,
        _id
    }=data;
    const [subCategory, setSubCategory] = useState('');
    const categoryName = "Painting and Drawing";
    const handleSubCategoryChange=e=>{
        setSubCategory(e.target.value);
        //console.log(e.target.value)
      }

      const handleUpdateCraft = (event) => {
        event.preventDefault();
    
        const form = event.target;
    
        const name = form.ItemName.value;
        const category = form.Category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const description = form.description.value;
        const customization=form.customization.value;
        const username=form.username.value;
        const email=form.email.value;
        const stock=form.stock.value;
        const photo = form.photo.value;
    
        const updateCraft = {
          name,
          category,
          subCategory,
          price,
          rating,      
          description,
          customization,
          time,
          username,
          email,
          stock,
          photo
        };
    
       // console.log(newCraft);
    
    
    
        // send data to the server
                // send data to the server
                fetch(`http://localhost:5000/craft/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateCraft)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                          toast.success('updated Successfully');
                        }
                    })
          
    
    
    
    
    
       // form.reset();
      };
  
    console.log(data);
    return (
        <div>
            <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-center mb-5">Update Craft Items</h2>
        <form onSubmit={handleUpdateCraft}>
          {/* form name and category row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Craft Item Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="ItemName"
                  defaultValue={name}
                  placeholder="Craft Item Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-2xl font-bold">Category Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Category"
                  disabled
                  defaultValue={categoryName}
                  placeholder="Category Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form sub category and price row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Sub Category Name</span>
              </label>
              <label className="input-group">
                <input
                  type="radio"
                  name="subCategory"
                  defaultValue={subCategory}
                  value="Landscape Painting"
                  checked={subCategory === "Landscape Painting"}
                  onChange={handleSubCategoryChange}
                />
                Landscape Painting
              </label>
              <label className="input-group">
                <input
                  type="radio"
                  name="subCategory"
                  value="Portrait Drawing"
                  defaultValue={subCategory}

                  checked={subCategory === "Portrait Drawing"}
                  onChange={handleSubCategoryChange}
                />
                Portrait Drawing
              </label>
              <label className="input-group">
                <input
                  type="radio"
                  name="subCategory"
                  value="Watercolour Painting"
                  defaultValue={subCategory}

                  checked={subCategory === "Watercolour Painting"}
                  onChange={handleSubCategoryChange}
                />
                Watercolour Painting
              </label>
              <label className="input-group">
                <input
                  type="radio"
                  name="subCategory"
                  value="Oil Painting"
                  defaultValue={subCategory}

                  checked={subCategory === "Oil Painting"}
                  onChange={handleSubCategoryChange}
                />
                Oil Painting
              </label>
              <label className="input-group">
                <input
                  type="radio"
                  name="subCategory"
                  value="Charcoal Sketching"
                  checked={subCategory === "Charcoal Sketching"}
                  onChange={handleSubCategoryChange}
                />
                Charcoal Sketching
              </label>
              <label className="input-group">
                <input
                  type="radio"
                  name="subCategory"
                  value="Cartoon Drawing"
                  checked={subCategory === "Cartoon Drawing"}
                  onChange={handleSubCategoryChange}
                />
                Cartoon Drawing
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-2xl font-bold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter Your Desired price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form rating and description row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-2xl font-bold">Sort Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
           {/* form customization and time row */}
           <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Customization Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="customization"
                  defaultValue={customization}
                  placeholder="write Yes or No"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-2xl font-bold">processing time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="time"
                  defaultValue={time}
                  placeholder="write Processiong time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form username and details row */}
           <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="username"
                  defaultValue={data.username}
                  disabled
                  placeholder="write Yes or No"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-2xl font-bold">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  defaultValue={data.email}
                  disabled
                  placeholder="write Processiong time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form stock row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-2xl font-bold">Stock status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="stock"
                  defaultValue={stock}
                  placeholder="Write in stock or Made to order"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-2xl font-bold">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update Craft item" className="btn btn-block" />
        </form>
      </div>
      <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateCart;