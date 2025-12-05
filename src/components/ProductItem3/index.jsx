import React from 'react'
import "../ProductItem3/style.css"
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
const productItem3 = () => {
  return (
    <div className='productItem3 shadow-2xs rounded-md overflow-hidden mb-7'>
      <div className=' group imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md relative'>
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

        <div className='info p-3'>
            <h6 className='text-[13px]'>
                <Link to="/" className='link transition-all'>
                Product Name
                </Link>
            </h6>
            <h3 className='text-[14px] title mt-1 font-[500] mb-1 text-[rgba(0,0,0,0.9)]'>
                <Link to="/" className='link transition-all'>
                This is the Description of the product 
                </Link>
            </h3>

            <Rating name="size-small" defaultValue={4} size="small" readOnly />
            <div className='Pricing flex item-center gap-4'>
              <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>Rs.870</span>
              <span className='Price text-[red] text-[15px] font-[600]'>Rs.590</span>
            </div>
        </div>
    </div>
  )
}

export default productItem3
