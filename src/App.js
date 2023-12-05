import React from 'react';
import './App.css';
import Home from "./header/Home"
import Routing from './Routing';
import Footer from './Footer/Footer';
import StudentProfile from './student/StudentProfile';

function App() {

  return (
    <>

      <Routing />
      <Home />
      <Footer />
      <StudentProfile/>
    </>
  );
}

export default App;
 
