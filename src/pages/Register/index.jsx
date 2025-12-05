import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
const Register= () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[450px] m-auto rounded-md bg-white p-5">
          <h3 className="text-center text-[18px] text-black">
            Register With a new account
          </h3>

          <form className="w-full mt-5">
            {/* full name field */}
             <div className="form-group w-full mb-5">
              <TextField
                id="fullName"
                label="Full Name"
                variant="outlined"
                className="w-full"
              />
            </div>

            {/* Email field */}
            <div className="form-group w-full mb-5">
              <TextField
                id="email"
                label="Email Id"
                variant="outlined"
                className="w-full"
              />
            </div>

            {/* Password field with show/hide icon */}
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                className="w-full"
              />
              <Button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="!absolute !top-[10px] !right-[10px] !z-50 
                !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
              >
                {showPassword ? (
                  <IoMdEyeOff className="text-[20px]" />
                ) : (
                  <IoMdEye className="text-[20px]" />
                )}
              </Button>
            </div>

            
            <div className="flex items-center w-full mt-5 mb-3">
                <Button className=" btn-lg w-full ">Register</Button>
            </div>
            
            <p className="text-center">Already have an account? <Link className = "link text-[14px] font-[600] text-[#abaaa3]" 
                to="/login">Login</Link></p>

            <p className="text-center font-[500] text-[14px] mb-3 mt-3">
                or continue with social account
            </p>
            <Button className="flex gap-3 w-full !bg-[#dad9d4] btn-org !text-black ">
            <FcGoogle className="text-[20px]"/>Login with Google  
            </Button>


          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;