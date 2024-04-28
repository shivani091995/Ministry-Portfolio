import React, { useState } from "react";
import { login } from "../Service/Service";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email :"", password: "" });
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn , setIsLoggedIn] = useState(false);

//   const handleChange = evt => {
//     const value = evt.target.value;
//     setState({
//       ...state,
//       [evt.target.name]: value
//     });
//   };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
}
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
        const result = await login(formData);
        console.log(result);
        if (result.status == 200) {
            alert(` welcome back ${result.name}`);
            localStorage.setItem("token", "Bearer "+result.data.jwt);
            localStorage.setItem("role", "user");
            localStorage.setItem("userID",result.data.userId);
            setIsLoggedIn(true);
            navigate("/");
          }else{
            setLoginError(true);
        }
          
    } catch (error) {
        console.log(error);
        alert(error.statusMessage);
        setLoginError(true);
    }
}

//   const handleOnSubmit = evt => {
//     evt.preventDefault();

//     const { email, password } = state;
//     alert(`You are login with email: ${email} and password: ${password}`);

//     for (const key in state) {
//       setState({
//         ...state,
//         [key]: ""
//       });
//     }
//   };

  return (
    <div className="form-container1 sign-in-container1">
      <form onSubmit={handleOnSubmit}>
        <h1 className="h1tag">Sign in</h1>
        <div className="social-container1">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          //value={state.email}
          className="inputtag"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
         // value={state.password}
         className="inputtag"
          onChange={handleChange}
        />
         <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
         // value={state.password}
         className="inputtag"
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button className="buttontag">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
