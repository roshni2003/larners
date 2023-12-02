import React from 'react';
import './App.css';
import Routing from './Routing';
import Home from './header/Home';
import AddPost from './AddPost';
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


