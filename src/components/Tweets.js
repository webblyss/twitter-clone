import React,{useState} from 'react'
import IMG from '../assets/pic.jpg';
import {CiCircleMore} from 'react-icons/ci';
import {AiOutlineComment} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineShareAlt} from 'react-icons/ai';

const Tweets = ({tweet}) => {
  const [isLove,setLove] = useState(false);



  return (
    <div className="w-full h-auto p-4 bg-gray-100 shadow mb-2">
       
       <div className="flex w-full justify-between">
       <div className="w-full flex ">
       <img src={IMG} className='w-[40px] h-[40px] rounded-full' alt=""/>
       <div className="w-full flex flex-col mx-4 ">
        <h2 className='font-bold'>{tweet.username}</h2>
        <p className="w-full text-sm md:text-1xl"> 
            {tweet.content}
        </p>
        <div className="w-full rounded">
            {tweet.profile && <img src={`http://localhost:3000/${tweet.imageUrl}`} alt="" className='rounded w-full my-2'/>}
        </div>
        <div className="flex justify-evenly">
        
        <div className="flex items-center">
        <AiOutlineComment className='mx-2 text-2xl cursor-pointer'/>
        <span>{tweet.likes}</span>
        </div>

        <div className="flex items-center cursor-pointer" >
        {isLove === false ? <AiOutlineHeart className='mx-2 text-2xl outline-none' role="button" onClick={()=>{setLove(true)}}/> : <AiFillHeart className='mx-2 text-2xl text-red-500 outline-none'  role="button" onClick={()=>{setLove(false)}}/>}
        <span> {tweet.likes}</span>
        </div>

        <div className="flex items-center cursor-pointer">
        <AiOutlineShareAlt className='mx-2 text-2xl'/>
        <span>49</span>
        </div>

        </div>
       </div>
       </div>
  {/* MORE ICONS */}
<CiCircleMore/>
       </div>
    </div>
  )
}

export default Tweets