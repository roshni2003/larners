import React from 'react';
import { AppBar, Toolbar, Button, useMediaQuery, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AboutDropdown from '../About/AboutDropdown';

const Navbar = () => {
  const linkStyle = { color: 'black', textDecoration: 'none' };
  const courses = [
    { label: 'Course', link: '/Course' },
    { label: 'Payment Status', link: '/payment' },
    { label: 'Feedback', link: '/feedback' },
    { label: 'Register', link: '/register' },
    { label: 'Student Profile', link: '/studentprofile' }
  ];

  const isMobile = useMediaQuery('(max-width:600px)'); 

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <img
            src="logo.jpeg"
            alt="Logo"
            width="120"
            height="50"
          />
          <div style={{coursesStyle}}>

          </div>
      
          <Button color="inherit"><Link to="/payment" style={linkStyle}>Payment Status</Link></Button>
          <Button color="inherit"><Link to="/feedback" style={linkStyle}>Feedback</Link></Button>
          <Button color="inherit"><Link to="/contact" style={linkStyle}>Contact</Link></Button>
          <Button color="inherit"><Link to="/register" style={linkStyle}>Register</Link></Button>
          <Button color="inherit"><Link to="/studentprofile" style={linkStyle}>StudentProfile</Link></Button>
         <Button color="inherit"><Link to="/Course" style={linkStyle}>Cource</Link></Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;