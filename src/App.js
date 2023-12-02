import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './header/Navbar';
import PaymentStatus from './header/PaymentStatus';
import Feedback from './header/Feedback';
import Contact from './header/Contact';
import Footer from './Footer/Footer';
import Css from './languages/Css';
import English from './languages/English';
import Javascript from './languages/Javacript';
import Ract from './languages/Ract';
import Html from './languages/Html';
import StudentProfile from './student/StudentProfile';
import Home from "./header/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            {/* <Route path='about' element={<About />} /> */}
            <Route path='payment' element={<PaymentStatus />} />
            <Route path='feedback' element={<Feedback />} />
            <Route path='contact' element={<Contact />} />
            <Route path='studentprofile' element={<StudentProfile />} />
          </Route>
          <Route path="/css" element={<Css />} />
          <Route path="/english" element={<English />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/ract" element={<Ract />} />
          <Route path="/html" element={<Html />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Home />
    </>
  );
}

export default App;
