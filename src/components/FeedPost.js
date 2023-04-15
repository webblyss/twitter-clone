import React,{useState,useRef} from 'react'
import IMG from '../assets/pic.jpg';
import {AiOutlineFileImage} from 'react-icons/ai';
import TweetContext from '../utils/ContextAPI';
import { useContext } from 'react';


// CUSTOM HOOK
const usePosts = () => useContext(TweetContext);

const FeedPost = () => {
const { createPost, } = usePosts();
const [content,setContent] = useState("");
const [selectedImage, setSelectedImage] = useState(null);
const [previewImage, setPreviewImage] = useState(null);
const fileInputRef = useRef();

const handleSelectFile = () => {
  fileInputRef.current.click();
};

const handleImageSelect = (event) => {
  const file = event.target.files[0];
  setSelectedImage(file);
  setPreviewImage(URL.createObjectURL(file));
};
  const postTweet = async(event)=>{
    event.preventDefault();
    createPost(content,selectedImage)
  }

  return (
    <div className='hidden md:block w-full shadow'>
    <form onSubmit={postTweet}>
       <div className="w-4/5 h-full mx-auto flex my-5">
        <img src={IMG} alt="" className='h-10 rounded-full'/>
        <div className="flex flex-col w-4/5  mx-5">
        <textarea onChange={(e)=>{setContent(e.target.value)}} name="" id="" placeholder="What's happening?" className='outline-none w-full p-2'></textarea>
        <input type="file" name="" hidden ref={fileInputRef} onChange={handleImageSelect}  id="" />  
        <img src={previewImage} alt="" />     
       {/* CONTROLL BUTTONS */}
       <div className="flex w-full justify-between my-4">
        <div className="flex">
        <AiOutlineFileImage className="cursor-pointer text-2xl" onClick={handleSelectFile}/>
        </div>
        <button  type='submit' className="flex items-center justify-center text-white w-[70px] h-[40px] bg-blue-500 rounded-full">Tweet</button>
       </div>
        </div>
       </div>
       </form>
    </div>
  )
}

export default FeedPost