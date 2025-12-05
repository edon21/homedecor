import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { GoTriangleDown } from 'react-icons/go'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { BsFillBagCheckFill } from 'react-icons/bs'

const Cart = ({ initialQty = 1 }) => {
    const [qty, setQty] = useState(initialQty);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleQtyChange = (value) => {
        setQty(value);
        handleClose();
    };

    return (
        <div>
            <section className='section py-5 pb-10'>
                <div className='container !w-[80%] !max-w-[80%] flex gap-5'>
                    {/* Left Part */}
                    <div className='leftpart w-[70%]'>
                        <div className='shadow-md rounded-md bg-white mb-4 mt-4'>
                            <div className='py-2 px-3 border-b border-[#e4e4e4]'>
                                <h2>Your Cart</h2>
                                <p className='mt-0'>
                                    There are <span className='font-bold text-[#fa582b]'>2</span> Products in the cart
                                </p>
                            </div>

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

                                    <div className='flex items-center mt-2 mb-2'>
                                        <div className='relative'>
                                            <span
                                                onClick={handleClick}
                                                className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600]
                        py-1 px-2 rounded-md cursor-pointer'
                                            >
                                                Qty : {qty} <GoTriangleDown className='ml-1' />
                                            </span>

                                            <Menu
                                                id='basic-menu'
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}

                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                                    <MenuItem key={num} onClick={() => handleQtyChange(num)}>
                                                        {num}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </div>
                                    </div>

                                    <div className='Pricing flex items-center gap-4'>
                                        <span className='text-black text-[14px] font-[600]'>₹590</span>
                                        <span className='line-through text-gray-500 text-[14px] font-[500]'>₹870</span>
                                        <span className='text-[#fa582b] text-[14px] font-[600]'>20% OFF</span>
                                    </div>
                                </div>
                            </div>
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

                                    <div className='flex items-center mt-2 mb-2'>
                                        <div className='relative'>
                                            <span
                                                onClick={handleClick}
                                                className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600]
                        py-1 px-2 rounded-md cursor-pointer'
                                            >
                                                Qty : {qty} <GoTriangleDown className='ml-1' />
                                            </span>

                                            <Menu
                                                id='basic-menu'
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}

                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                                    <MenuItem key={num} onClick={() => handleQtyChange(num)}>
                                                        {num}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </div>
                                    </div>

                                    <div className='Pricing flex items-center gap-4'>
                                        <span className='text-black text-[14px] font-[600]'>₹590</span>
                                        <span className='line-through text-gray-500 text-[14px] font-[500]'>₹870</span>
                                        <span className='text-[#fa582b] text-[14px] font-[600]'>20% OFF</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className='rightpart w-[30%] pl-4'>
                        <div className='shadow-md rounded-md bg-white mb-4 mt-4 p-5'>
                            <h3 className='pb-3'>Cart Total</h3>
                            <hr />
                            <div className='mt-2 mb-2'>
                                <p className='flex items-center justify-between'>
                                    <span className='text-[14px] font-[500]'>Subtotal</span>
                                    <span className='font-bold text-[#fa582b]'>₹590.00</span>
                                </p>
                            </div>

                            <div className='mt-2 mb-2'>
                                <p className='flex items-center justify-between'>
                                    <span className='text-[14px] font-[500]'>Shipping</span>
                                    <span className='font-medium text-black'>Free</span>
                                </p>
                            </div>

                            <div className='mt-2 mb-2'>
                                <p className='flex items-center justify-between'>
                                    <span className='text-[14px] font-[500]'>Total</span>
                                    <span className='font-bold text-[#fa582b]'>₹590.00</span>
                                </p>
                            </div>
                            <Link to='/checkout'>
                            <Button className='btn-org btn-lg w-full flex gap-2'>
                                <BsFillBagCheckFill className='text-[18px]' /> Checkout
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart