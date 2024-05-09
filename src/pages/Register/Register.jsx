import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signUpAnimation from '../../assets/log.json';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";


const Register = () => {

    // show password
    const [showPassword,setShowPassword] = useState(false);
    const {createUser,setReload} = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        // console.log(data)

        if(data.password.length < 6){
            toast.warn("Password should be at least 6 characters or longer");
              return;
          }else if(!/(?=.*[A-Z])(?=.*[a-z])/.test(data.password)){
            toast.warn("Your password should have at least one Upper case and one lower case characters.");
              return;
          }
  
          //  console.log(data)
           createUser(data.email,data.password)
           .then(result =>{
              // console.log(result.user);
              result.user && toast.success("Successfully Register");
  
              updateProfile(result.user,{
                  displayName: data.name,
                  photoURL: data.photo
              })
              .then(()=>{
                  console.log("update");
                  setReload(true);
              })
              .catch((error)=>{
                  console.log(error);
              })

              navigate('/');
  
           })
           .catch(error=>{
             error && toast.warn("Error , not registered");
           })

    }
    

    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:ml-10">
            <h1 className="text-5xl font-bold ">Register Now</h1>
            <div className=" max-w-[600px] md:max-w-md lg:max-w-[600px]">
              <Lottie className="w-full" animationData={signUpAnimation} loop={true} />
            </div>
          </div>
          <div className="card  shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form className="card-body pb-0" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" 
                {...register("name", { required: true })}
                />
                {errors.name && <span className="text-red-500 font-semibold pt-2">This Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="Photo Url" className="input input-bordered" 
                {...register("photo")}
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"  
                {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500 font-semibold pt-2">This Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="w-full relative">
                <input type={showPassword ? 'text' :"password" } placeholder="password" className="w-full input input-bordered" 
                {...register("password", { required: true })}
                />
                <span className="absolute top-4 right-2"  onClick={() => setShowPassword(!showPassword)}>
                          {
                              showPassword ?  <FaEyeSlash></FaEyeSlash>  : <IoMdEye></IoMdEye> 
                          }
                      </span>
                </div>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#85A1FF] text-white">Register</button>
              </div>
            </form>
            <div className="text-center py-5">
           <p>Already have an account ? <Link className="text-[#85A1FF] font-bold" to='/login'>Login</Link></p>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Register;