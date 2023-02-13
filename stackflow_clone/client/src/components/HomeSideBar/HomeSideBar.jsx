import React from 'react'
import {Link, useLocation, useNavigate}  from 'react-router-dom'
import {useSelector} from 'react-redux'
import QuestionList from './QuestionList';
import './HomeSideBar.css'

export default function HomeSideBar() {
  const user=1;
  const navigate=useNavigate();

   var questionsList=useSelector((state)=> state.askquestion)

  //  var questionsList = [{ 
  //       _id: 1,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 2,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //       userPosted: "mano",
  //       userId: 1,
  //       askedOn: "jan 1",
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 2,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 3,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   }]

    const location=useLocation();

   const navigatePage=()=>{
     if(user==null){
      alert("Please login to ask a question!!")
      navigate('/Auth')
     }
     else{
      navigate('/AskQuestion')
     }
   }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
           location.pathname==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
         <button onClick={navigatePage} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data===null ? <h2>Loading...</h2> :
          <>
            <p>{questionsList.data.length} Questions</p>
            <QuestionList questionsList={questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}
