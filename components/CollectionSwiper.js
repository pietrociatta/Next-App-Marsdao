import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperHome from './SwiperHome';

function CollectionSwiper() {
  const box1 =
    'm-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl h-[700px] flex flex-col justify-between';

  const box2 =
    'm-4 bg-gradient-to-r from-red-500 to-red-500 rounded-xl h-[700px] flex flex-col justify-between';

  return (
    <div className="mx-2 py-10">
      <h1 className="font-Poppins text-3xl font-semibold text-slate-50 text-center  lg:text-4xl  ">
        Trending
      </h1>
      <h1 className="font-Poppins text-base font-normal text-slate-50 opacity-70 mb-5  mt-2 text-center  lg:text-xl lg:mt-2">
        Latest collection available.
      </h1>
      <div>
        <SwiperHome />
      </div>
    </div>
  );
}

export default CollectionSwiper;
