import { combineReducers } from "redux";
import authReducer from './auth.js'
import currentUser from "./currentUser.js";
import  askquestion  from "./askquestion.js";
import userReducer from "./user.js";

export default combineReducers({
    authReducer,currentUser,askquestion,userReducer
})
