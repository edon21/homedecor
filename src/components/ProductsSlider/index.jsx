import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import '../ProductsSlider/style.css'

import { Navigation } from 'swiper/modules';

import ProductItem from '../ProductItem';

const ProductsSlider = (props) => {
  return (
    <div className='container'>
      <div className='productSlider'>
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

export default ProductsSlider
