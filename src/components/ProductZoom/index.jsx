import { Section } from 'lucide-react';
import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import Rating from '@mui/material/Rating';
import QtyBox from '../QtyBox';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
const ProductZoom = () => {
  return (
    <div>
      <>
        <section className="zoomContainer py-10 overflow-hidden text-center ">
          <div className=" pr-30 pl-30 flex gap-10 items-start ">
            {/* Left side - Product Zoom */}
            <div className="w-[60%]">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://theartment.com/cdn/shop/files/vista-frame-floor-mirror-110712.jpg?v=1745094412&width=1800"
                }
              />
            </div>

            {/* Right side - Product Content */}
            <div className="productContent w-1/2 text-left">
              <h1 className="text-[25px] font-bold">Mirror For Everyone</h1>
              <div className="flex items-center gap-2">
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <span className="text-[13px] cursor-pointer text-[#4e4e4e]">Review (5)</span>

              </div>

              <div className="flex flex-col gap-1 mt-6">
                <h1 className="font-medium text-[17px]">Price</h1>
                <div className="flex gap-4">
                  <span className="oldPrice !font-sans line-through text-gray-500 text-[26px] font-[250]">
                    Rs. 70.00
                  </span>
                  <span className="Price !font-sans text-red-600 text-[26px] font-[250]">
                    Rs. 58.00
                  </span>
                </div>
              </div>
              <p className='text-[12px] mt-4 mb-2'>Free Shipping (Est. Delivery Time 4-5 Days)</p>

              <div className='flex items-center mt-2 gap-4'>
                <div className='qtyBoxWrapper w-[70px]'>
                  <QtyBox />
                </div>

                <Button className='btn-org flex gap-2'><HiOutlineShoppingBag className='text-[18px]' />Add to Cart</Button>

              </div>


              <div className='flex items-center gap-4 mt-4'>
                <span className='flex items-center gap-2 text-[11px] link cursor-pointer font-[500]
                '> < FaRegHeart className='text-[17px]' />Add to Wishlist</span>
              </div>

              <div className='text-left mt-4'>
                <Button className='btn-org w-[60%] items-center'>Buy it Now</Button>
              </div>

              <div class="product-single__description rte text-[12px] mt-4">
                <p class="" data-mce-fragment="1">This dried flower arrangement really is a show stopper! combined with our bestseller body vase&nbsp;vase, creates the most celestial beauty one has ever seen!</p>
                <p><strong>Styling tip:</strong> Place them all in one vase to create a beautiful and full arrangement or place them in separate vases as minimalistic centerpieces. Cut each stem to the desired length and arrange them to your liking.</p>
                <p><strong>MADE IN INDIA</strong></p>
                <p><strong>Approximate length</strong>: 23”-25”</p>
                <p class="" data-mce-fragment="1">they lasts upto 4-5 years&nbsp;<span data-mce-fragment="1">(if you keep them away from direct sunlight and high humidity).</span></p>
                <p class="" data-mce-fragment="1"><span>Each bouquet is made-to-order therefore slight variances in color, shape and fluffiness may occur.hahahahah</span></p>
                <p>&nbsp;</p>
                <p class="" data-mce-fragment="1"><span data-mce-fragment="1">**Non exchangeable/returnable product.**</span></p>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  )
}

export default ProductZoom
