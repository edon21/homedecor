import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import '../HomeSlider3/style.css'
const HomeSlider3 = () => {
  return (
    <div style={{ outline: "none", userSelect: "none" }}>
       
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <section>
            <div className="relative">
              {/* Background image */}
              <img
                src="https://i.etsystatic.com/52808087/r/il/90d341/6141995210/il_1588xN.6141995210_36cx.jpg"
                alt="Banner slide"
                className="w-full h-[70vh] md:h-[70vh] object-cover object-center"
                loading="lazy"
              />

              {/* Black tint overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="HeadingNameS3 text-3.5xl sm:text-4xl md:text-5xl font-normal mb-10">
                  New Arrival
                </h1>

                <h3 className="HeadingNameS3_1 sm:text-lg md:text-xl  mb-6">
                  Experience Timeless Beauty with Our Latest Collection of Luxurious Mirrors
                </h3>

                <Link to='/new'>
                  <button className="HeadingNameS3_2 px-6 py-2 text-base sm:text-lg md:text-xl bg-[#dad9d4] text-black rounded-2xl hover:bg-[#c5c4c0] transition">
                    Shop New
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    
    </div>
  )
}

export default HomeSlider3
