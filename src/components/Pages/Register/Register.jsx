//import React from 'react';

import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import useAuthHook from "../../../Hook/useAuthHook";

const Register = () => {
    const [show,setShow]=useState(false)
    const info=useAuthHook();
    const {createUSer}=info;

        const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const registration={name, photo, email, password}
        
        if(password.length<6){
          console.log("Password Must Be 6 character");
          return;

      }
      else if(!/[A-Z]/.test(password)){
          console.log("At leat One UpperCase needed");
        return;
      }
      else if(!/[a-z]/.test(password)){
          console.log("At leat One LowerCase needed");
          return;
      }

      createUSer(email,password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        //==New User SuccessFully Created
        fetch('http://localhost:5000/users',{
          method:'POST',
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
    



        e.currentTarget.reset();

    }

  return (
    <div>
      <div className=" min-h-screen flex flex-col justify-center items-center m-5">
        <div className="w-full md:w-1/2 border-2 border-blue-500 rounded-xl p-5">
          <h2 className="text-3xl my-10 text-center font-bold">Sign Up Now</h2>
          <form
            onSubmit={handleRegister}
            className=" md:w-3/4 lg:w-1/2 mx-auto"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
               
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                required
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex flex-row items-center">
                <input
                  type={show ? "text" : "password"}
                  required
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
                <span onClick={() => setShow(!show)} className="-ml-10">
                  {show ? (
                    <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
                  ) : (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  )}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-blue-600 font-bold" to="/signin">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
