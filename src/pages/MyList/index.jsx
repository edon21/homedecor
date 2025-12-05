import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import MyListItems from './MyListItems';

const MyList = ({ initialQty = 1 }) => {
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
            <section className='section py-10 pb-10'>
                <div className='container !w-[80%] !max-w-[80%] flex gap-5'>
                  
                    <div className=' w-[70%] m-auto'>
                        <div className='shadow-md rounded-md bg-white mb-4 mt-4'>
                            <div className='py-2 px-3 border-b border-[#e4e4e4]'>
                                <h2 className=' !capitalize'>My List</h2>
                                <p className='mt-0 !capitalize'>
                                    There are <span className='font-bold text-[#fa582b]'>2</span> Products in My List
                                </p>
                            </div>

                            {/* Cart Item */}
                           
                           <MyListItems/>
                           <MyListItems/>
                           <MyListItems/>
                        </div>
                    </div>

                   
                   
                </div>
            </section>
        </div>
    )
}

export default MyList