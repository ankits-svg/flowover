import axios from "axios";
import {
  FETCH_QUIZ_QUESTIONS_REQUEST,
  FETCH_QUIZ_QUESTIONS_SUCCESS,
  FETCH_QUIZ_QUESTIONS_FAILURE,
  SET_QUIZ_SETTINGS,
  SUBMIT_ANSWER,
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  SUBMIT_QUIZ,
} from "./actionTypes";

// Action creator to set quiz settings
export const setQuizSettings = (settings) => {
  return {
    type: SET_QUIZ_SETTINGS,
    payload: settings,
  };
};

// Action creator to fetch quiz questions
export const fetchQuizQuestions = (category, difficulty, amount) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_QUIZ_QUESTIONS_REQUEST });

    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
      );
      const questions = response.data.results;
      console.log("res.data.results:", questions);
      dispatch({ type: FETCH_QUIZ_QUESTIONS_SUCCESS, payload: questions });
    } catch (error) {
      dispatch({
        type: FETCH_QUIZ_QUESTIONS_FAILURE,
        error: "Error fetching questions",
      });
    }
  };
};

// Action creator to submit answer
export const submitAnswer = (answer) => {
  return {
    type: SUBMIT_ANSWER,
    payload: answer,
  };
};

// Action creator for moving to next question
export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION,
  };
};

// Action creator for moving to previous question
export const previousQuestion = () => {
  return {
    type: PREVIOUS_QUESTION,
  };
};

// Action creator to submit the quiz
export const submitQuiz = () => {
  return {
    type: SUBMIT_QUIZ,
  };
};
