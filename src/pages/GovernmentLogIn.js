import React from "react";
import { useNavigate } from "react-router-dom"; 

const GovernmentLogIn = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
   

   
    navigate("/DashBoard");
  };

  return (
    <div>
      <h1 id="login">Government Login</h1>
      <div id="container">
        <p>UserID</p>
        <input id="username" type="text" placeholder="Type your user ID" required />
        <p>Password</p>
        <input id="password" type="password" placeholder="Type your password" required />

        <p id="forgot">Forgot password?</p>
        <input type="date" id="date" />

        
        <button onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default GovernmentLogIn;
