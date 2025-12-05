import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Navigation = () => {


    return (
       <>
        <nav className='py-2'>
            <div className='container flex items-center justify-end gap-15'>
                

                <div className='col-2 w-[98%]'>
                    <ul className='flex items-center gap-28'>
                        <li className='list-none'>
                            <Link to="/" className='text-[14px] font-[500] link transition underline underline-offset-4 '>
                            <button className='link transform'>Home</button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/sale" className='text-[14px] font-[500] link transition'>
                            <button className='link transform'>sale</button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/new" className='text-[14px] font-[500] link transition'>
                            <button className='link transform'>new in</button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/mirror" className='text-[14px] font-[500] link transition underline underline-offset-4'>
                            <button className='link transform'>Mirror</button>
                            </Link>

                           

                        </li>

                        <li className='list-none'>
                            <Link to="/bulkorders" className='text-[14px] font-[500] link transition'>
                            <button className='link transform'>bulk order</button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className='text-[14px] font-[500] link transition'>
                            <button className='link transform'>Buy 3 @9999/-</button>
                            </Link>
                        </li>

                         <li className='list-none'>
                            <Link to="/bestseller" className='text-[14px] font-[500] link transition'>
                            <button className='link transform'>best seller</button>
                            </Link>
                        </li>
                    </ul>

                </div>
                

            </div>
        </nav>

     

      

       </>
    )
}

export default Navigation
