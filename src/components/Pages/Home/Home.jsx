//import React from 'react';

import { useLoaderData } from "react-router-dom";
import FeaturedArn from "./FeaturedArt/FeaturedArn";
import Slider from "./Sliders/Slider";

//import Slider from "./Slider/Slider";

const Home = () => {
    const data=useLoaderData()
    return (
        <div>
            <Slider></Slider>
            <FeaturedArn data={data}></FeaturedArn>
        </div>
    );
};

export default Home;