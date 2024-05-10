import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import demoUserPic from "../assets/demoUser.png";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";



const Navbar = () => {
    
    const { user,logOut } = useContext(AuthContext);
    const links = <>
        <li className="mr-1"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-1"><NavLink to='/rooms'>Rooms</NavLink></li>
        <li className="mr-1"><NavLink to='/my-booking'>My Booking</NavLink></li>
        
        {
            !user && <>
            <li className="mr-1"><NavLink to='/login'>Login</NavLink></li>
            <li className="mr-1"><NavLink to='/register'>Register</NavLink></li>
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
    <a ><span className='font-semibold mr-1 text-xl lg:text-2xl '>Haven</span> <span className='font-semibold text-lg lg:text-xl  '>Hearth</span></a>
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