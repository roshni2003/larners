import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './header/Navbar';
import Course from './header/Course';
import PaymentStatus from './header/PaymentStatus';
import Feedback from './header/Feedback';
import Registration from './Registration';
import Home from "./header/Home";
import ForgetPassword from './forgetpassword';
import StudentProfile from './student/StudentProfile';
import FeedbackData from "./FeedbackData";
import Ourteam from "./About/Ourteam";
import Ourstory from "./About/Ourstory";
const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route index element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/reset-password" element={<ForgetPassword />} />
                <Route path="/course" element={<Course />} />
                <Route path="/payment" element={<PaymentStatus />} />
                <Route path="/feedback" element={<Feedback />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="/feedbackData" element={<FeedbackData/>}/>
                <Route path="/register" element={<Registration />} />
                <Route path="/studentprofile" element={<StudentProfile />} />
                {/* <Route path="/" element={<AboutDropdown/>}/> */}
                <Route path="/Ourteam" element={<Ourteam />} />
                <Route path="/Ourstory" element={<Ourstory />} />

                
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./header/Navbar";
// import Course from "./header/Course";
// import PaymentStatus from "./header/PaymentStatus";
// import Feedback from "./header/Feedback";
// import Registration from "./Registration";
// import Home from "./header/Home";
// import ForgetPassword from "./forgetpassword";
// import StudentProfile from "./student/StudentProfile";
// import FeedbackData from "./FeedbackData";
// import About from "./About/About";
// import Ourteam from "./About/Ourteam";
// import Ourstory from "./About/Ourstory";

// const Routing = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="/registration" element={<Registration />} />
//         <Route path="/reset-password" element={<ForgetPassword />} />
//         <Route path="/course" element={<Course />} />
//         <Route path="/payment" element={<PaymentStatus />} />
//         <Route path="/feedback" element={<Feedback />} />
//         <Route path="/feedbackData" element={<FeedbackData />} />
//         <Route path="/register" element={<Registration />} />
//         <Route path="/studentprofile" element={<StudentProfile />} />
//         <Route path="/about" element={<About />} />
//         {/* <Route path="/" element={<About />} /> */}
//         <Route path="/Orteam" element={<Ourteam />} />
//         <Route path="/Ourstory" element={<Ourstory />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Routing;
