import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Image from "next/image";
import iphone from "../assets/images/iphone.png";
function MintSwiper() {
  return (
    <div className="py-8">
      <div className="container2">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
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
                <Image
                  src={iphone}
                  alt=""
                  className=" rounded-t-3xl "
                  layout="responsive"
                />
              </div>
              <div className="text-black px-3 py-5">
                <h1 className="font-Poppins font-bold text-2xl ">Slide 0</h1>
                <p>This collection of Rolex</p>
                <div className="h-[40px] mt-4 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-3xl">
              <div>
                <Image
                  src={iphone}
                  alt=""
                  className=" rounded-t-3xl "
                  layout="responsive"
                />
              </div>
              <div className="text-black px-3 py-5">
                <h1 className="font-Poppins font-bold text-2xl ">Slide 1</h1>
                <p>This collection of Rolex</p>
                <div className="h-[40px] mt-4 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-3xl">
              <div>
                <Image
                  src={iphone}
                  alt=""
                  className=" rounded-t-3xl "
                  layout="responsive"
                />
              </div>
              <div className="text-black px-3 py-5">
                <h1 className="font-Poppins font-bold text-2xl ">Slide 2</h1>
                <p>This collection of Rolex</p>
                <div className="h-[40px] mt-4 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-3xl">
              <div>
                <Image
                  src={iphone}
                  alt=""
                  className=" rounded-t-3xl "
                  layout="responsive"
                />
              </div>
              <div className="text-black px-3 py-5">
                <h1 className="font-Poppins font-bold text-2xl ">Slide 4</h1>
                <p>This collection of Rolex</p>
                <div className="h-[40px] mt-4 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-3xl">
              <div>
                <Image
                  src={iphone}
                  alt=""
                  className=" rounded-t-3xl "
                  layout="responsive"
                />
              </div>
              <div className="text-black px-3 py-5">
                <h1 className="font-Poppins font-bold text-2xl ">Slide 5</h1>
                <p>This collection of Rolex</p>
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
