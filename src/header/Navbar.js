import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import Courses from './Courses';

import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = { color: 'black', textDecoration: 'none' };
  const coursesStyle = { color: 'black', marginLeft: 'auto' };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <img src="logo.jpeg" alt="Logo" width="120" height="50" />
          <div style={coursesStyle}>
            <Courses />
          </div>
          <Button color="inherit">
            <Link to="/about" style={linkStyle}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/payment" style={linkStyle}>
              Payment Status
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/feedback" style={linkStyle}>
              Feedback
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/studentprofile" style={linkStyle}>
              Student Profile
            </Link>
          </Button>
          
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
