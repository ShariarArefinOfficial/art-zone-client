//import React from 'react';

const ExploreElegantArts = () => {
    return (
        <div>
            <div className="bg-[#f8f8f8] p-24 rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 ">
            <div>
                <h1 className="text-3xl font-bold text-black mb-5">EXPLORE ELEGANT ARTS</h1>
                <p className="text-xl text-[#666] mt-5 mb-8">Elegant arts encompass a wide range of disciplines that prioritize beauty, refinement, and sophistication in their expression.</p>
                <button className="py-4 px-5 rounded-xl bg-slate-600 text-white">Explore Now</button>
            </div>
            <div>
            <iframe width="560" className="w-[300px] lg:w-[560px] h-[200px] lg:h-[315px]" height="315" src="https://www.youtube.com/embed/x-XvGWFXQ0I?si=pi9o51FJrTXQav6-" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
            </div>
          </div>  
        </div>
            
        </div>
    );
};

export default ExploreElegantArts;