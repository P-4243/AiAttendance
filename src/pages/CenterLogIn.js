import React from "react";

import { useNavigate } from "react-router-dom"; 

const CenterLogIn = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleLogin = () => {
    
    navigate("/DashBoard"); 
  };

  return (
    <div>
      <h1 id="login">Center Management Login</h1>
      <div id="container">
        <p>UserID</p>
        <input id="username" type='text' placeholder="Type your user ID" required />
        <p>Password</p>
        <input id="password" type='password' placeholder="Type your password" required />
        <p id="forgot">Forgot password?</p>
       

      
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

export default CenterLogIn;
