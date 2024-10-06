import React from 'react';
import { Link } from "react-router-dom"; 

const MyButton = ({ to, text }) => {
  return (
    <span>
    <Link to={to}>
      <button>{text}</button> 
    </Link>
    </span>
  );
};

export default MyButton;
