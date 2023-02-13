import * as api from '../api/api.js'

export const askquestions=(data,navigate)=> async (dispatch)=>{
    
    try {
        const {takedata} = await api.askQuestions(data);
        
        dispatch({type: "POST_QUESTION" , payload:takedata})
        dispatch(getquestions())
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const getquestions=()=>async(dispatch)=>{
    try {
        const get =await api.getQuestions();
        dispatch({type: "GET_QUESTIONS", payload : get.data})
    } catch (error) {
        console.log(error);
    }
}

export const postAnswer=(answerData)=>async(dispatch)=>{
    try {
        const {id,userId,noOfAnswers , answerBody , userAnswered}= answerData;
        const {data}=await api.postAnswer(id,userId,noOfAnswers , answerBody , userAnswered)
        dispatch({type: "POST_ANSWER" , payload: data});
        dispatch(getquestions());
    } catch (error) {
        console.log(error);
    }
   
}

export const deleteQuestion=(id,navigate)=>async(dispatch)=>{
    try {
        const {data}= await api.delAnswer(id);
        dispatch({type : "DELETE_QUESTION",payload: data});
        dispatch(getquestions());
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const deleteAnswer=(id,answerId,noOfAnswers)=>async(dispatch)=>{

    try {
        const {data}=await api.deleteAnswer(id,answerId,noOfAnswers);
        dispatch({type: "DELETE_ANSWER" , payload: data})
        dispatch(getquestions());

    } catch (error) {
        console.log(error);
    }
}

export const votes=(id,value,userId)=>async (dispatch)=>{
    try {
        const { data } = await api.votes(id,value,userId)
        dispatch(getquestions())
    } catch (error) {
        console.log(error);
    }
}