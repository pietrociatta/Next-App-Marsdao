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
    'm-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl h-[370px] ';

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
              <video autoPlay muted loop className="w-full rounded-t-xl">
                <source src="/video/bitcoin.mp4" type="video/mp4" />
              </video>
              <div className="bg-base-100 p-4 space-y-2  rounded-b-xl ">
                <h1 className="text-xl font-Poppins font-semibold text-slate-50 text-center">
                  TRY TO WIN BITCOIN
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-t-xl"
              >
                <source src="/video/metaviaolet.mp4" type="video/mp4" />
              </video>
              <div className="bg-base-100 p-4 space-y-2  rounded-b-xl ">
                <h1 className="text-xl font-Poppins font-semibold text-slate-50 text-center">
                  TRY TO WIN LAND TOKEN
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-t-xl"
              >
                <source src="/video/iphoneviolet.mp4" type="video/mp4" />
              </video>
              <div className="bg-base-100 p-4 space-y-2  rounded-b-xl ">
                <h1 className="text-xl font-Poppins font-semibold text-slate-50 text-center">
                  TRY TO WIN IPHONE 13
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-t-xl"
              >
                <source src="/video/iphoneviolet.mp4" type="video/mp4" />
              </video>
              <div className="bg-base-100 p-4 space-y-2  rounded-b-xl ">
                <h1 className="text-xl font-Poppins font-semibold text-slate-50 text-center">
                  TRY TO WIN IPHONE
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-t-xl"
              >
                <source src="/video/iphone.mp4" type="video/mp4" />
              </video>
              <div className="bg-base-100 p-4 space-y-2  rounded-b-xl ">
                <h1 className="text-xl font-Poppins font-semibold text-slate-50 text-center">
                  Try to win the latest Iphone 13 Pro
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-t-xl"
              >
                <source src="/video/iphone.mp4" type="video/mp4" />
              </video>
              <div className="bg-base-100 p-4 space-y-2  rounded-b-xl ">
                <h1 className="text-xl font-Poppins font-semibold text-slate-50 text-center">
                  Try to win the latest Iphone 13 Pro
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="1" className={box1}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-t-xl"
              >
                <source src="/video/iphone.mp4" type="video/mp4" />
              </video>
              <div className="bg-base-100 p-4 space-y-2  rounded-b-xl ">
                <h1 className="text-xl font-Poppins font-semibold text-slate-50 text-center">
                  Try to win the latest Iphone 13 Pro
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
