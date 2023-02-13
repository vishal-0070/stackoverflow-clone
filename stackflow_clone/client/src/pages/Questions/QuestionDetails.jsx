import React from 'react'
import { Link, useParams ,useNavigate } from 'react-router-dom'
import upvote from '../../assests/sort-up-solid.svg'
import downvote from '../../assests/sort-down-solid.svg'
import './Questions.css'
import {useSelector,useDispatch} from 'react-redux'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { useState} from 'react'
import { postAnswer ,deleteQuestion,votes } from '../../actions/askquestions'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import { useLocation } from 'react-router-dom'

export default function QuestionDetails() {
    const {id}=useParams();

    var user =useSelector((state)=> state.currentUser)
    var getQuestionList=useSelector((state)=> state.askquestion)
    var questionsList=getQuestionList.data;
    console.log(getQuestionList)

   const dispatch=useDispatch();
   const navigate=useNavigate();

    const [Answer, setAnswer] = useState('')
    const handleAnswers=(e,length)=>{
      e.preventDefault();
       if(user===null){
        alert("Login or Signup to answer");
        navigate('/Auth');
       }
       else{
        if(Answer ===''){
          alert("Write Something to post");
        }
        else{
          dispatch(postAnswer({id,userId:user.result._id,noOfAnswers: length+1, answerBody: Answer ,userAnswered: user.result.name }))
        }
       }
    }

    const location=useLocation();
    const url='https://stackoverflow-clone-pradip.netlify.app/'

    const handleShare=()=>{
      copy(url+location.pathname);
      alert("Copy the Location : "+url+location.pathname);
    }

    const deleteQuestionHandler=()=>{
      dispatch(deleteQuestion(id,navigate));
    }

    const handleup=()=>{
      dispatch(votes(id,'upvote',user.result._id))
    }

    const handledown=()=>{
      dispatch(votes(id,'downvote',user.result._id))
    }

    // var questionsList = [{ 
    //     _id: '1',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },{ 
    //     _id: '2',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },{ 
    //     _id: '3',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }]
  return (
    <div className='question-details-page'>
      {
        questionsList===null ?
        <h1>Loading...</h1> :
         <>
           {
             getQuestionList.data.filter(question => question._id === id).map(question=>(
                <div key={question._id}>
                     <section className='question-details-container'>
                         <h1>{question.questionTitle}</h1>
                         <div className='question-details-container-2'>
                             <div className='question-votes'>
                               <img src={upvote} alt="UpVote" className='votes-icon' width="18" onClick={handleup}/>
                               <p>{question.upVote.length-question.downVote.length}</p>
                               <img src={downvote} alt="DownVote" className='votes-icon' width="18" onClick={handledown}/>
                             </div>
                             <div style={{width: "100%"}}>
                                <p className='question-body'>{question.questionBody}</p>
                                <div className='question-details-tags'>
                                    {
                                        question.questionTags.map((tag)=>(
                                            <p key={tag}>{tag}</p>
                                        ))
                                    }
                                </div>
                                <div className="question-actions-user">
                                    <div>
                                      <button type='text' onClick={handleShare}>Share</button>  
                                    {  user!==null && (
                                        user.result._id===question.userId && 
                                        (<button type='text' onClick={deleteQuestionHandler}>Delete</button> )
                                    )
                                    }
                                    </div>
                                    <div>
                                        <p>Asked {moment(question.askedOn).fromNow()}</p>
                                        <Link to={`/Users/${question.userId}`} className='user-link' style={{color: '#0086d8'}}>
                                        <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                        <div>
                                            {question.userPosted}
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                             </div>
                         </div>
                     </section>
                     {
                        question.noOfAnswers!==0 && (
                            <section>
                                <h3>{question.noOfAnswers} Answers</h3>
                                <DisplayAnswer key={question._id} question={question}/>
                            </section>
                        )
                     }
                     <section className='post-ans-container'>
                       <h3>Your answer</h3>
                       <form onSubmit={(e)=>{handleAnswers(e,question.answer.length)}}>
                        <textarea onChange={(e)=>{setAnswer(e.target.value)}} id="" cols="30" rows="10"></textarea>
                        <input type="Submit" className='post-ans-btn' value="Post your answer"/>
                       </form>
                       <p>
                          Browse other questions tagged
                           {
                            question.questionTags.map((tag)=>(
                                 <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                            ))
                           } Or 
                           <Link to='/AskQuestion' style={{textDecoration: "none" , color: "#009dff"}}>Ask your own question</Link>
                       </p>
                     </section>
                </div>
             ))
           }
         </>
      }
    </div>
  )
}
