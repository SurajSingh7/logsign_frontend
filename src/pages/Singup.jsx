import { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { signUp } from "../services/operations/authAPI"
import { setSignupData } from "../slices/authSlice"


function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
    reEnterPassword: "",
  })


  const {  name ,email, phone, password, reEnterPassword } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== reEnterPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData
    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    
    // backend
    dispatch(signUp( name ,email, phone, password, reEnterPassword,navigate));


    // Reset
    setFormData({
      name: "",
      email: "",
      phone:"",
      password: "",
      reEnterPassword: "",
    })
  }


  return (
    <div className="m-5 sm:m-auto sm:mt-3 mt-2 ">

       <h1 className="text-[1.875rem] m-5 font-semibold leading-[2.375rem] text-richblack-5 mx-auto"> Create Account </h1>       
   
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4">
     
          {/* name */}
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Enter name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
        {/* </div> */}
         
         {/* email */}
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        
        {/* phone */}
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Phone <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="tel"
            name="phone"
            value={phone}
            onChange={handleOnChange}
            placeholder="Enter phone number"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
         
         {/* password  and re-password*/}
        <div className="flex gap-x-4">

          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5 placeholder:text-[11.5px] sm:placeholder:text-lg"
            />
          </label>

          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Re-enter Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="password"
              name="reEnterPassword"
              value={reEnterPassword}
              onChange={handleOnChange}
              placeholder="  Re-enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5 placeholder:text-[8.7px] sm:placeholder:text-lg"
            />
          </label>

        </div>


        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-[#0f9d58] py-[8px] px-[12px]  text-[#fff] font-bold"
        >
          Sign Up
        </button>
        <div className="h-3"></div>
      </form>

    </div>
  )
}

export default SignupForm;