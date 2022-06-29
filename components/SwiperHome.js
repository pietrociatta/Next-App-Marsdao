import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper';
import { Navigation } from 'swiper';

function SwiperHome() {
  const box1 =
    'm-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl h-[700px] flex flex-col justify-between';

  return (
    <div className="">
      <div className="container1">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper1"
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          //   loop={true}
          slidesPerGroup={1}
          navigation={true}
          loopFillGroupWithBlank={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
        >
          <SwiperSlide>
            <div id="1" className={box1}>
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl">
                  Collection 1
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl">
                  Collection 1
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl">
                  Collection 1
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl">
                  Collection 1
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl">
                  Collection 1
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl">
                  Collection 1
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl">
                  Collection 1
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperHome;
