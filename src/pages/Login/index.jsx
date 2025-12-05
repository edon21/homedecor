import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { CartContext } from "../../createContext";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: ""
  })

  const context = useContext(CartContext);
  const history = useNavigate();

  const forgotPassword = () => {
    context.openAlertBox('success','OTP sent to your registered email id');
    history("/verify")
     
    
  
  }
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[450px] m-auto rounded-md bg-white p-5">
          <h3 className="text-center text-[18px] text-black">
            Login to your account
          </h3>

          <form className="w-full mt-5">
            {/* Email field */}
            <div className="form-group w-full mb-5">
              <TextField
                id="email"
                label="Email Id"
                variant="outlined"
                className="w-full"
                name="name"
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
                name="password"
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

            <a className="link cursor-pointer text-[14px] font-[400]" onClick={forgotPassword}>
                Forgot Password?
            </a>
            <div className="flex items-center w-full mt-5 mb-3">
                <Button className=" btn-lg w-full ">Login</Button>
            </div>
            
            <p className="text-center">Not Registered? <Link className = "link text-[14px] font-[600] text-[#abaaa3]" 
                to="/register">Sign Up</Link></p>

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

export default Login;