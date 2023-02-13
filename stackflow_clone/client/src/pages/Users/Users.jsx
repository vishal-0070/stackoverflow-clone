import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import { useLocation } from 'react-router-dom'
import { UsersList } from './UsersList'

export const Users = () => {
    const location=useLocation();

  return (
    <div className='home-container-1'>
        <LeftSideBar/>
        <div className="home-container-2">
            {
               location.pathname === '/Users' ?
               <UsersList/> :
               <></>   
            }
        </div>

    </div>
  )
}
