import React from 'react'
import Footer from '../../components/Footer'
import '../Contact/style.css'

const Contact = () => {
  return (
    
    <div>
        <div className='heading text-3xl text-center mt-20 mb-20'>
          <h1>Contact Us</h1>
        </div>
        <div className='content pl-70 pr-70 mb-20 text-left'>
          <h1 className='mb-7'>Mohali, India</h1>
          <h1 className='mb-13'>Timings: Monday to Thursday  11:00 am to 5:00 pm (IST)</h1>
          <h1 className='mb-8'>
            If tried contacting us outside our business hours please email us at 
            xyz@gmail.com or WhatsApp us at: +91 9816727038 and we will 
            respond as soon as possible.
          </h1>
          <h1>
            Write to us at support@nestorialiving.in
          </h1>
        </div>

      

    </div>
    
  )
}

export default Contact
