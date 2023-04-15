import React from 'react';
import {AiOutlineMore} from 'react-icons/ai';

const TrendsCard = ({trends,title}) => {
  return (
    <div className=" w-full flex justify-between items-center p-4 my-1 hover:bg-teal-50 cursor-pointer">
    <div className="w-full  flex flex-col">
     <span>{trends}</span>
     <h1 className="font-bold">#{title}</h1>
    </div>
    <AiOutlineMore/>
    </div>
  )
}

export default TrendsCard