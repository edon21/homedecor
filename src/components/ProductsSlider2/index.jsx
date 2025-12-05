import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import '../ProductsSlider2/style.css'

import { Navigation } from 'swiper/modules';

import ProductItem from '../ProductItem2';

const ProductsSlider2 = (props) => {
  return (
    <div className='container' style={{ outline: "none", userSelect: "none" }}>
      <div className='productSlider2' style={{ outline: "none", userSelect: "none" }}>
         <Swiper 
             slidesPerView={props.items}
             spaceBetween={10}
             navigation={true}
             modules={[Navigation]}
             className="mySwiper">
          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  

          <SwiperSlide>
            <ProductItem/>  
          </SwiperSlide>  
          
          </Swiper>
      </div>
    </div>
  )
}

export default ProductsSlider2
