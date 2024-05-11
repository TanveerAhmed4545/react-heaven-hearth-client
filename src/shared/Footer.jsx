import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import logo from '../../public/hotel.svg'

const Footer = () => {
    return (
        <div className="  bg-blue-100 ">
          <footer className="footer p-10 bg-blue-100 text-base-content">
          <aside>
    <img className="size-12" src={logo} alt="" />
    <p  className="font-semibold">Haven Hearth Ltd. <br/>Providing reliable hotel booking since 2010</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  
</footer>
<footer className="footer px-10 py-4 border-t bg-blue-100 text-base-content border-base-300 ">
  <aside className="items-center grid-flow-col ">
    <img className="size-5" src={logo} />
    <p  className="font-semibold">Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a><FaFacebook className="text-2xl text-blue-600"></FaFacebook></a>
      <a><IoLogoTwitter className="text-2xl text-blue-500"></IoLogoTwitter></a>
      <a><FaInstagram className="text-2xl text-red-300"></FaInstagram></a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;