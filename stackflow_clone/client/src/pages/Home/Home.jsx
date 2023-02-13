import React from 'react'
import '../../App.css'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import HomeSideBar from '../../components/HomeSideBar/HomeSideBar'

export default function Home() {
  return (
    <div className='home-container-1'>
      <LeftSideBar/>
      <div className='home-container-2'>
         <HomeSideBar/>
         <RightSideBar/>
      </div>
    </div>
  )
}
