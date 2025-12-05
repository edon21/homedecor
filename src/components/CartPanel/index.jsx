
import Button from '@mui/material/Button'
import { useState } from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CartPanel = () => {
  const [openCartPanel, setOpenCartPanel] = useState(false);;

  return (
    <div>
      <>
        <div className='scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden'>
          {/* cart items */}
          <div className='cartItem flex items-center gap-3 p-4 '>
            <div className='img w-[30%]'>
              <img
                src='https://theartment.com/cdn/shop/files/vista-frame-floor-mirror-110712.jpg?v=1745094412&width=1800'
                className='w-full rounded-md'
              />
            </div>

            <div className='info w-[75%] pr-5 relative'>
              <h4 className='text-[14px] font-[500]'>
                <Link to='/product/35353' className='link'>A-Mirror for everyone! bye bye bye bye</Link>
              </h4>
              <p className='flex items-center gap-5 mt-2 mb-2'>
                <span>Qty : <span>2</span></span>
                <span className='text-[#fa582b] font-semibold'>Price : ₹25</span>
              </p>
              <MdOutlineDeleteOutline className='absolute top-[2px] right-[2px] cursor-pointer text-[20px] link transition-all'  />
            </div>
          </div>

          {/* other cart items... */}
        </div>

        <br />
        <div className='buttomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5'>
          <div className='buttoninfo py-3 px-4 w-full border-t border-gray-200 flex items-center justify-between flex-col '>
            <div className='flex items-center justify-between w-full '>
              <span className='text-[14px] font-[600]'>1 item</span>
              <span className='text-[#fa582b] font-semibold'>₹25.00</span>
            </div>
            <div className='flex items-center justify-between w-full '>
              <span className='text-[14px] font-[600]'>Shipping</span>
              <span className='text-[#fa582b] font-semibold'>₹8.00</span>
            </div>
          </div>

          <div className='buttoninfo py-3 px-4 w-full border-t border-gray-200 flex items-center justify-between flex-col '>
            <div className='flex items-center justify-between w-full '>
              <span className='text-[14px] font-[600]'>Total (tax excl.)</span>
              <span className='text-[#fa582b] font-semibold'>₹33.00</span>
            </div>
          </div>

          <br />
          <div className='py-3 px-4 w-full flex items-center justify-between flex-col '>
            <div className='flex items-center justify-between w-full gap-5'>
              <Link to="/cart" className='w-[50%]'><Button className='btn-org btn-lg w-full'>View Cart</Button></Link>
              <Link to="/checkout" className='w-[50%]'><Button className='btn-org btn-border btn-lg w-full'>Checkout</Button></Link>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default CartPanel