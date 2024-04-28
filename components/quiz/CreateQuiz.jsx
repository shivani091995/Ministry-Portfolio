import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { createQuiz } from "../../Service/EduQuiz"; // Import your service for creating a quiz
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const [quizDetails, setQuizDetails] = useState({
    title: "",
   // description: "",
    // Add any other details you want to collect for the quiz
  });

  const [questions, setQuestions] = useState([
    {
      module:"",
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      rightAnswer: null,
    },
  ]);

  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index][name] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { module:"", question: "", option1: "", option2: "", option3: "", option4: "", rightAnswer: null }]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the service function to create the quiz
      const newQuiz = await createQuiz({
        ...quizDetails,
        questions,
      });

      console.log("New Quiz created:", newQuiz);

      // Redirect to the quiz display page or any other route
      navigate("/quiz/" + newQuiz.id);
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };

  return (
    <Container>
      <h2>Create a New Quiz</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter quiz title"
            name="title"
            value={quizDetails.title}
            onChange={(e) => setQuizDetails({ ...quizDetails, title: e.target.value })}
          />
        </Form.Group>

        {questions.map((question, index) => (
          <div key={index}>
            <Form.Group controlId={`question${index}`}>
              <Form.Label>{`Question ${index + 1}`}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter question ${index + 1}`}
                name="question"
                value={question.question}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>

            <Form.Group controlId={`module${index}`}>
              <Form.Label>{`Module ${index + 1}`}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter module ${index + 1}`}
                name="module"
                value={question.module}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>

            <Form.Group controlId={`option1${index}`}>
              <Form.Label>{`Option 1 ${index + 1}`}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter option 1 ${index + 1}`}
                name="option1"
                value={question.option1}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>

            <Form.Group controlId={`option2${index}`}>
              <Form.Label>{`Option 2 ${index + 1}`}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter option 2 ${index + 1}`}
                name="option2"
                value={question.option2}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>

            <Form.Group controlId={`option3${index}`}>
              <Form.Label>{`Option 3 ${index + 1}`}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter option 3 ${index + 1}`}
                name="option3"
                value={question.option3}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>

            <Form.Group controlId={`option4${index}`}>
              <Form.Label>{`Option 4 ${index + 1}`}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter option 4 ${index + 1}`}
                name="option4"
                value={question.option4}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>

            <Form.Group controlId={`rightAnswer${index}`}>
              <Form.Label>{`Right Answer ${index + 1}`}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter right answer ${index + 1}`}
                name="rightAnswer"
                value={question.rightAnswer}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>

            {index > 0 && (
              <Button variant="danger" onClick={() => handleRemoveQuestion(index)}>
                Remove Question
              </Button>
            )}
          </div>
        ))}

        <Button variant="primary" onClick={handleAddQuestion}>
          Add Question
        </Button>

        <Button variant="success" type="submit">
          Create Quiz
        </Button>
      </Form>
    </Container>
  );
};

export default CreateQuiz;
