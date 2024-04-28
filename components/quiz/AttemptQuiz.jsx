import React, { useEffect, useState } from "react";
import NavigationBar from "../NavigationBar";
import { Container, Table, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getQuizAndQuestion, submitQuiz } from "../../Service/EduQuiz";
import "./YourQuizComponentStyles.css"; // Import your custom CSS file

export function AttemptQuiz() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  async function populateQuestions() {
    try {
      const result = await getQuizAndQuestion(1);
      console.log(result);
      setQuestions(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    populateQuestions();
  }, []);

  const handleOptionSelect = (questionId, selectedOption) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, optionSelected: parseInt(selectedOption, 10) }
          : question
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(questions);
      const result = await submitQuiz(1, questions);
      console.log(result);

      // Add your logic for handling the response if needed

      // Redirect or perform any other action after successful submission
      // navigate("/quiz-summary"); // Update the route accordingly
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  return (
    <>
      
      <Container>
        <Form onSubmit={handleSubmit}>
          <Table className="quiz-table" responsive>
            <tbody>
              {questions.map((q, index) => (
                <React.Fragment key={q.id}>
                  <tr>
                    <td>{index + 1}. {q.question}</td>
                  </tr>
                  <tr>
                    <td>
                      <Button
                        variant={q.optionSelected === 1 ? "primary" : "outline-primary"}
                        onClick={() => handleOptionSelect(q.id, 1)}
                        className="quiz-button"
                      >
                        {q.option1}
                      </Button>
                      <Button
                        variant={q.optionSelected === 2 ? "primary" : "outline-primary"}
                        onClick={() => handleOptionSelect(q.id, 2)}
                        className="quiz-button"
                      >
                        {q.option2}
                      </Button>
                      <Button
                        variant={q.optionSelected === 3 ? "primary" : "outline-primary"}
                        onClick={() => handleOptionSelect(q.id, 3)}
                        className="quiz-button"
                      >
                        {q.option3}
                      </Button>
                      <Button
                        variant={q.optionSelected === 4 ? "primary" : "outline-primary"}
                        onClick={() => handleOptionSelect(q.id, 4)}
                        className="quiz-button"
                      >
                        {q.option4}
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      &nbsp;
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default AttemptQuiz
