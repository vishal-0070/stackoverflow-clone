import React from 'react'
import { useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assests/Banner.png'
import search from '../../assests/searchengin.svg'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import { currentUser } from '../../actions/currentUser'
import './Navbar.css'
import decode from 'jwt-decode'

export default function Navbar() {
    var user=useSelector((state)=> (state.currentUser));
    var dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(() => {
      if(user!==null){
      var gettoken=user.token;
      if(gettoken){
        const decodeToken=decode(gettoken)
        if(decodeToken*1000 < new Date().getTime())
          handleLogOut();
      }
    }
      dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))));
      console.log(user);
    }, [dispatch])
    

    const handleLogOut=()=>{
      dispatch({type: 'LOGOUT'})
      dispatch(currentUser(null));
      navigate('/');
    }

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to="/Home" className='nav-item nav-logo'>
            <img height={40} src={logo} alt="logo" />
        </Link>
        <Link to="/" className='nav-item nav-btn'>About</Link>
        <Link to="/" className='nav-item nav-btn'>Products</Link>
        <Link to="/" className='nav-item nav-btn'>For Teams</Link>
        <form>
           <input type="text" placeholder='Search...' />
           <img src={search} height='20' className='search-icon' alt="search" />
        </form>
        {user===null ?
        <Link to="/Auth" className='nav-item nav-links'>Log in</Link> :
        <>
           <Link to={`Users/${user.result._id}`} style={{color: 'white' , textDecoration: 'none'}}><Avatar backgroundColor='#009dff' px="8px" py="15px" borderRadius='50%' color='white'>{user.result.name.charAt(0).toUpperCase()}</Avatar></Link>
           <button className='nav-item nav-links' onClick={handleLogOut}>Log out</button>
        </>
    }
      </div>
    </nav>
  )
}
