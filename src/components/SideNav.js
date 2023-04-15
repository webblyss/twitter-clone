import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineBell} from 'react-icons/ai';
import {AiOutlineMessage} from 'react-icons/ai';
import {CiCircleMore} from 'react-icons/ci';
import {AiOutlineSend} from 'react-icons/ai';
import {FaHashtag} from 'react-icons/fa';
import {CiUser} from 'react-icons/ci';
import {FaFeatherAlt} from 'react-icons/fa';
import IMG from '../assets/pic.jpg';
import TweetContext from '../utils/ContextAPI';
import { useContext } from 'react';
const SideNav = () => {
    const {user} = useContext(TweetContext )
  return (
    <div className='hidden  md:block flex-[0.5] h-full flex-col shadow flex-2 flex'> 
        <div className="p-4 mb-2">
            <AiOutlineTwitter className='text-3xl text-blue-500 cursor-pointer'/>
        </div>
        <div className="p-4 mb-2 flex items-center cursor-pointer hover:bg-blue-100">
            <AiOutlineHome className='text-3xl'/>
            <span className='hidden md:block text-bold mx-4'>Home</span>
        </div>
        <div className="p-4 mb-2 flex items-center cursor-pointer hover:bg-blue-100">
            <FaHashtag className='text-3xl'/>
            <span className='hidden md:block text-bold mx-4'>Explore</span>
        </div>
        <div className="p-4 mb-2 cursor-pointer items-center flex   hover:bg-blue-100">
            <AiOutlineBell className='text-3xl'/>
            <span className='hidden md:block text-bold mx-4'>Notification</span>
        </div>
        <div className="p-4 mb-2 cursor-pointer items-center flex  hover:bg-blue-100">
            <AiOutlineMessage className='text-3xl cursor-pointer'/>
            <span className='hidden md:block text-bold mx-4'>Message</span>
        </div>
        <div className="p-4 mb-2 cursor-pointer items-center flex  hover:bg-blue-100">
            <AiOutlineSend className='text-3xl cursor-pointer'/>
            <span className='hidden md:block text-bold mx-4'>Message</span>
        </div>
        <div className="p-4 mb-2 cursor-pointer items-center flex  hover:bg-blue-100">
            <CiUser className='text-3xl cursor-pointer'/>
            <span className='hidden md:block text-bold mx-4'>Profile</span>
        </div>
        <div className="p-4 mb-2 cursor-pointer items-center flex">
            <CiCircleMore className='text-3xl'/>
            <span className='hidden md:block text-bold mx-4'>More</span>
        </div>

        <div role='button' className=" mx-auto hidden md:block p-4 text-center text-white">
        <img src={IMG} className='w-[40px] h-[40px] rounded-full cursor-pointer mt-4' alt="" />
        </div>
        <div role='button' className="md:hidden sm:block h-[40px] w-[40px] mx-auto flex justify-center items-center  bg-blue-500 rounded-full text-center text-white">
        <FaFeatherAlt className='text-2xl'/>
        </div>

        <div role='button' className="md:hidden sm:block p-2 rounded-full text-center text-white">
        <img src={IMG} className='w-[40px] h-[40px] rounded-full cursor-pointer mt-4' alt="" />
        </div>
    </div>
  )
}

export default SideNav;