import React from 'react';
import React from "react";
import './App.css';
import Home from "./header/Home"
import Routing from './Routing';
import Footer from './Footer/Footer';
import StudentProfile from './student/StudentProfile';

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
      <StudentProfile/>
    </>
  );
}

export default App;
 
