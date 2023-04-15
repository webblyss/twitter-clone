import React,{useEffect, useState} from 'react'
import FeedPost from './FeedPost';
import MoreFeeds from './MoreFeeds';
import {AiOutlineTwitter} from 'react-icons/ai';
import Tweets from './Tweets';
import TweetContext from '../utils/ContextAPI';
import { useContext } from 'react';
import axios from 'axios';



const FeedContainer = () => {
  const {setUser} = useContext(TweetContext)
  const [_user,set_User] = useState('');
  const [tweet,setTweets] = useState([]); 

  useEffect(()=>{
    const  user = localStorage.getItem('user');
    set_User(JSON.parse(user)); 
    //  console.log(_user.profile)
     setUser(_user)
  },[_user,setUser])


  return (
    <div className="flex flex-1 flex-col shadow h-full overflow-y-auto scrollbar-hidden"> 
    <h1 className='hidden md:block font-bold text-2xl m-4'>Home</h1>

    {/* SHOW PROFILE AND LOGO ON SMALL DEVICES */}

    <div className="w-full justify-between m-3 flex md:hidden">
     {_user  != null ?<img src={_user.imageUrl}
 className='w-[40px] h-[40px] rounded-full' alt=""/>:<span></span>}
     <div className="">
            <AiOutlineTwitter className='text-3xl text-blue-500 cursor-pointer'/>
      </div>

      <div className=""></div>
</div>
     
     {/* TRENDS */}


     <div className="mt-1 md:mt-10 w-full flex justify-around  shadow">
      <div className="flex-1 flex flex-col text-center items-center py-2 hover:bg-gray-100 cursor-pointer justify-center">
      <h1 className='text-1xl md:text-2xl font-bold'>For You</h1>
      <div className="w-10 h-1 bg-blue-500"></div>
      </div>
      <div className="flex-1 text-center py-2 hover:bg-gray-100 cursor-pointer">
    
      <h1 className='sm:text-1xl text:2xl '>Following</h1>
      </div>
     </div>

     {/* BUILD FEEDS POST */}
     <FeedPost/>
     <MoreFeeds/>
    {/* DISPLAY ALL TWEETS */}
   {tweet.map((post,index)=>{
    return <Tweets tweet={post} key={index}/> 
   })}
    
    </div>
  )
}

export default FeedContainer