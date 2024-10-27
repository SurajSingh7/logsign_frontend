import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { login } from "../services/operations/authAPI"

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })


  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <>

    <div className="m-7 sm:m-auto sm:mt-4 mt-3 ">

       <h1 className="text-[1.875rem] m-5 font-semibold leading-[2.375rem] text-richblack-5 mx-auto"> Welcome Back </h1> 

        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col gap-y-4"
        >
          <label >
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
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
          
          <label className="w-full">
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
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>



            <div className="flex ">
               <div className="w-56"> </div>
               <div className="w-56"></div>
            </div>
            

          <button
            type="submit"
            className="mt-5 rounded-[8px] bg-[#0f9d58] py-[8px] px-[12px] font-bold text-[#fff]"
          >
            Log In
          </button>
          <div className="h-10"></div>
        </form>
    
    </div>
    </>
  )
}

export default LoginForm