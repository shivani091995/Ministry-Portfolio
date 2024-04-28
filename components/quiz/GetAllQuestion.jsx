import React, { useEffect, useState } from "react";
import NavigationBar from "../NavigationBar";
import { Container, Table } from "react-bootstrap";
import { getAllQuestion } from "../../Service/EduQuestion";

export function GetAllQuestion() {
    const [questions, setQuestions] = useState([]);

    async function populateQuestionState() {
        try {
            const result = await getAllQuestion();
            setQuestions(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateQuestionState();
    }, []);

    return (
        <>
            
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Option 1</th>
                            <th>Option 2</th>
                            <th>Option 3</th>
                            <th>Option 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question) => (
                            <tr key={question.id}>
                                <td>{question.question}</td>
                                <td>{question.option1}</td>
                                <td>{question.option2}</td>
                                <td>{question.option3}</td>
                                <td>{question.option4}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default GetAllQuestion;
