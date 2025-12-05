import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import '../HomeGridSlider/style.css';
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannnerBox';


const HomeGridSlider = (props) => {
  return (
   
    <div className='container py-8 w-full'>

      <div>
      <h2 className='heading_grid_1 text-[40px] font-[600] text-center'>Shop by Category</h2>
       <p className='heading_grid_2 text-[14px] font-[400] text-center mb-10'> 
        Explore Our Wide Range of Mirror Collections for Every Space</p>
 
      </div>
    <Swiper 
     slidesPerView={props.items}
     spaceBetween={10}
     navigation={true}
     modules={[Navigation]}
     className="mySwiper">
         <SwiperSlide>
         <BannerBox img={"https://cdn.sandersondesigngroup.com/processed-images/products/large/CNBABE.jpg"} link={'/'}/>
         </SwiperSlide> 

           <SwiperSlide>
         <BannerBox img={"https://cdn.sandersondesigngroup.com/processed-images/products/large/CNBABE.jpg"} link={'/'}/>
         </SwiperSlide> 

          <SwiperSlide>
         <BannerBox img={"https://cdn.sandersondesigngroup.com/processed-images/products/large/CNBABE.jpg"} link={'/'}/>
         </SwiperSlide> 
      

         
         
         
     </Swiper>
    </div>
  )
}

export default HomeGridSlider
