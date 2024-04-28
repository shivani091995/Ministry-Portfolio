import React, { useEffect, useState } from "react";
import NavigationBar from "../NavigationBar";
import { Container, Table, Button } from "react-bootstrap";
import { getQuizAndQuestion } from "../../Service/EduQuiz";
import "./YourQuizComponentStyles.css"; // Import your custom CSS file
import { useParams } from "react-router-dom";

export function GetQuestionsFromQuiz() {
  const [questions, setQuestions] = useState([]);
 // const quizId = useParams();
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

  // useEffect(() => {
  //   populateQuestions();
  // }, [quizId]);
  return (
    <>
      
      <Container>
        <Table className="quiz-table" responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Module</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q) => (
              <tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.question}</td>
                <td>{q.module}</td>
                <td>
                  {q.option1}, {q.option2}, {q.option3}, {q.option4}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
