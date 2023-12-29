// Register.js
import React, { useState } from 'react';
import './Register.css'
import  {useTheme} from '../context/ThemeContext' 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useAuth}  from '../context/AuthContext.js'
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSuccesfull, setIsSuccessful]=useState(false);
  const {registerUser} = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 const {theme, toggleTheme} = useTheme();

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(formData);
    setIsSuccessful(true);
   console.log("Form submitted successfully!", formData);
  };
  
  if (isSuccesfull) {
    return <Navigate to="/login" />;
  }


  return (
    <div className='register-container' style={{ backgroundColor: theme.background, color: theme.text }}>
      <h2 >Register Form</h2>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
