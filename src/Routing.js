import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './header/Navbar';
import Course from './header/Course';
import PaymentStatus from './header/PaymentStatus';
import Feedback from './header/Feedback';
import Contact from './header/Contact';
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
                <Route path="/registration" element={<Registration />} />
                <Route path="/reset-password" element={<ForgetPassword />} />
                <Route path="/about" element={<Course />} />
                <Route path="/payment" element={<PaymentStatus />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/studentprofile" element={<StudentProfile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
