import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Course from './header/Course';
import Footer from './Footer/Footer';
import Home from './header/Home';

function App() {
  return (
    <>
      <Course/>
      <Footer />
      <Home/>
    </>
  );
}

export default App;
