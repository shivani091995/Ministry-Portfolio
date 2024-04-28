import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';
import { adminlogin, forgotPassword } from '../Service/Service';

export function AdminLogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" ,confirmPassword:""});
    const [gmail , setGmail] = useState("");
    const handleChange = (e) => {
        if(e.target.name == "email")
        setGmail(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const result = await adminlogin(formData);
            if(result.status == 200 ){
                // localStorage.setItem("token", true);
                   localStorage.setItem("role", "admin");
                localStorage.setItem("token", "Bearer "+result.data.jwt);
                alert("welcome back admin ");
                navigate("/"); 
            }
            else{
                alert("insert valid password and email");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        console.log(gmail);
        const result = await forgotPassword(gmail);
        console.log("handleForgotPassword ",result);
        sessionStorage.setItem("email" , `${gmail}`)
        sessionStorage.setItem("verifyToken" , `${result.data}`);
        navigate("/resetPassword");
    }

    return (
        <>
            <NavigationBar/>
            <Container>
                <div className="container d-flex justify-content-center align-items-center">
                    <h2 className='mt-5'>Admin Login</h2>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-md-center mt-5">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" name="email" autoComplete='email' onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" name="password" autoComplete='password' onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>confirmPassword</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" name="confirmPassword" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3 justify-content-md-center" >
                        <Col lg={1}>
                            <Button variant="primary" type="submit">Log In</Button>
                        </Col>
                    </Row>
                    <Row className="mt-3 justify-content-md-center" >
                        <Col lg={1}> 
                            <Button variant="primary" onClick={handleForgotPassword}>forgot Password</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}