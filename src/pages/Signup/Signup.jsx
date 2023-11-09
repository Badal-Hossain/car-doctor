/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import signupImage from './../../assets/assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Footer from "../../Shared/Footer/Footer";

const Signup = () => {
    const handleSignup = e => {
        e.preventDefault()
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-2 mb-6">
                <div className="col-span-1  w-1/2 mx-auto lg:mt-24">
                    <img src={signupImage} />
                </div>
                <div className="w-4/5 border-2 p-6 lg:mt-8">
                    <h3 className="text-center text-xl font-bold mb-8">Sign up</h3>          
                    <form onSubmit={handleSignup}>
                        <div className="form-control mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                        </div>
                        <div className="form-control mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>  
                        <div className="text-center">
                            <button type="submit" className=" mb-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:w-auto px-24 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Sign Up</button>
                            <p>or continue with</p>
                        </div>                     
                    </form >
                    <div className="flex gap-5 text-xl justify-center my-3 mx-auto">
                        <button><FcGoogle></FcGoogle></button>
                        <button><BsGithub></BsGithub></button>                             
                    </div>
                    <div className="flex justify-center">
                        <p>Already have an account?</p>
                        <NavLink to='/login' className="text-red-500 font-bold ml-2">Log In</NavLink>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Signup;