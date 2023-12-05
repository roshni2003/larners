
import React from 'react';
import './App.css';
import Routing from './Routing'
import Home from './header/Home';
import StudentProfile from './student/StudentProfile';
import Footer from './Footer/Footer';

function App() {
  return (

    <>

      <Routing />
      <Home />
      <StudentProfile/>
      <Footer />
    </>

  );
}

export default App;
