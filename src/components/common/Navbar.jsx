import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import ProfileDropdown from "../core/Auth/ProfileDropDown"


function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const location = useLocation()

  return (
    
  <>

     <div className="md:h-14  h-[63px]  bg-transparent"></div> 

    <div
      className={` flex h-[56px] items-center justify-center border-b-[0px] border-b-richblack-900
      fixed z-50 top-0 left-0 w-full  ${location.pathname !== "/" ? "bg-richblack-900" : ""} 
        transition-all duration-200 shadow-[10px_-5px_15px_-5px] shadow-white` }
    >
    
      <div className="  mx-4  m-4 md:m-0 justify-between gap-x-1  sm:justify-center sm:gap-x-10 md:gap-x-0 flex w-11/12 max-w-maxContent items-center  md:justify-between ">
        
         {/* Logo */}
        <Link to="/" className="md:block text-richblack-25 font-extrabold shadow-[12px_-12px_13px_-2px] shadow-richblue-300  bg-richblack-900 rounded-l-3xl rounded-sm p-2 ">
           Task
        </Link>

         <Link to="/">
           <p className="md:block shadow-[1px_-1px_8px_-2px] shadow-richblue-300 text-[#7FFFD4]  hover:scale-105 rounded-md bg-richblack-900 p-1">
                  Home
            </p>
        </Link>


        {/* Login / Signup / Dashboard */}
        <div className=" flex  items-center gap-x-3  md:gap-x-4 md:flex  md:font-semibold">

          {token === null && (
            <Link to="/login">

              <button className=" md:block rounded-[8px] border border-caribbeangreen-200 bg-richblack-800 px-[12px] py-[4px] text-richblack-100">
                 Log in
              </button>

            </Link>
          )}
          {token === null && (
            <Link to="/signup">
               
               <button className=" md:block  rounded-[8px] border border-caribbeangreen-200 bg-richblack-800 px-[12px] py-[4px] text-richblack-100">
                  Sign up
              </button>

            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        
       
      </div>

    </div>

  </>

  )
}

export default Navbar;