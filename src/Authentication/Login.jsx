import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGoogle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {userLogin,userGoogle}=useContext(AuthContext)
    const handleLoginAccount=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password);


        // 
        userLogin(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    const handleGoogle=()=>{
      userGoogle()
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
        console.log(error);
      })
    }
    return (
        <div className='flex justify-center items-center mb-40'>
        <div className="card  bg-base-200  w-1/2  mt-20">
            <h2 className='text-3xl font-bold text-[#404040] text-center mt-10'>Please Login!</h2>
            <form onSubmit={handleLoginAccount} className="card-bodyw-1/2 w-full p-8   rounded-xl">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
              </div>
            </form>
            <div className='text-center p-8 pb-10'>
            <p className='text-xl text-[#404040] font-bold '>Or</p>
            <Link onClick={handleGoogle}><button className="btn border-black w-full my-5"><IoLogoGoogle></IoLogoGoogle>Login With Google</button></Link>
            <Link><button className="btn border-black w-full "><FaFacebook></FaFacebook>Login With Facebook</button></Link>
            </div>
            <p className='mb-10 text-center'>Do not have Account? <Link to="/register"><span className='text-blue-700 font-bold text-lg'>Register</span></Link></p>
          </div>
        </div>
    );
};

export default Login;