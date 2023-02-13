import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAnswer } from '../../actions/askquestions'


export default function DisplayAnswer({ question }) {
const location=useLocation();
const dispatch=useDispatch();
const {id}=useParams();

var user =useSelector((state)=> state.currentUser)

const url="https://stackoverflow-clone-pradip.netlify.app/"
  const handleShare=()=>{
    copy(url+location.pathname);
    alert("Copy the Location : "+url+location.pathname);
  }

  const handleDelete=(answerId,noOfAnswers)=>{
     dispatch(deleteAnswer(id,answerId,noOfAnswers))
  }

    return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className='display-ans' key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type='text' onClick={handleShare}>Share</button>
                                {user!==null && (
                                    ans.userId===user.result._id && 
                                    (<button type='text' onClick={()=>handleDelete(ans._id,question.noOfAnswers-1)}>Delete</button>)
                                )
                            }
                            </div>
                            <div>
                                <p>Answered {moment(ans.answeredOn).fromNow()} </p>
                                <Link to={`/Users/${user?.result?._id}`} className='user-link' style={{ color: '#0086d8' }}>
                                    <Avatar backgroundColor="green" px="8px" py="5px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
