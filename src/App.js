import React from "react";
import {
    BrowserRouter as Router, Routes,
    Route
} from "react-router-dom";
import GovernmentLogIn from "./pages/GovernmentLogIn";
import DashBoard from "./pages/DashBoard";
import CenterLogIn from "./pages/CenterLogIn";
import AdminLogIn from "./pages/AdminLogIn";
import SignUp from "./pages/SignUp";
import MyButton from "./components/MyButton";
import "./App.css";
import  "./pages/LogIn.css"; 

import CameraDetails from "./pages/CameraDetails";
const App = () => {
    return (
        <div id="header">
            <Router>
                <MyButton to="CenterLogIn" text="Center Management Login" />
                <MyButton to="GovernmentLogIn" text="Government Login" />
                <MyButton to="AdminLogIn" text="Admin Login" />
                <MyButton to="SignUp" text="Sign Up" />

                <Routes>
                    <Route path="/CenterLogIn" element={<CenterLogIn />} />
                    <Route path="/GovernmentLogIn" element={<GovernmentLogIn />} />
                    <Route path="/AdminLogIn" element={<AdminLogIn />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/DashBoard" element={<DashBoard />} /> 
                   
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/camera-details/:id" element={<CameraDetails />} />
      
                </Routes>
            </Router>
           
            <Router>
     
    </Router>
        </div>
    );
};

export default App;
