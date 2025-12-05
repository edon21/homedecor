import { Link } from 'react-router-dom'

import { IoCloseSharp } from 'react-icons/io5'

import Button from '@mui/material/Button';


const MyListItems = () => {

    return (
       
           
                
                  
                   
                        <div >
                           

                            {/* Cart Item */}
                            <div className='cartItem w-full p-3 flex items-center gap-4 pb-4 border-b border-[#e4e4e4]'>
                                <div className='img w-[15%] rounded-md overflow-hidden'>
                                    <Link to='/product/9988' className='group'>
                                        <img
                                            src='https://theartment.com/cdn/shop/files/vista-frame-floor-mirror-110712.jpg?v=1745094412&width=1800'
                                            alt='product'
                                            className='w-full'
                                        />
                                    </Link>
                                </div>

                                <div className='info w-[90%] relative'>
                                    <IoCloseSharp className='cursor-pointer absolute top-0 right-[4%] text-[22px] transition-all' />
                                    <span className='text-[13px]'>Round Mirror</span>
                                    <h3 className='text-[16px]'>
                                        <Link className='link' to='/product/8686'>
                                            A Mirror for everyone - yes for Everyone
                                        </Link>
                                    </h3>

                                    <div className='flex items-center gap-4 mt-2 mb-2'>
                                       
                                    

                                    <div className='Pricing flex items-center gap-4'>
                                        <span className='text-black text-[14px] font-[600]'>₹590</span>
                                        <span className='line-through text-gray-500 text-[14px] font-[500]'>₹870</span>
                                        <span className='text-[#fa582b] text-[14px] font-[600]'>20% OFF</span>
                                    </div>

                                    </div>

                                   
                                    <Button className='btn-org btn-sm'>
                                        Add To Cart
                                    </Button>
                                </div>
                            </div>
                           
                        </div>
                

                   
                   
              
           
       
    )
}

export default MyListItems