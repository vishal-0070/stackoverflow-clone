import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../../actions/currentUser'

export default function Questions({ question }) {
  const user=useSelector((state)=> state.currentUser)
  const navigate=useNavigate();

  return (
    <div className='display-question-container'>
      <div className='display-votes-ans'>
        <p>{question.upVote.length-question.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className='display-votes-ans'>
        <p>{question.noOfAnswers}</p>
        <p>Answers</p>
      </div>
      <div className='display-question-details'>
        <Link to={`/Questions/${question._id}`}className='question-title-link'>{question.questionTitle}</Link>
        <div className='display-tags-time'>
             <div className='display-tags'>
                {
                  question.questionTags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                  ))
                }
             </div>
             <p className='display-time'>
              asked {moment(question.askedOn).fromNow()} {question.userPosted}
             </p>
        </div>
      </div>
    </div>
  )
}
