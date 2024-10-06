import React from "react";

import { useNavigate } from "react-router-dom"; 

const AdminLogIn = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleLogin = () => {
 
    navigate("/DashBoard");
  };

  return (
    <div>
      <h1 id="login">Admin Login</h1>
      <div id="container">
        <p>UserID</p>
        <input id="username" type='text' placeholder="Type your user ID" required />
        <p>Password</p>
        <input id="password" type='password' placeholder="Type your password" required />
        <p>Role</p>
        <input id="username" type='text' placeholder="Type your role" required />

        <p id="forgot">Forgot password?</p>

      
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

export default AdminLogIn;
