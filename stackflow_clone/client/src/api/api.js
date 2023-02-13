import axios from 'axios'

const API=axios.create({baseURL : 'https://stack-overflow-clone-pradip.herokuapp.com'})

export const signup=(authdata)=> API.post('/user/signup',authdata);
export const login=(authdata)=> API.post('/user/login',authdata);
export const askQuestions=(data)=> API.post('/Questions/Askquestion',data);
export const getQuestions=()=> API.get('/Questions/Get');
export const postAnswer=(id,userId,noOfAnswers , answerBody , userAnswered)=> API.patch(`answer/post/${id}`,{userId,noOfAnswers , answerBody , userAnswered}) 
export const delAnswer=(id)=>API.delete(`Questions/Delete/${id}`);
export const deleteAnswer=(id,answerId,noOfAnswers)=> API.patch(`answer/Delete/${id}`,{answerId,noOfAnswers})
export const votes=(id,value,userId)=> API.patch(`/Questions/Votes/${id}`,{ value,userId })
export const users=()=> API.get('/users/');
export const userUpdates=(id,name,about,tags)=> API.patch(`users/Update/${id}`,{name,about,tags})