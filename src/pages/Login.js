import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import {AiOutlineApple} from 'react-icons/ai';
import { provider,auth } from '../utils/firebase';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// CUSTOM HOOK
const Login = () => {
    const navigate = useNavigate()


    const handleGoogleSignIn = async() => {
    auth.signInWithPopup(provider).then(async (result) => {
        const ananymose = result.user; 
        const user = {
            email:ananymose.email,
            imageUrl:ananymose.photoURL,
            username:ananymose.displayName
        } 
        localStorage.setItem("user",JSON.stringify(user))
        console.log(user)
        navigate("/home")
        try {
            
        } catch (error) {
               
        }


        // setUser(user)
        // console.log(user);
        // navigate("/home")
    });
  };
    
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
            <div className=" w-[90%] md:w-[60%] flex justify-center items-center flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-3 w-full text-center flex justify-center">
                <AiOutlineTwitter className="text-blue text-3xl text-blue-500"/>
            </div>
                <h4 className='text-3xl text-blue-500 cursor-pointer'>Sign into Twitter</h4>

                <div onClick={handleGoogleSignIn } role="button" className=" w-[80%] md:w-[40%] h-[50px] flex bg-black justify-center items-center my-3 rounded">
                    <FcGoogle className="mx-3"/>
                    <span className="text-white">Sign in with Google</span>
                </div>

                <div role="button" className="w-[80%] md:w-[40%]  h-[50px] flex bg-white shadow justify-center items-center my-3 rounded">
                    <AiOutlineApple className="mx-3"/>
                    <span className="font-bold">Sign in with Apple</span>
                </div>
            </div>
    </div>
  )
}

export default Login