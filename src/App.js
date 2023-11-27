

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './header/Navbar';
import About from './header/About';
import PaymentStatus from './header/PaymentStatus';
import Feedback from './header/Feedback';
import Contact from './header/Contact';
import Footer from './Footer/Footer';
// import Courses from './Courses';
import Css from './languages/Css';
import English from './languages/English';
import Javascript from './languages/Javacript';
import Ract from './languages/Ract';
import Html from './languages/Html';



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
            {/* <Route path="/" element={<Courses />} /> */}
            {/* <Route path="/css" element={<Css />} />
            <Route path="/english" element={<English />} />
            <Route path="/javascript" element={<Javascript />} />
            <Route path="/ract" element={<Ract />} />
            <Route path="/html" element={<Html />} /> */}
            </Route>
          </Routes>

       </BrowserRouter>
       <Footer/>
       
      
    </>
  );
}

export default App;

