
import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
    grievance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch('http://localhost:3302/submitSuggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        window.alert("Suggestion submitted successfully");
        console.log('Suggestion submitted successfully:', data);
      } else {
        console.error('Suggestion submission failed:', data.message);
      }
    } catch (error) {
      console.error('Error during suggestion submission:', error);
    }
  };

  return (
    <>
     <NavigationBar />
    <div>
    <Container className="mt-5">
      <h3>Contact Details</h3>
      <Row className="mt-5">
        <Col xs={3}>
          <h4> Ministry Of Defence</h4>
          <p>Suggestions From all india are accepted.</p>
        </Col>
        <Col xs={3}>
          <h4>Address</h4>
          <p>5-A, South Block New Delhi-110011</p>
        </Col>
        <Col xs={3}>
          <h4>Phone Number and Email</h4>
          <p> ministryofdefence@email.com</p>
          <p>+ 01 234 567 88</p>
          <p>+ 01 234 567 89</p>
        </Col>
        <Col xs={3}>
          <h4>Social Media Links</h4>
          <p>
            <a href='https://www.linkedin.com/' className='text-reset'>
              linkedin
            </a>
          </p>
          <p>
            <a href='https://www.facebook.com/' className='text-reset'>
              Facebook
            </a>
          </p>
          <p>
            <a href='https://www.Instagram.com/' className='text-reset'>
              Instagram
            </a>
          </p>
          <p>
            <a href='https://www.twitter.com/' className='text-reset'>
              Twitter
            </a>
          </p>
        </Col>
        <Col className="mt-5">
          <h3>Suggestion/Grievance Form</h3>
        </Col>
        <Form onSubmit={handleSubmit} className="mt-5">
          <Form.Group controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formSuggestion">
            <Form.Label>Suggestion</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your suggestion"
              name="suggestion"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGrievance">
            <Form.Label>Grievance</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your grievance"
              name="grievance"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
    </div>
    </>
  );
};




