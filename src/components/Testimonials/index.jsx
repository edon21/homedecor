import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import '../Testimonials/style.css';
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannnerBox';
import { Link } from 'react-router-dom';


const Testimonials = (props) => {
    return (

        <div className='container py-8 w-full'>

            <div>
                <h2 className='heading_grid_1T text-[40px] font-[600] text-center mb-10'>Testimonials</h2>

            </div>
            <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                <div>
                     <SwiperSlide>
                        <BannerBox img={"https://cdn.sandersondesigngroup.com/processed-images/products/large/CNBABE.jpg"} link={'/'} />
                        <div className='celebs'>
                            <h6 className='text-[21px] text-center mt-4'>
                                <div >
                                    User Id
                                </div>
                            </h6>

                            <h3 className='text-[14px] title mt-2 font-[500] mb-1 text-center text-[rgba(0,0,0,0.9)]'>
                                <div>
                                    Product Description by the witness
                                </div>
                            </h3>
                        </div>


                    </SwiperSlide>

                     <SwiperSlide>
                        <BannerBox img={"https://cdn.sandersondesigngroup.com/processed-images/products/large/CNBABE.jpg"} link={'/'} />
                        <div className='celebs'>
                            <h6 className='text-[21px] text-center mt-4'>
                                <div >
                                    User Id
                                </div>
                            </h6>

                            <h3 className='text-[14px] title mt-2 font-[500] mb-1 text-center text-[rgba(0,0,0,0.9)]'>
                                <div>
                                    Product Description by the witness
                                </div>
                            </h3>
                        </div>


                    </SwiperSlide>

                     <SwiperSlide>
                        <BannerBox img={"https://cdn.sandersondesigngroup.com/processed-images/products/large/CNBABE.jpg"} link={'/'} />
                        <div className='celebs'>
                            <h6 className='text-[21px] text-center mt-4'>
                                <div >
                                    User Id
                                </div>
                            </h6>

                            <h3 className='text-[14px] title mt-2 font-[500] mb-1 text-center text-[rgba(0,0,0,0.9)]'>
                                <div>
                                    Product Description by the witness
                                </div>
                            </h3>
                        </div>


                    </SwiperSlide>
                </div>
               





            </Swiper>
        </div>
    )
}

export default Testimonials
