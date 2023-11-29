
import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import Css from './languages/Css';
// import English from './languages/English';
// import Javascript from './languages/Javacript';
// import Ract from './languages/Ract';
// import Html from './languages/Html';


const Courses = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (course) => {
    navigate(`/${course.toLowerCase()}`); // Assuming routes are set up as '/javascript', '/html', etc.
    handleClose();
  };

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        Courses
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleNavigation('JAVASCRIPT')}>JAVASCRIPT</MenuItem>
        <MenuItem onClick={() => handleNavigation('HTML')}>HTML</MenuItem>
        <MenuItem onClick={() => handleNavigation('CSS')}>CSS</MenuItem>
        <MenuItem onClick={() => handleNavigation('REACT')}>REACT</MenuItem>
        <MenuItem onClick={() => handleNavigation('ENGLISH')}>ENGLISH</MenuItem>
      </Menu>
      {/* <Css/>
       <English/>
       <Ract/>
       <Html/>
       <Javascript/> */}
      
    </>
  );
};

export default Courses;
