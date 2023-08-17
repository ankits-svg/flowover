import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
  const userAnswers = useSelector((state) => state.userAnswers);
  const questions = useSelector((state) => state.questions);
  const score = useSelector((state) => state.score);

  // Calculate correct answers count, incorrect answers count, total score, and percentage
  const correctAnswersCount = userAnswers.filter((userAnswer, index) => userAnswer === questions[index].correct_answer).length;
  const incorrectAnswersCount = questions.length - correctAnswersCount;
  const totalScore = score;
  const percentage = (correctAnswersCount / questions.length) * 100;

  return (
    <div>
      <h2>Results</h2>
      <p>Correct Answers: {correctAnswersCount}</p>
      <p>Incorrect Answers: {incorrectAnswersCount}</p>
      <p>Total Score: {totalScore}</p>
      <p>Percentage: {percentage}%</p>
    </div>
  );
};

export default Results;
