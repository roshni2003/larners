import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './header/Navbar';
import Course from './header/Course';

import PaymentStatus from './header/PaymentStatus';
import Feedback from './header/Feedback';
import FeedbackData from './FeedbackData';
import Registration from './Registration';
import Login from './login';
import ForgetPassword from './forgetpassword';
import Home from './header/Home';
import Donate from './student/Donate';
import Contact from './student/Contact';
import StudentProfile from './student/StudentProfile';
// Check file extension in the import statement


import Footer from './Footer/Footer';
// Check for typos in import statements and variable declarations


const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/reset-password" element={<ForgetPassword />} />
              
                <Route path="/payment" element={<PaymentStatus />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/studentprofile" element={<StudentProfile />} />
                <Route path="/Course" element ={<Course/>} />
            
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/feedbackData" element={<FeedbackData/>}/>
                <Route path="/register" element={<Registration />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/studentprofile" element={<StudentProfile />} />

            </Routes>
        </BrowserRouter>
         
    );
   
};

export default Routing;






