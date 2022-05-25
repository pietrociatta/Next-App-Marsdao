import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import "./CollectionSwiper.module.css";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Gallery1 from "../assets/images/card1.png";

function CollectionSwiper() {
  return (
    <div className="mx-2 py-10">
      <h1 className="font-Poppins text-3xl font-semibold text-black text-center  lg:text-4xl  ">
        Trending
      </h1>
      <p className="font-Poppins text-base font-normal text-black opacity-70 mb-5  mt-2 text-center  lg:text-xl lg:mt-2">
        Latest collection available.
      </p>
      <div className="container1 ">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper1"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          loop={true}
          slidesPerGroup={1}
          navigation={true}
          loopFillGroupWithBlank={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
        >
          <SwiperSlide>
            <div className="m-4  bg-gradient-to-r from-cyan-500 to-blue-500  rounded-xl h-[700px] flex flex-col justify-between  ">
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl ">
                  Collection 1
                </h1>{" "}
                <p>This collection of Rolex</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="m-4  bg-gradient-to-r from-red-600 to-red-800 rounded-xl h-[700px] flex flex-col justify-between  ">
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl ">
                  Collection 1
                </h1>{" "}
                <p>This collection of Rolex</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="m-4  bg-gradient-to-r from-green-300 to-green-500  rounded-xl h-[700px] flex flex-col justify-between  ">
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl ">
                  Collection 1
                </h1>{" "}
                <p>This collection of Rolex</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="m-4  bg-gradient-to-r from-yellow-200 to-yellow-500  rounded-xl h-[700px] flex flex-col justify-between  ">
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl ">
                  Collection 1
                </h1>{" "}
                <p>This collection of Rolex</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="m-4  bg-gradient-to-r from-orange-200 to-orange-500  rounded-xl h-[700px] flex flex-col justify-between  ">
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl ">
                  Collection 1
                </h1>{" "}
                <p>This collection of Rolex</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="m-4  bg-gradient-to-r from-gray-200 to-gray-500  rounded-xl h-[700px] flex flex-col justify-between  ">
              <div className="justify-end flex p-5">
                <h1 className="bg-black bg-opacity-50 py-1 px-3 text-sm rounded-xl border-2 border-white text-white">
                  LIVE
                </h1>
              </div>
              <div className="p-5 text-white">
                <h1 className="font-Poppins font-bold text-2xl ">
                  Collection 1
                </h1>{" "}
                <p>This collection of Rolex</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CollectionSwiper;
