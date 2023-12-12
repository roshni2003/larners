
import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const buttonStyle = { color: 'black' };

  return (
    <>
   <Button
        color="inherit"
        aria-controls="about-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={buttonStyle} 
      >
        About
      </Button>
      <Menu
        id="about-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/ourstory" style={{ color: 'black', textDecoration: 'none' }}>Ourstory</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/ourteam" style={{ color: 'black', textDecoration: 'none' }}>Ourteam</Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default About;
