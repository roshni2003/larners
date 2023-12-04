


import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './header/Navbar';
import Home from "./header/Home"
import About from './header/About';
import PaymentStatus from './header/PaymentStatus';
// import Feedback from './header/Feedback';
import Contact from './header/Contact';
import Footer from './Footer/Footer';
// import Courses from './Courses';
import Css from './languages/Css';
import English from './languages/English';
import Javascript from './languages/Javacript';
import Ract from './languages/Ract';
import Html from './languages/Html';
// import DataView from './DataView'; import DataView from './components/DataView';
// import  DataView from './Dataview';


// import AddPost from '../AddPost';




// import React from "react";

// import Registration  from './Registration';
// import Login from './login';
// import ForgetPassword from './forgetpassword';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeedbackData from './FeedbackData';
// import Dataview from './Dataview'; 
import Feedback from "./header/Feedback";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/css" element={<Css />} />
          <Route path="/english" element={<English />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/ract" element={<Ract />} />
          <Route path="/html" element={<Html />} />
          <Route path='/' element={<Navbar />}>
            <Route path='about' element={<About />}></Route>
            <Route path='payment' element={<PaymentStatus />}></Route>
            <Route path='feedback' element={<Feedback />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='feedback' element={<Feedback/>}></Route>
             {/* <Route path='/' element={<Dataview/>}></Route> */}
             <Route path='/feedbackdata' element={<FeedbackData/>}></Route>
             <Route index element={<Home />} />
          </Route>
        </Routes>

      </BrowserRouter>
      {/* <Home /> */}
      <Footer />

      {/* <Home/>
       <AddPost/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration  />} />
          <Route path="/reset-password" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

