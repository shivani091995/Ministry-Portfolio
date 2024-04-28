import React, { useState, useEffect } from 'react';
import { getQuizAndQuestion } from '../../Service/EduQuiz';
// import axios from 'axios';

const SubmitQuiz = () => {
    const [questions , setQuestions] = useState('');
  //const [questions, setQuestions] = useState([
    // {
    //   question: 'What is the capital of France?',
    //   options: ['London', 'Paris', 'Berlin'],
    //   answer: 'Paris',
    // },
    // {
    //   question: 'What is 2 + 2?',
    //   options: ['3', '4', '5'],
    //   answer: '4',
    // },
    // {
    //   question: 'Which planet is known as the Red Planet?',
    //   options: ['Mars', 'Venus', 'Jupiter'],
    //   answer: 'Mars',
    // },
    // ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await getQuizAndQuestion(1);
      console.log(response);
      setQuestions(response);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [currentQuestionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    // Calculate score
    let newScore = 0;
    questions.forEach((question, index) => {
      if (question.answer === selectedOptions[index]) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setShowResult(false);
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setScore(0);
    // fetchQuestions(); // Fetch new questions from the backend
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Quiz Result</h2>
          <p>You scored {score} out of {questions.length}.</p>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          {currentQuestion && (
            <div>
              <h2>{currentQuestion.question}</h2>
              <ul>
                {currentQuestion.options.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={selectedOptions[currentQuestionIndex] === option}
                        onChange={() => handleOptionSelect(option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>Previous</button>
              <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
              {currentQuestionIndex === questions.length - 1 && (
                <button onClick={handleSubmit}>Submit</button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubmitQuiz;
