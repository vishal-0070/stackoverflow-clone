import React from 'react'
import { useState } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import  {useNavigate} from 'react-router-dom'
import {askquestions} from '../../actions/askquestions'
import './Askquestions.css'

export default function Askquestion() {
   const [questionTitle, setquestionTitle] = useState('')
   const [questionBody, setquestionBody] = useState('')
   const [questionTags, setquestionTags] = useState('')

   const dispatch=useDispatch();
   const navigate=useNavigate();
   const user=useSelector((state)=>(state.currentUser))

  const HandleSubmit=(e)=>{
      e.preventDefault();
     dispatch(askquestions({questionTitle,questionBody,questionTags ,userPosted:user.result.name ,userId:user.result._id},navigate))
  }

  const pressedKey=(e)=>{
    if(e.key=== 'Enter'){
        setquestionBody(questionBody+ "\n");
    }
  }
    
  return (
    <div className="ask-question">
            <div className="ask-ques-container">
                <h1>Ask a public Question</h1>
                <form onSubmit={HandleSubmit}>
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you’re asking a question to another person</p>
                            <input type="text" id='ask-ques-title'  placeholder='Title of your question' onChange={(e)=>{setquestionTitle(e.target.value)}}/>
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea id="ask-ques-body" onChange={(e)=>{setquestionBody(e.target.value)}} onKeyPress={pressedKey}></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input type="text" id='ask-ques-tags' placeholder='e.g. (xml typescript wordpress)' onChange={(e)=>{setquestionTags(e.target.value.split(' '))}}/>
                        </label>
                    </div>
                    <input type="Submit" value='Reivew your question' className='review-btn'/>
                </form>
            </div>
        </div>
  )
}
