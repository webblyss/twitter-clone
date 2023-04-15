import React from 'react'
import SideNav from '../components/SideNav';
import FeedContainer from '../components/FeedContainer';
import TrendsContainer from '../components/TrendsContainer';
const HomePage = () => {
  return (
    <div className='main-container flex justify-between w-screen h-screen'>
        <SideNav/>
        <FeedContainer/>
        <TrendsContainer/>
    </div>
  )
}

export default HomePage