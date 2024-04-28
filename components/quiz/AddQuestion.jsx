import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import NavigationBar from '../NavigationBar';
import { insertQuestion } from '../../Service/EduQuestion';

export function AddQuestion() {
    const params = useParams();
    const [formData, setFormData] = useState({
        question: "",
        module: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        rightAnswer: "",
    });
   
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      //  e.preventDefault();
        try {
          console.log(formData);
            const result = await insertQuestion(formData);
            console.log(result);
            alert(result);
            setIsSubmitted(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            
            <Container className="d-flex justify-content-center align-items-center">
                <div className="container">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Question</Form.Label>
                                <Form.Control
                                    type="text"                                   
                                    placeholder="Enter Question"
                                    name="question"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>module name</Form.Label>
                                <Form.Control
                                    type="text"                                   
                                    placeholder="Enter option1"
                                    name="module"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>   
                        </Row>
                        <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Option 1</Form.Label>
                                <Form.Control
                                    type="text"                                   
                                    placeholder="Enter option1"
                                    name="option1"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>   
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Option 2</Form.Label>
                                <Form.Control
                                    type="text"                                   
                                    name="option2"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        </Row>                                  
                        <Row>
                        <Col lg={4}>
                        <Form.Group className="mb-3">
                                 <Form.Label>Option 3</Form.Label>
                                 <Form.Control
                                     type="text"                                    
                                     name="option3"
                                     onChange={handleChange}
                                  />
                        </Form.Group>
                        </Col>
                        <Col lg={4}>
                        <Form.Group className="mb-3">
                                 <Form.Label>Option 4</Form.Label>
                                 <Form.Control
                                     type="text"                                    
                                     name="option4"
                                     onChange={handleChange}
                                  />
                        </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg={4}>
                        <Form.Group className="mb-3">
                                 <Form.Label>rightAnswer</Form.Label>
                                 <Form.Control
                                     type="text"                                    
                                     name="rightAnswer"
                                     onChange={handleChange}
                                  />
                        </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <Button variant="primary" type="submit">
                                    Add
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Row className="mt-3">
                        <Col lg={4}>
                            {isSubmitted ? <Alert variant="success">Question Inserted</Alert> : null }
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}
