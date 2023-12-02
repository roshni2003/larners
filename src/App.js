import React from 'react';
import React from "react";
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./header/Home"
import AddPost from './AddPost';
import Routing from './Routing';
import Footer from './Footer/Footer';
import StudentProfile from './student/StudentProfile';


function App() {
  return (
    <>
      <Routing />
      <Home />
      <AddPost />
      <Footer />
      <StudentProfile/>
    </>
  );
}

export default App;
 
