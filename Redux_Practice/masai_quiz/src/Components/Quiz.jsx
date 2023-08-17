import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuizQuestions,
  submitAnswer,
  nextQuestion,
  previousQuestion,
} from "../Redux/actions/quizActions";

const Quiz = () => {
  const dispatch = useDispatch();
  const quizSettings = useSelector((state) => state.quizSettings);
  const questions = useSelector((state) => state.questions);
  const currentQuestionIndex = useSelector(
    (state) => state.currentQuestionIndex
  );
  const userAnswers = useSelector((state) => state.userAnswers);
console.log("userAnswers:",userAnswers)
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );

  useEffect(() => {
    if (quizSettings.numberOfQuestions > 0) {
      dispatch(
        fetchQuizQuestions(
          quizSettings.category,
          quizSettings.difficulty,
          quizSettings.numberOfQuestions
        )
      );
    }
  }, [quizSettings]);

  useEffect(() => {
    if (questions.length > 0) {
      const allOptions = questions.map((question) => [
        ...question.incorrect_answers,
        question.correct_answer,
      ]);
      setShuffledOptions(allOptions);
      setSelectedOptions(Array(questions.length).fill(null));
    }
  }, [questions]);

  const handleOptionChange = (index, option) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[index] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  const submitAnswerAndMoveToNext = () => {
    if (selectedOptions[currentQuestionIndex]) {
      dispatch(submitAnswer(selectedOptions[currentQuestionIndex]));
      dispatch(nextQuestion());
    }
  };

  const goBack = () => {
    dispatch(previousQuestion());
  };

  return (
    <div>
      <h2>Quiz</h2>
      {questions.length > 0 && (
        <div>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{questions[currentQuestionIndex].question}</p>
          <ul>
            {shuffledOptions[currentQuestionIndex].map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    checked={selectedOptions[currentQuestionIndex] === option}
                    onChange={() => handleOptionChange(currentQuestionIndex, option)}
                  />
                  {option}{" "}
                  {userAnswers[currentQuestionIndex] === option &&
                    (option === questions[currentQuestionIndex].correct_answer
                      ? " - Correct"
                      : " - Incorrect")}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={goBack} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          <button onClick={submitAnswerAndMoveToNext} disabled={currentQuestionIndex === questions.length - 1}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
