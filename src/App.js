
import React from 'react'
import Home from "./header/Home"
import Registration  from './Registration';
import Login from './login';
import ForgetPassword from './forgetpassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Css  from './languages/Css';
import English from "./languages/English"
import  Html  from './languages/Html'
import  Javascript  from './languages/Javacript';
import Ract from './languages/Ract';



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
            <Route path='/' element={<Navbar/>}>
            <Route path='about' element={<About/>}></Route>
            <Route path='payment' element={<PaymentStatus/>}></Route>
            <Route path='feedback' element={<Feedback/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
             <Route path="/" element={<Courses />} /> 
           
            </Route>
          </Routes>

       </BrowserRouter>
       <Footer/>
      <Home/>
       <AddPost/> 
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/reset-password" element={<ForgetPassword/>} />
        </Routes>
        <Home/>
      </BrowserRouter>
    </>
  );
}

export default App;

