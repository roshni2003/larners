
import React from "react";
import Registration from './Registration';
import Login from './login';
import Forgetpassword from './forgetpassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="reset-password" element={<Forgetpassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
