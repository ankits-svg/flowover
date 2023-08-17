import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuizSettings } from '../Redux/actions/quizActions';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Initialize quizSetting state with default values
  const [quizSetting, setQuizSetting] = useState({
    name: '',
    category: '', // Select category
    difficulty: '', // Select difficulty
    numberOfQuestions: 5,
  });

  const categories = [
    { id: '9', name: 'General Knowledge' },
    { id: '21', name: 'Sports' },
    { id: '22', name: 'Geography' },
    // Add more categories as needed
  ];

  const startQuiz = () => {
    // Validate input fields before starting the quiz
    if (quizSetting.name && quizSetting.category && quizSetting.difficulty) {
      dispatch(setQuizSettings(quizSetting));
      navigate('/quiz');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div>
      <h2>Quiz Settings</h2>
      <input
        type="text"
        placeholder="Name"
        value={quizSetting.name}
        onChange={(e) => setQuizSetting({ ...quizSetting, name: e.target.value })}
      />
      <select
        value={quizSetting.category}
        onChange={(e) => setQuizSetting({ ...quizSetting, category: e.target.value })}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <select
        value={quizSetting.difficulty}
        onChange={(e) => setQuizSetting({ ...quizSetting, difficulty: e.target.value })}
      >
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <input
        type="number"
        placeholder="Number of Questions"
        value={quizSetting.numberOfQuestions}
        onChange={(e) =>
          setQuizSetting({ ...quizSetting, numberOfQuestions: e.target.value })
        }
      />
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default Home;
