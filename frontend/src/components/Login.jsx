import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "../css/Login.css";
import instavibe from "../images/instavibe.png";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:7080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Login failed.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="login-container">
      <div id="image-section">
  <img src={instavibe} alt="Image Alt Text" />
</div>

      <div id="login-section">
        <h1>Login Here</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input
            type="password" 
            id="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </div>
        <button onClick={handleLogin}>Submit</button>
        <p id="newuser">
          New user? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
