import * as api from '../api/api.js'

export const getusers=()=>async(dispatch)=>{
   try {
    const {data}=await api.users();
    dispatch({type: 'GET_USERS' , payload: data})
   } catch (error) {
    console.log(error);
   }
}

export const UpdateUsers=(id,name,about,tags)=>async(dispatch)=>{
   try {
      const {data}=await api.userUpdates(id,name,about,tags);
      dispatch({type: 'USER_UPDATES' , payload : data})
   } catch (error) {
       console.log(error);
   }
}