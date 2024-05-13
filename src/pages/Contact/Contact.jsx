import { Helmet } from "react-helmet-async";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";



const Contact = () => {
    
      return (
        <div className=" my-5 lg:my-9">
          <Helmet>
            <title>Heaven Hearth || Contact</title>
          </Helmet>
    
          <div className="text-center py-8 px-5">
              <h2 className="text-neutral-900 text-2xl lg:text-4xl font-extrabold">
                Contact Us
              </h2>
              <p className="text-neutral-900 pt-6 w-full mx-auto lg:w-9/12">
              For personalized assistance in finding your perfect stay, reach out to Heaven Hearth Hotel. Contact us via phone, email, or visit our office for an unparalleled luxury experience.{" "}
              </p>
            </div>
    
       
    
          <div>
            <div className="mt-6 lg:mt-12 flex gap-6 flex-col-reverse lg:flex-row px-6">
              <form className="lg:basis-3/5 basis-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <label>
                    <span className="text-neutral-900 text-xl font-bold">
                      Your Name
                    </span>{" "}
                    <br />
                    <input
                      className="mt-4 w-full p-5  border-0 outline-0 bg-[#e8ebf9]"
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </label>
    
                  {/* input-2 */}
    
                  <label>
                    <span className="text-neutral-900 text-xl font-bold">
                      Your Email
                    </span>{" "}
                    <br />
                    <input
                      className="mt-4 w-full p-5  border-0 outline-0 bg-[#e8ebf9]"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </label>
    
                  {/* input-3  */}
    
                  <label>
                    <span className="text-neutral-900 text-xl font-bold">
                      Subject
                    </span>{" "}
                    <br />
                    <input
                      className="mt-4 w-full p-5  border-0 outline-0 bg-[#e8ebf9]"
                      type="text"
                      placeholder="Enter your subject"
                      required
                    />
                  </label>
    
                  {/* input-4  */}
    
                  <label>
                    <span className="text-neutral-900 text-xl font-bold">
                      Phone Number
                    </span>{" "}
                    <br />
                    <input
                      className="mt-4 w-full p-5  border-0 outline-0 bg-[#e8ebf9]"
                      type="number"
                      placeholder="Enter your phone number"
                      required
                    />
                  </label>
                </div>
    
                {/* input 5  */}
                <label>
                  <span className="text-neutral-900 text-xl font-bold ">
                    Message
                  </span>{" "}
                  <br />
                  <textarea className="mt-4 w-full p-5 pb-36 lg:pb-64  border-0 outline-0 bg-[#e8ebf9] text-[#9CA3AF] resize-none" placeholder="Write your message">
                    
                  </textarea>
                </label>
    
                <button className="btn text-white rounded-none text-xl font-bold bg-[#959cef] w-full mt-6">
                  Send Message
                </button>
              </form>
    
              <div className=" border border-neutral-900 border-opacity-10 lg:p-12 p-5 lg:basis-2/5 basis-full">
                <div className="p-6 bg-[#959cef] bg-opacity-10 ">
                  <FaPhoneAlt className="text-2xl text-[#959cef]"></FaPhoneAlt>
                  <p className="pt-6">Phone Number :</p>
                  <h3 className="font-bold pt-3">(+62) 123-821-543</h3>
                </div>
    
                <div className="p-6 bg-[#959cef] bg-opacity-10  my-6">
                  <MdEmail className="text-2xl text-[#959cef]"></MdEmail>
                  <p className="pt-6">Email :</p>
                  <h3 className="font-bold pt-3">heavenHearth@support.com</h3>
                </div>
    
                <div className="p-6 bg-[#959cef] bg-opacity-10 ">
                  <IoLocation className="text-2xl text-[#959cef]"></IoLocation>
                  <p className="pt-6">Location :</p>
                  <h3 className="font-bold pt-3">1230 Uttara , Dhaka</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Contact;