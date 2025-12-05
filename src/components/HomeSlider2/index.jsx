import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import '../HomeSlider2/style.css'
const HomeSlider2 = () => {
  return (
    <div style={{ outline: "none", userSelect: "none" }}>
       <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <section>
            <div className="relative">
              {/* Background image */}
              <img
                src="https://uberdecor.in/cdn/shop/files/il_fullxfull.5708985269_3czw.jpg?crop=center&height=1280&v=1757498660&width=1280"
                alt="Banner slide"
                className="w-full h-[70vh] md:h-[70vh] object-cover object-center"
                loading="lazy"
              />

              {/* Black tint overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="HeadingNameS2 text-3.5xl sm:text-4xl md:text-5xl font-normal mb-10">
                  New In
                </h1>

                <h3 className="HeadingNameS2_1 sm:text-lg md:text-xl  mb-6">
                  The mirrors everyone’s talking about.
                </h3>

                <Link to="/new">
                  <button className="HeadingNameS2_2 px-6 py-2 text-base sm:text-lg md:text-xl bg-[#dad9d4] text-black rounded-2xl hover:bg-[#c5c4c0] transition">
                    Shop New
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}

export default HomeSlider2
