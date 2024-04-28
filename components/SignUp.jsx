import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'; // Import your external CSS file here

export function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "", confirmPassword: "" });
    const [formErrors, setFormErrors] = useState({});
    const [signUpError, setSignUpError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    }

    const validateField = (name, value) => {
        const errors = { ...formErrors };

        switch (name) {
            case "name":
                errors.name = /^[A-Za-z\s]+$/.test(value) ? "" : "Name should contain only letters and spaces";
                break;
            case "phone":
                errors.phone = /^[0-9]{10}$/.test(value) ? "" : "Phone should contain exactly 10 numbers";
                break;
            case "email":
                errors.email = /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email address";
                break;
            case "password":
                errors.password =
                    value.length >= 6 && /[A-Z]/.test(value) && /\d/.test(value) && /[!@#$%^&*(),.?":{}|<>]/.test(value)
                        ? ""
                        : "Password must be at least 6 characters long, contain one uppercase letter, one number, and one special character";
                break;
            case "confirmPassword":
                errors.confirmPassword = value === formData.password ? "" : "Passwords do not match";
                break;
            default:
                break;
        }
        setFormErrors(errors);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(formErrors).some((error) => error !== "")) {
            return;
        }

        try {     
            // Implement signup functionality here
        } catch (error) {
            console.log(error);
            setSignUpError(true);
            setTimeout(() => {
                setSignUpError(false);
            }, 2000);
        }
    }

    return (
        <>
            <div className="main1">
                <div className="signup-container">
                    <div className="user-registration">User Registration</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="signup-form-control" placeholder="Enter Name" name="name" onChange={handleChange} />
                            {formErrors.name && <div className="signup-alert alert-danger mt-3">{formErrors.name}</div>}
                        </div>
                        <div className="form-group">
                            <input type="text" className="signup-form-control" placeholder="Enter Phone" name="phone" onChange={handleChange} />
                            {formErrors.phone && <div className="signup-alert alert-danger mt-3">{formErrors.phone}</div>}
                        </div>
                        <div className="form-group">
                            <input type="email" className="signup-form-control" placeholder="Enter Email" name="email" onChange={handleChange} />
                            {formErrors.email && <div className="signup-alert alert-danger mt-3">{formErrors.email}</div>}
                            {signUpError && <div className="signup-alert alert-danger mt-3">User with this email already exists.</div>}
                        </div>
                        <div className="form-group">
                            <input type="password" className="signup-form-control" placeholder="Enter Password" name="password" onChange={handleChange} />
                            {formErrors.password && <div className="signup-alert alert-danger mt-3">{formErrors.password}</div>}
                        </div>
                        <div className="form-group">
                            <input type="password" className="signup-form-control" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
                            {formErrors.confirmPassword && <div className="signup-alert alert-danger mt-3">{formErrors.confirmPassword}</div>}
                        </div>
                        <button type="submit" className="signup-btn" id="signup-btn">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}
