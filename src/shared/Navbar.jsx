import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import demoUserPic from "../assets/demoUser.png";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import logo from '../../public/hotel.svg'


const Navbar = () => {
    
    const { user,logOut } = useContext(AuthContext);
    const links = <>
    <li><NavLink  to='/'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#959cef] text-white font-semibold border-[#959cef] mr-3"
           : isPending
           ? "pending"
           : "mr-3  font-semibold"
       }>Home</NavLink></li>
       <li><NavLink  to='/rooms'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#959cef] text-white font-semibold border-[#959cef] mr-3"
           : isPending
           ? "pending"
           : "mr-3  font-semibold"
       }>Rooms</NavLink></li>
       <li><NavLink  to='/my-booking'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#959cef] text-white font-semibold border-[#959cef] mr-3"
           : isPending
           ? "pending"
           : "mr-3  font-semibold"
       }>My Booking</NavLink></li>
       <li><NavLink  to='/contact'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#959cef] text-white font-semibold border-[#959cef] mr-3"
           : isPending
           ? "pending"
           : "mr-3  font-semibold"
       }>Contact Us</NavLink></li>
       <li><NavLink  to='/about'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#959cef] text-white font-semibold border-[#959cef] mr-3"
           : isPending
           ? "pending"
           : "mr-3  font-semibold"
       }>About Us</NavLink></li>
        
        
        {
            !user && <>
            <li><NavLink  to='/login'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#959cef] text-white font-semibold border-[#959cef] mr-3"
           : isPending
           ? "pending"
           : "mr-3  font-semibold"
       }>Login</NavLink></li>
       <li><NavLink  to='/register'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border bg-[#959cef] text-white font-semibold border-[#959cef] mr-3"
           : isPending
           ? "pending"
           : "mr-3  font-semibold"
       }>Register</NavLink></li>
            </>
        }
        
    </>

const handleSignOut = () =>{
  
    logOut()
    .then(result =>{
      console.log(result);
       toast.success('Logout Completed');
    })
    .catch(error =>{
      console.log(error);
        toast.warn("Error");
    })

  }

    return (
        <div className="navbar bg-[#D9E1FF] sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    {/* <a ><span className='font-semibold mr-1 text-xl lg:text-2xl '>Haven</span> <span className='font-semibold text-lg lg:text-xl  '>Hearth</span></a> */}
    <Link to='/' className='flex gap-2 items-center'>
            <img className='w-auto h-7' src={logo}  />
            <span className='font-bold'>HavenHearth</span>
          </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu  menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <div>
    {
          user &&  <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
            <Tooltip id="my-tooltip" />
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="top"
                src={user?.photoURL ? user.photoURL : demoUserPic}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm z-50 dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn bg-[#85A1FF]" onClick={handleSignOut}>Logout</button>
            </li>
          </ul>
        </div>
         }
    </div>
  </div>
</div>
    );
};

export default Navbar;