import React from 'react';
import './App.css';
import Routing from './Routing';
import Home from './header/Home';
import AddPost from './AddPost';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
     
     <Routing />
      <Home />
      <AddPost />
      <Footer />
    </>
  );
}

export default App;


