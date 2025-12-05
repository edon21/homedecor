import React from 'react'
import "../ProductItem/style.css"
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
const ProductItemListview = () => {
  return (
    <div className='productItem shadow-2xs rounded-md overflow-hidden mb-7 flex items-center'>
      <div className=' group imgWrapper w-[25%]   overflow-hidden rounded-md relative'>
        <Link>
        <img src='https://cdn.sandersondesigngroup.com/processed-images/products/large/CNBABE.jpg'
        className='w-full '/>

         <img src='https://www.color-hex.com/palettes/7621.png'
        className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100
        group-hover:scale-1050'
        
        />
        </Link>
        <span className='discount flex item-center absolute top-[10px] left-[10px] z-50 bg-[#dad9d4] text-black rounded-lg p-1 text-[12px] font-[500]'>20%</span>
        <div className='actions absolute top-[-200px] right-[15px] z-[50] flex item-center gap-2 flex-col w-[25px]
        transition-all duration-100 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>
            <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white
            text-black hover:!bg-[#dad9d4] hover:text-white group'>
              <MdZoomOutMap className='text-[18px] !text-[black] group-hover:text-white hover:!text-white'/>
              </Button>

              <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white
            text-black hover:!bg-[#dad9d4] hover:text-white group'>
              <FaRegHeart  className='text-[18px] !text-[black] group-hover:text-white hover:!text-white'/>
              </Button>

             
        </div>

        </div>

        <div className='info p-3 py-8 px-8'>
            <h6 className='text-[15px]'>
                <Link to="/product" className='link transition-all'>
                Product Name
                </Link>
            </h6>
            <h3 className='text-[18px] title mt-3 mb-3 font-[500]  text-[rgba(0,0,0,0.9)]'>
                <Link to="/product" className='link transition-all'>
                This is the Description of the product 
                </Link>
            </h3>

            <p className='!text-[12px] mb-3'>Available in multiple sizes, this mirror adapts effortlessly to your needs — whether you’re looking for a bold statement piece for your living room wall or a functional, compact design for your entryway.</p>

            <Rating name="size-small" defaultValue={4} size="small" readOnly />
            <div className='Pricing flex item-center gap-4'>
              <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>Rs.870</span>
              <span className='Price text-[red] text-[15px] font-[600]'>Rs.590</span>
            </div>

           <Button className='btn-org !mt-4'>Add to cart</Button>
        </div>
    </div>
  )
}

export default ProductItemListview
