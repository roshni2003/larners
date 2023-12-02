import React from 'react';
import React from "react";
import './App.css';
import Routing from './Routing';
import Home from './header/Home';
import AddPost from './AddPost';
import Footer from './Footer/Footer';
import StudentProfile from './student/StudentProfile';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './header/Navbar';
import Home from "./header/Home";
import Course from './header/Course'; // Adjust the filename and path as needed
import PaymentStatus from './header/PaymentStatus';
import Feedback from './header/Feedback';
import Contact from './header/Contact';
import Footer from './Footer/Footer'; 
import AddPost from './AddPost';
import Registration from './Registration';
import Login from './login';
import ForgetPassword from './forgetpassword';

function App() {
  return (
    <>
     
     <Routing />
      <Home />
      <AddPost />
      <Footer />

      <StudentProfile/>

    </>
  );
}

export default App;


