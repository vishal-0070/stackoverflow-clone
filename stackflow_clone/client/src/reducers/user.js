const userReducer=(states=[] , action)=>{
   switch (action.type) {
    case 'GET_USERS':
        return action.payload;
    case 'USER_UPDATES':
        return states.map((state)=> state._id === action.payload._id ? action.payload : state);
    default:
        return states;
   }

}

export default userReducer