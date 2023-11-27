
import React from "react;
import Home from "./header/Home"
import Registration  from './Registration';
import Login from './login';
import ForgetPassword from './forgetpassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Home/>
      {/* <BrowserRouter>
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
