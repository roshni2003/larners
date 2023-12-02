import React from 'react';

import './App.css';
import Routing from './Routing';
import Home from './header/Home';
import AddPost from './AddPost';
import Footer from './Footer/Footer';

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
      <BrowserRouter>
        <Routes>
      
          <Route path='/' element={<Navbar />}>
            <Route path='/payment' element={<PaymentStatus />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/Course" element={<Course/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      <Home />
      <AddPost />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/reset-password" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


