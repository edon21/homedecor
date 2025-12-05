import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../createContext";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [formFields, setFormFields] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  const context = useContext(CartContext);
  const history = useNavigate();

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formFields.newPassword !== formFields.confirmPassword) {
      context.openAlertBox("Passwords do not match!");
      return;
    }
    context.openAlertBox("Password updated successfully!");
    history("/login");
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[450px] m-auto rounded-md bg-white p-5">
          <h3 className="text-center text-[18px] text-black">
            Forgot Password
          </h3>

          <form className="w-full mt-5" onSubmit={handleSubmit}>
            {/* New Password field */}
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="newPassword"
                label="New Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                className="w-full"
                name="newPassword"
                value={formFields.newPassword}
                onChange={handleChange}
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

            {/* Confirm Password field */}
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                type={showPassword2 ? "text" : "password"}
                variant="outlined"
                className="w-full"
                name="confirmPassword"
                value={formFields.confirmPassword}
                onChange={handleChange}
              />
              <Button
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
                className="!absolute !top-[10px] !right-[10px] !z-50 
                !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
              >
                {showPassword2 ? (
                  <IoMdEyeOff className="text-[20px]" />
                ) : (
                  <IoMdEye className="text-[20px]" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full mt-5 mb-3">
              <Button type="submit" className="btn-lg w-full">
                Update Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;