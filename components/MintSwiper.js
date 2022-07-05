import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import iphone from '../assets/images/iphone.png';

function MintSwiper() {
  return (
    <div className="text-center">
      <h1 className="font-Poppins mt-4 text-2xl font-semibold text-slate-50 text-center lg:text-3xl  ">
        What will you find?
      </h1>
      <div className="container2">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,

            slideShadows: false,
          }}
          navigation={true}
          loop={true}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="bg-white rounded-3xl">
              <div>
                <video autoPlay muted loop className="w-full rounded-t-xl">
                  <source src="/video/metasilver.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="text-black px-3 py-5">
                <h1 className="font-Poppins font-bold text-2xl ">
                  Silver Edition
                </h1>
                <p>300 Items</p>
                <div className="h-[40px] mt-4 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-3xl">
              <div>
                <video autoPlay muted loop className="w-full rounded-t-xl">
                  <source src="/video/metabronze.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="text-black px-3 py-5">
                <h1 className="font-Poppins font-bold text-2xl ">
                  Bronze Edition
                </h1>
                <p>300 Items</p>
                <div className="h-[40px] mt-4 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-3xl">
              <div>
                <video autoPlay muted loop className="w-ful rounded-t-xl">
                  <source src="/video/metagold.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="text-black px-3 py-5">
                <h1 className="font-Poppins font-bold text-2xl ">
                  Gold Edition
                </h1>
                <p>50 Items</p>
                <div className="h-[40px] mt-4 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-3xl">
              <div>
                <video autoPlay muted loop className="w-ful rounded-t-xl">
                  <source src="/video/metawhite.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="text-black px-3 py-5">
                <h1 className="font-Poppins font-bold text-2xl ">
                  White Edition
                </h1>
                <p>900 Items</p>
                <div className="h-[40px] mt-4 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-3xl">
              <div>
                <video autoPlay muted loop className="w-ful rounded-t-xl">
                  <source src="/video/metaviaolet.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="text-black px-3 py-5">
                <h1 className="font-Poppins font-bold text-2xl ">
                  Special Edition{' '}
                </h1>
                <p>100 Items</p>
                <div className="h-[40px] mt-4 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MintSwiper;
