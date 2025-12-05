import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import '../Footer/style.css'
const Footer = () => {
  return (
    <div>
    <div className="footer bg-[#dad9d4]">
        <div className='container flex '>
            <div className='contact p-20 gap-5 '>

                <h1 className='mb-5 text-2xl font-light'>Nestoria</h1>

                <Link to="/contact"><h3 className='mb-2 hover:underline underline-offset-4'>Conatct us</h3></Link>
                <Link><h3 className='mb-2 hover:underline underline-offset-4'>Terms of Service</h3></Link>
                
            </div>

              <div className='contact p-20'>

                <h1 className='mb-5 text-2xl font-light'>Help & Information</h1>

                <Link><h3 className='mb-2 hover:underline underline-offset-4'>Privacy Policy</h3></Link>
                <Link><h3 className='mb-2 hover:underline underline-offset-4'>Shipping</h3></Link>
                <Link to="/return"><h3 className='mb-2 hover:underline underline-offset-4'>Returns & Refund</h3></Link>
                
            </div>

                <div className='contact p-20'>
          <h1 className='mb-5 text-2xl font-light'>Follow Us On</h1>

          <div className="flex flex-col gap-3">
            <a href="https://www.instagram.com/nestorialiving/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline underline-offset-4">
              <FaInstagram size={18} /> Instagram
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline underline-offset-4">
              <FaFacebookF size={18} /> Facebook
            </a>

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline underline-offset-4">
              <FaTwitter size={18} /> Twitter
            </a>
          </div>
        </div>
        </div>
      
    </div>
    <div className=' container Copyright text-right'>
        Copyright © 2025 Nestoria - All Rights Reserved.
    </div>
    </div>
  )
}

export default Footer
