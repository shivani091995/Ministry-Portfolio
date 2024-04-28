import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './login.css'; // Import your external CSS file here

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email :"", password: "" , confirmPassword: ""});
    const [loginError, setLoginError] = useState(false);
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const [gmail , setGmail] = useState("");

    const handleChange = (e) => {
        if(e.target.name === "email")
            setGmail(e.target.value);
    
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Implement your login functionality here
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        console.log(gmail);
        // Implement your forgot password functionality here
    }
 

    return (
        <>
       
            <div className="main">
            <div className="login-container">
                <div className="user-login">User Login</div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* <label>Email</label> */}
                        <input type="email" className="form-control" placeholder="Enter Email" name="email" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        {/* <label>Password</label> */}
                        <input type="password" className="form-control" placeholder="Enter Password" name="password" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        {/* <label>Confirm Password</label> */}
                        <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
                    </div>
                
                    <button type="submit" id="btn">Log In</button>
                </form>

                <div className="forgot-password">
                    <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
                </div>

                {loginError && <div className="alert alert-danger mt-3">Invalid Mail or Password</div>}
            </div>
            </div>

            
        </>
    );
}
