import  {  useEffect, useState } from 'react';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slider.css'


import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


import Slide from './Slide';


const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/crafts') // Replace 'path/to/sliderData.json' with the actual path to your JSON file
      .then(response => response.json())
      .then(data => {
        setSliderData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);







  return (
    <>
       <div className=' mt-4 '>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
      
        >
           
       {
        sliderData.map((data,idx)=><SwiperSlide key={idx}>
          <Slide
        data={data}
        ></Slide>
        </SwiperSlide>)
       }
     
        </Swiper>
       
       </div>
    </>
  );
};

export default Slider;
