//import React from 'react';

import { useEffect, useState } from "react";




const Slider = () => {
    // const [sliderData, setSliderData] = useState([]);
    // useEffect(() => {
    //   fetch('http://localhost:5000/crafts') // Replace 'path/to/sliderData.json' with the actual path to your JSON file
    //     .then(response => response.json())
    //     .then(data => {
    //       setSliderData(data);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // }, []);
    return (
        <div >
       <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ytimg.com/vi/2kJVHMAblfk/maxresdefault.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://cdn.britannica.com/60/95760-050-899F8959/River-Landscape-canvas-oil-Adriaen-van-de-1663.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>

            
        </div>
    );
};

export default Slider;