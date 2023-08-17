import {
    SET_QUIZ_SETTINGS,
    FETCH_QUIZ_QUESTIONS_REQUEST,
    FETCH_QUIZ_QUESTIONS_SUCCESS,
    FETCH_QUIZ_QUESTIONS_FAILURE,
    SUBMIT_ANSWER,
    NEXT_QUESTION,
    PREVIOUS_QUESTION,
    SUBMIT_QUIZ,
  } from '../actions/actionTypes';
  
  const initialState = {
    quizSettings: {},
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    score: 0,
  };
  
  export const quizReducer = (state = initialState, action) => {
    console.log("action.payload:",action.payload)
    switch (action.type) {
      case SET_QUIZ_SETTINGS:
        return {
          ...state,
          quizSettings: action.payload,
        };
  
      case FETCH_QUIZ_QUESTIONS_REQUEST:
        // Handle loading state
        return state;
  
      case FETCH_QUIZ_QUESTIONS_SUCCESS:
        return {
          ...state,
          questions: action.payload,
        };
  
      case FETCH_QUIZ_QUESTIONS_FAILURE:
        // Handle error state
        return state;
  
      case SUBMIT_ANSWER:
        // Update userAnswers and calculate score
        return state;
  
      case NEXT_QUESTION:
        // Move to the next question
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
        };
  
      case PREVIOUS_QUESTION:
        // Move to the previous question
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex - 1,
        };
  
      case SUBMIT_QUIZ:
        // Calculate the final score
        return state;
  
      default:
        return state;
    }
  };
  
  