import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Question from './pages/Questions/Question'
import Askquestion from './pages/AskQuestion/Askquestion'
import DisplayQuestions from './pages/Questions/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import { Users } from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'

export default function AllRoutes() {
  return (
    <Routes>
        <Route  path="/Home" element={<Home/>}/>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Auth" element={<Auth/>}/>
        <Route  path="/Questions" element={<Question/>}/>
        <Route  path="/AskQuestion" element={<Askquestion/>}/>
        <Route  path="/Questions/:id" element={<DisplayQuestions/>}/>
        <Route  path="/Tags" element={<Tags/>}/>
        <Route  path="/Users" element={<Users/>}/>
        <Route  path="/Users/:id" element={<UserProfile/>}/> 
    </Routes>
  )
}
