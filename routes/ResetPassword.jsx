import React, { useState } from 'react';
import './resetpassword.css'; // Add your CSS file for styling
import { resetPassword } from '../Service/Service';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [verificationToken, setVerificationToken] = useState('');
  const [isTokenVerified, setIsTokenVerified] = useState(false);
  const [formData, setFormData] = useState({ email: `${sessionStorage.getItem('email')}` , password: '', confirmPassword: '' , token: `${sessionStorage.getItem('verifyToken')}`});
  const navigate = useNavigate();

  const handleVerificationTokenChange = (event) => {
    setVerificationToken(event.target.value);
  };

  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitFormData = async (e) => {
    e.preventDefault();
    console.log("handleSubmitFormData ", formData);
    const result = await resetPassword(formData);
    console.log(result);
    if (result.data.status === 200) {
      alert(result.data.message);
      navigate("/");
    } else {
      alert("Unable to change Password");
    }
  };

  const handleVerifyToken = (event) => {
    event.preventDefault();
    console.log("verify Token", sessionStorage.getItem("verifyToken"));
    if (verificationToken === sessionStorage.getItem("verifyToken")) {
      setIsTokenVerified(true);
      console.log('Token verified successfully!');
    } else {
      setIsTokenVerified(false);
      console.log('Token verification failed. Please check the token.');
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Password Reset</h2>
      <form onSubmit={handleVerifyToken}>
        <div className="input-container">
          <label htmlFor="verificationToken">Verification Token:</label>
          <input
            type="text"
            id="verificationToken"
            className="verification-token-input"
            value={verificationToken}
            
            onChange={handleVerificationTokenChange}
          />
        </div>
        <button type="submit">
          Verify Token
        </button>
      </form>
      {isTokenVerified ? (
        <form onSubmit={handleSubmitFormData}>
          {/* <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="email-input"
              //value={`${sessionStorage.getItem('email')}`}
              onChange={handlechange}   
            />
          </div> */}
          <div className="input-container">
            <label htmlFor='newPassword'>New Password:</label>
            <input
              type="password"
              id="newPassword"
              name="password"
              className="new-password-input"
              onChange={handlechange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="new-password-input"
              onChange={handlechange}
            />
          </div>

          <button type="submit" className="reset-password-button">
            Reset Password
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default ResetPassword;
