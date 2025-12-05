import Button from '@mui/material/Button'
import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { IoIosLogOut, IoMdHeartEmpty } from 'react-icons/io';
import { BsClipboard2Check } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  return (
    <section className='py-10 w-full'>
      <div className=' container flex gap-5'>
        <div className='col1 w-[20%]'>
          <div className='card bg-white shadow-md rounded-md text-center'>
            <div className='w-full p-7 flex flex-col items-center justify-center '>
              <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative'>
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="user-avatar"
                  className='w-full h-full object-cover'
                />
                <div className='overlay w-full h-full absolute top-0 left-0 z-10 bg-[rgba(0,0,0,0.7)] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer'>
                  <FaCloudUploadAlt className='text-white text-[25px]' />
                  <input
                    type="file"
                    className='w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer'
                  />
                </div>
              </div>
              <h3>Himanshu Choudhary</h3>
              <h6 className='text-[12px] font-[400] mt-1'> himanshu63110@gmail.com</h6>
            </div>
            <ul className='list-none pb-5'>
              <Link to='/my-account'>
              <li className='!w-full '>
                <Button className='!w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.7)] !rounded-none flex items-center gap-2'>
                  <LuUserRound className='text-[17px]' />
                  User Profile
                </Button>
              </li>

              </Link>

              <Link to='/my-list'>
             
              <li className='!w-full '>
                <Button className='!w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.7)] !rounded-none flex items-center gap-2'>
                  <IoMdHeartEmpty className='text-[17px]' />
                  My List
                </Button>
              </li>
               </Link>

                <Link>
              <li className='!w-full '>
                <Button className='!w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.7)] !rounded-none flex items-center gap-2'>
                  <BsClipboard2Check className='text-[17px]' />
                  My Orders
                </Button>
              </li>
               </Link>
               <Link>
              <li className='!w-full '>
                <Button className='!w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.7)] !rounded-none flex items-center gap-2'>
                  <IoIosLogOut className='text-[17px]' />
                  Log Out
                </Button>
              </li>
                 </Link>
            </ul>
          </div>



        </div>

        <div className='col-2 w-[70%]'>
          <div className='card bg-white p-5 shadow-md rounded-md'>
            <h2 className='pb-3 !capitalize'>My Profile</h2>
            <hr />

            <form className='mt-5'>
              <div className='flex items-center gap-5'>
                <div className='w-[50%]'>
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>

                <div className='w-[50%]'>
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>


              </div>

              <div className='flex items-center gap-5 mt-4'>
                <div className='w-[48.9%]'>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <br/>
              <div className='flex items-center gap-4'>
                <Button className='btn-org btn-lg w-[100px]'>Save</Button>
                <Button className='btn-org btn-border btn-lg w-[100px]'>Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccount
