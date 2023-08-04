import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "../css/Signup.css";
import instavibe from "../images/instavibe.png";

function Signup() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:7080/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert('Signup successful!');
        navigate('/login');
      } else {
        alert('Signup failed.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="signup-container">
      <div id="image-section">
        <img src={instavibe} alt="Image Alt Text" />
      </div>

      <div id="signup-section">
        <h1>Signup Here</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
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
        <button onClick={handleSignup}>Submit</button>
        <p id="user">
          Already Signup? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
