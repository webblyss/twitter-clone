import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import TrendsCard from './TrendsCard';
const TrendsContainer = () => {
  return (
    <div className='hidden md:block flex flex-1 shadow p-4 h-full'>
      <div className="w-4/5 mx-auto">
        {/* Search Button */}
        <div className="w-full p-3 bg-gray-100 flex rounded-full">
          <AiOutlineSearch className='text-2xl'/>
          <input type="text" name="" id="" placeholder='Search Twitter' className=' bg-gray-100 w-4/5 outline-none mx-auto'/>
        </div>

        {/* CONTENT SECTION */}
         
         <div className="w-full h-full p-4 bg-gray-100 mt-5 rounded flex flex-col">
          <h1 className="font-extrabold text-2xl">Trends For You</h1>
         <TrendsCard title={"BlackStar"} trends={"Trending in Ghana"}/>
         <TrendsCard title={"Barcelona"} trends={"Sports Trending"}/>
         <TrendsCard title={"Justein Beiber"} trends={"Entertain.Trending"}/>
         <TrendsCard title={"BlackStar"} trends={"Trending in Ghana"}/>
         <TrendsCard title={"BlackStar"} trends={"Trending in Ghana"}/>
         </div>




      </div>
    </div>
  )
}

export default TrendsContainer