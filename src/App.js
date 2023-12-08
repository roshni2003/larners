import React from 'react';

import './App.css';
import Routing from './Routing';
import Course from './header/Course'

import StudentProfile from './student/StudentProfile';
import Home from "./header/Home";

import Footer from './Footer/Footer'; 
import AddPost from './AddPost';


function App() {
  return (
    <>
     
     <Routing />
      <Home />
      <AddPost />
      <Footer />
      <Course/>

      <StudentProfile/>

    </>
  );
}

export default App;


