// import React, { useState } from "react";
// import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import NavigationBar from "../components/NavigationBar";


// export function RegistrationForm() {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "" });
//     const [formErrors, setFormErrors] = useState({});
//     const [signUpError, setSignUpError] = useState(false);

//     return (
//         <>
//         <NavigationBar />
//         <div>
//             {/* <Navigationbar /> */}
//             <Container>
//                 <div className="container d-flex justify-content-center align-items-center">
//                     <h2 className="mt-5">Become a Member</h2>
//                 </div>
//                 <Form onSubmit={handleSubmit}>
//                     <Row className="justify-content-md-center mt-3">
//                         <Col lg={4}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Name</Form.Label>
//                                 <Form.Control type="text" required placeholder="Enter Name" name="name" onChange={handleChange} />
//                                 {formErrors.userName && <Alert variant="danger" className="mt-3">{formErrors.userName}</Alert>}
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row className="justify-content-md-center">
//                         <Col lg={4}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Phone</Form.Label>
//                                 <Form.Control type="text" required placeholder="Enter Phone" name="phone" onChange={handleChange} />
//                                 {formErrors.userPhone && <Alert variant="danger" className="mt-3">{formErrors.userPhone}</Alert>}
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row className="justify-content-md-center">
//                         <Col lg={4}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control type="email" required placeholder="Enter Email" name="email" onChange={handleChange} />
//                                 {formErrors.userEmail && <Alert variant="danger" className="mt-3">{formErrors.userEmail}</Alert>}
//                                 {signUpError && <Alert variant="danger" className="mt-3">User with this email already exists.</Alert>}
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row className="justify-content-md-center">
//                         <Col lg={4}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control type="password" required placeholder="Enter Password" name="password" onChange={handleChange} />
//                                 {formErrors.userPassword && <Alert variant="danger" className="mt-3">{formErrors.userPassword}</Alert>}
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row className="mt-3 justify-content-md-center">
//                         <Col lg={1}>
//                             <Button variant="primary" type="submit">
//                                 Sign Up
//                             </Button>
//                         </Col>
//                     </Row>
//                 </Form>
//             </Container>
//             </div>
//         </>
//     );
// }