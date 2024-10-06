import React from "react";

import { useNavigate } from "react-router-dom"; 

const SignUp = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleSignUp = () => {
   
    navigate("/DashBoard"); 
  };

  return (
    <div>
      <h1 id="login">Sign Up</h1>
      <div id="container">
        <p>UserID</p>
        <input id="username" type='text' placeholder="Type your user ID" required />
        <p>Password</p>
        <input id="password" type='password' placeholder="Type your password" required />
        <p>Confirm Password</p>
        <input id="password" type='password' placeholder="Re-enter password" required />
        <p>Role</p>
        <input id="password" type='text' placeholder="Type your role" required />

       
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
