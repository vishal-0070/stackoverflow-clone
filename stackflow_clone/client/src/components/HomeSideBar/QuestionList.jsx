import React from 'react'
import Questions from './Questions'

export default function QuestionList({questionsList}) {
  return (
    <div>
        {
            questionsList.map((question)=>(
                <Questions key={question._id} question={question}/>
            ))
        }
    </div>
  )
}
