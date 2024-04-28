import React, { useEffect, useState } from "react";
import { getUser, updateUser } from "../Service/Service";
import { Container, Navbar, Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", userStatus: "" , role :""});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const result = await getUser(id);
      setFormData(result); // Assuming result is an object with properties like name, phone, email, userStatus
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const result = await updateUser(id, formData);
      console.log(result);

      if (result.data && result.status === 200) {
        alert(result.data.message || "User updated successfully!");
        navigate("/getAllUsers");
      } else {
        alert(result.data.message || "Failed to update user.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="container d-flex justify-content-center align-items-center">
          <h2 className="mt-5">Update User</h2>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-md-center mt-3">
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={formData.name} name="name" onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={formData.phone} name="phone" onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>User Status</Form.Label>
                <Form.Control type="text" name="userStatus" value={formData.userStatus} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>User Role</Form.Label>
                <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3 justify-content-md-center">
            <Col lg={1}>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
