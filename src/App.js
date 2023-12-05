
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
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            
            <Route path="/payment" element={<PaymentStatus />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/feedbackdata" element={<FeedbackData />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route index element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
