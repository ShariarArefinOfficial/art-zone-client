//import React from 'react';

import { useLoaderData } from "react-router-dom";
import FeaturedArn from "./FeaturedArt/FeaturedArn";
import Slider from "./Sliders/Slider";
import Catagories from "./Catagories";
import ExploreElegantArts from "./ExploreElegantArts";

//import Slider from "./Slider/Slider";

const Home = () => {
    const data=useLoaderData()
    return (
        <div>
            <Slider></Slider>
            <FeaturedArn data={data}></FeaturedArn>
            <Catagories></Catagories>
            <ExploreElegantArts></ExploreElegantArts>
            <div className="p-10 flex flex-col justify-center items-center space-y-5 border-2 mt-10 rounded-xl">
                <h3 className="font-bold text-blue text-2xl">NewsLetter</h3>
                <input type="text" placeholder="Enter your email address " className="w-full py-2 bg-white rounded-xl"  />
                <button className="btn btn-primary w-1/2">Submit</button>
            </div>
        </div>
    );
};

export default Home;