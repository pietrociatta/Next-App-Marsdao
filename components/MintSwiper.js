import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import iphone from '../assets/images/iphone.png';

function MintSwiper({ videos }) {
  const [allVideos, setallVideos] = useState([]);

  useEffect(() => {
    setallVideos(videos);
  }, [videos]);

  return (
    <div className="text-center">
      <h1 className="font-Poppins mt-4 text-2xl font-semibold text-slate-50 text-center lg:text-3xl  ">
        What will you find?
      </h1>
      <div className="container2">
        {videos ? (
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
            {videos?.map((video, index) => (
              <div key={index}>
                <SwiperSlide>
                  <div className="bg-white rounded-3xl">
                    <div>
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full rounded-t-xl"
                      >
                        <source src={video} type="video/mp4" />
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
              </div>
            ))}
          </Swiper>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default MintSwiper;
