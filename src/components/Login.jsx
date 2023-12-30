// Login.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../components/Login.css';
import  {useTheme} from '../context/ThemeContext' 
import { useAuth } from '../context/AuthContext';


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const { userLogin} = useAuth();
  const [logged, setLogged] = useState(false);
  const {theme, toggleTheme} = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
   
    // Simulate authentication logic 
    if (credentials.username === 'omprakash' && credentials.password === 'password') {
     // onLogin(setCredentials);
     userLogin();
     setLogged(true);
      alert("Login successfully")
      console.log("Login Successfully!",credentials.username);
    } else {
      alert('Invalid username or password');
    }
  };
  
  if (logged) {
    return <Navigate to="/dashboard" />;
  }


  return (
    <div className="login-container" style={{ backgroundColor: theme.background, color: theme.text }}>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form> 

      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default Login;
