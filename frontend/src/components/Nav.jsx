import React from 'react'
import "../css/Nav.css";
import { Link } from 'react-router-dom'; 
function Nav() {
  return (
    <div id="navbar">
      <div>Logo</div>
      <div id="right-nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
     </div>
    </div>
  )
}

export default Nav
