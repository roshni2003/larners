import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './header/Navbar';
import Course from './header/Course';
import PaymentStatus from './header/PaymentStatus';
import Feedback from './header/Feedback';
import FeedbackData from "./FeedbackData";
import Contact from './header/Contact';
import Registration from './Registration';
import Login from './login';
import ForgetPassword from './forgetpassword';
import Home from './header/Home';
import StudentProfile from './student/StudentProfile';
import Footer from './Footer/Footer';
const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/reset-password" element={<ForgetPassword />} />
                <Route path="/about" element={<Course />} />
                <Route path="/payment" element={<PaymentStatus />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/feedbackData" element={<FeedbackData/>}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/studentprofile" element={<StudentProfile />} />

            </Routes>
            
            {/* <StudentProfile /> */}
            <Footer />
        </BrowserRouter>
    );
};

export default Routing;
