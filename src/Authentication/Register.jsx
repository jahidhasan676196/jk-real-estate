import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const { userRegister}=useContext(AuthContext)
    const handleRegister =(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const photo=e.target.photo.value
        const email=e.target.email.value
        const password=e.target.password.value
        const confirm_password=e.target.cpassword.value
        console.log(name,photo,email,password,confirm_password);

        // userRegister
        userRegister(email,password)
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
            <h2 className='text-3xl font-bold text-[#404040] text-center mt-10'>Register Now</h2>
            <form onSubmit={handleRegister} className="card-bodyw-1/2 w-full p-8   rounded-xl">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="photo URL" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='cpassword' placeholder="confirm password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Register</button>
              </div>
            </form>
            {/* <div className='text-center p-8 pb-10'>
            <p className='text-xl text-[#404040] font-bold '>Or</p>
            <Link><button className="btn border-black w-full my-5"><IoLogoGoogle></IoLogoGoogle>Login With Google</button></Link>
            <Link><button className="btn border-black w-full "><FaFacebook></FaFacebook>Login With Facebook</button></Link>
            </div> */}
            <p className='mb-10 text-center'>Do have Account? <Link to="/login"><span className='text-blue-700 font-bold text-lg'>Login</span></Link></p>
          </div>
        </div>
    );
};

export default Register;