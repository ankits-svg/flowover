import { LOGIN_USER, POST_ANSWER, POST_QUESTION, REGISTER_USER, UPVOTE_QUESTION } from "./actionType"
import axios from 'axios'
//Register user
export const registerUser=(userdata)=>{
    return {type:REGISTER_USER,payload:userdata}
}

//Login user
const loginUser = (credentials) => {
    return { type: LOGIN_USER, payload: credentials };
  };

//pPost question
export const postQuestion = (questionData) => {
    return { type: POST_QUESTION, payload: questionData };
  };

//UPVOTE QUESTION
export const upvoteQuestion = (questionId) => {
    return { type: UPVOTE_QUESTION, payload: questionId };
  };
//POST ANSWERS  
export const postAnswer = (answerData) => {
    return { type: POST_ANSWER, payload: answerData };
  };

export const log=(payload,navigate)=>(dispatch)=>{
   return axios.get('https://friends-chicken-adda.onrender.com/data',payload).then(res=>{
                // console.log(res.data)
                let check=res.data.find(el=>el.email===payload.email && el.password===payload.password)
                // console.log("check:",check)
                if(check!==undefined){
                    alert('Log In successfull!!')
                    dispatch(loginUser(check))
                    navigate("/dash")
                }else{
                    alert('Wrong Credentials!!')
                }
            }).catch(err=>{
                console.log(err)
            })
}