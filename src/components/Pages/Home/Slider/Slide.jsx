// import './slider.css'
// import 'animate.css';
// const Slide = ({ data }) => {
//   const { name,photo } = data;

//   return (
//     <div style={{ backgroundImage: `url(${photo})` }} className="w-full h-screen rounded-xl opacity-100 shadow-xl z-0 bg-cover bg-no-repeat  ">
//       <div className="p-10  flex flex-col justify-center item-center h-full" >
//         <h3 className="font-black text-[#1c1c1c] text-3xl md:text-[60px] mt-4 text-center animate__animated  animate__fadeInDown" data-swiper-parallax="-300">
//           {name}
//         </h3>

        
        
//       </div>
//     </div>
//   );
// };

// export default Slide;
import React from 'react';

const Slide = ({ data }) => {
  if (!data || !data.photo || !data.name) {
    // Handle missing or invalid data
    return null;
  }

  const { name, photo } = data;
  const data={
    backgroundImage: `url(${photo})`,
  }

  return (
    <div
      className="w-full h-screen rounded-xl opacity-100 shadow-xl z-0 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className="p-10 flex flex-col justify-center items-center h-full">
        <h3 className="font-black text-[#1c1c1c] text-3xl md:text-[60px] mt-4 text-center animate__animated animate__fadeInDown" data-swiper-parallax="-300">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default Slide;

