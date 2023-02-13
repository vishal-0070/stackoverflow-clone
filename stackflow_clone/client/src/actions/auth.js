import * as api from '../api/api.js'
import { currentUser } from './currentUser.js';

export const signup=(authdata,navigate)=>async (dispatch)=>{
    try {
        const {data}=await api.signup(authdata);
        dispatch({ type : 'AUTH' ,data})
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const login=(authdata,navigate)=>async (dispatch)=>{
    try {
        const {data}=await api.login(authdata);
        dispatch({ type : 'AUTH' ,data})
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/')
    } catch (error) {
        console.log(error);
    }
}