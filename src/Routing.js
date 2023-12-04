import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './header/Navbar';
import Course from './header/Course';
import PaymentStatus from './header/PaymentStatus';
import Feedback from './header/Feedback';
import Contact from './header/Contact';
import Css from './languages/Css';
import English from './languages/English';
import Javascript from './languages/Javacript';
import Ract from './languages/React';
import Html from './languages/Html';
import Registration from './Registration';
import Login from './login';
import ForgetPassword from './forgetpassword';
import StudentProfile from './student/StudentProfile';
const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route index element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/reset-password" element={<ForgetPassword />} />
                <Route path="/about" element={<Course />} />
                <Route path="/payment" element={<PaymentStatus />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/css" element={<Css />} />
                <Route path="/english" element={<English />} />
                <Route path="/javascript" element={<Javascript />} />
                <Route path="/ract" element={<Ract />} />
                <Route path="/html" element={<Html />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/studentprofile" element={<StudentProfile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
