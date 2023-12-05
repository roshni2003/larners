
import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './header/Home';
import Navbar from './header/Navbar';
import PaymentStatus from './header/PaymentStatus';
import Feedback from './header/Feedback';

import About from './About/About';
import Footer from './Footer/Footer';
import FeedbackData from './FeedbackData';
import StudentProfile from './student/StudentProfile';

function App() {
  return (

    <>

      <Routing />
      <Home />
      {/* <AddPost /> */}
      <Footer />
      <StudentProfile/>
    </>

  );
}

export default App;
