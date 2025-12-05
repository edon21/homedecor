import React, { useState } from 'react'
import OTPBox from '../../components/OTPBox'
import Button from '@mui/material/Button';

const Verify = () => {
    const[otp, setOtp] = useState("");
    
    const handleOtpChange = (value) => {
        setOtp(value);
        
    };

    const verifyOTP = (e) => {
        e.preventDefault();

        if(otp.length === 6){
            alert("OTP verified successfully!");
        } else {
            alert("Please enter a valid 6-digit OTP.");
        }
    };
        
  return (
    <section className='section py-10'>
        <div className='container'>
            <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5  mt-10 mb-10'>
                <h3 className='text-center text-[18px] text-black mb-5'>
                    Verify OTP
                </h3>
                 
                <p className='text-center mt-4 mb-4'>OTP sent to{" "}
                    <span className='text-[#92918e] font-semibold'>
                     himanshu63110@gmail.com
                    </span>
                    </p>
                <form onSubmit={verifyOTP}>
                     <OTPBox length={6} onChange={handleOtpChange}/>



                 <div className='flex items-center justify-center mt-7'>
                    <Button type='submit' className='w-full btn-org btn-lg'>
                        Verify OTP
                    </Button>
                 </div> 
                </form>
            </div>
        </div>
    </section>
  )
}

export default Verify
