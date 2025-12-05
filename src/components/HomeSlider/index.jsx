import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../HomeSlider/style.css';
import { Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <section>
            <div className="relative">
              {/* Background image */}
              <img
                src="https://www.housedigest.com/img/gallery/one-simple-change-will-open-up-space-in-your-studio-apartment/studio-layout-mistakes-to-avoid-if-you-want-real-space-gains-1749044106.webp"
                alt="Banner slide"
                className="w-full h-[70vh] md:h-[70vh] object-cover object-center"
                loading="lazy"
              />

              {/* Black tint overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="HeadingName text-3.5xl sm:text-4xl md:text-5xl font-normal mb-10">
                  Elevate Your Living Space
                </h1>

                <h3 className="HeadingName_1 sm:text-lg md:text-xl  mb-6">
                  Flat 20% Off on everything
                </h3>

                <Link to="/sale">
                  <button className="HeadingName_2 px-6 py-2 text-base sm:text-lg md:text-xl bg-[#dad9d4] text-black rounded-2xl hover:bg-[#c5c4c0] transition">
                    Shop Sale
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomeSlider